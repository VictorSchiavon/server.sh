"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizQuestion {
  id: string
  question: string
  options: { value: string; label: string }[]
}

const questions: QuizQuestion[] = [
  {
    id: "tried-before",
    question: "Você já tentou emagrecer antes?",
    options: [
      { value: "many-times", label: "Sim, várias vezes" },
      { value: "few-times", label: "Algumas vezes" },
      { value: "never", label: "Nunca tentei" },
    ],
  },
  {
    id: "main-difficulty",
    question: "Qual é sua maior dificuldade para emagrecer?",
    options: [
      { value: "no-time", label: "Falta de tempo" },
      { value: "anxiety", label: "Ansiedade/fome" },
      { value: "no-discipline", label: "Falta de disciplina" },
      { value: "dont-know", label: "Não sei por onde começar" },
    ],
  },
  {
    id: "weight-goal",
    question: "Quantos quilos gostaria de perder?",
    options: [
      { value: "up-to-5", label: "Até 5kg" },
      { value: "5-to-10", label: "5 a 10kg" },
      { value: "more-than-10", label: "Mais de 10kg" },
    ],
  },
  {
    id: "exercise",
    question: "Você pratica atividade física atualmente?",
    options: [
      { value: "regularly", label: "Sim, regularmente" },
      { value: "sometimes", label: "Às vezes" },
      { value: "no", label: "Não pratico" },
    ],
  },
  {
    id: "timeline",
    question: "Em quanto tempo gostaria de ver resultados?",
    options: [
      { value: "1-month", label: "1 mês" },
      { value: "3-months", label: "3 meses" },
      { value: "6-months", label: "6 meses ou mais" },
    ],
  },
]

interface QuizSectionProps {
  onComplete: (answers: Record<string, string>) => void
}

export function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedAnswer, setSelectedAnswer] = useState("")

  const handleNext = () => {
    if (!selectedAnswer) return

    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: selectedAnswer,
    }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      onComplete(newAnswers)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-full bg-secondary rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-balance">{questions[currentQuestion].question}</h3>

            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="text-lg cursor-pointer flex-1 py-3">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Button onClick={handleNext} disabled={!selectedAnswer} className="w-full mt-8 py-6 text-lg" size="lg">
              {currentQuestion < questions.length - 1 ? "Próxima pergunta" : "Ver meu resultado"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
