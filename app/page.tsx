"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuizSection } from "@/components/quiz-section"
import { ResultSection } from "@/components/result-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"
import { ArrowDown, MessageCircle, ShoppingCart } from "lucide-react"

export default function HomePage() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})

  const handleStartQuiz = () => {
    setShowQuiz(true)
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers)
    setQuizCompleted(true)
    setTimeout(() => {
      document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handlePurchaseClick = () => {
    // Scroll to quiz if not completed, otherwise show purchase options
    if (!quizCompleted) {
      handleStartQuiz()
    } else {
      // You can replace this with your actual purchase/checkout URL
      window.open("https://pay.braip.co/ref?pv=proxxnde&af=afixjx7mvd", "_blank")
    }
  }

  const handleWhatsAppContact = (message: string) => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "551193649040" // Replace with real number
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-8 pb-20 px-4 text-center bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/healthy-woman-with-scale-showing-weight-loss.jpg"
              alt="Transformação saudável"
              className="mx-auto rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            👉 Descubra em 1 minuto qual é o método ideal para{" "}
            <span className="text-primary">perder peso de forma saudável</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">
            Responda ao teste rápido e receba uma recomendação personalizada sem custo.
          </p>

          <div className="mb-4">
            <Button
              size="lg"
              className="py-6 px-8 text-xl bg-green-600 hover:bg-green-700 text-white"
              onClick={handleStartQuiz}
            >
              🔵 Começar agora o teste
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            🔒 100% seguro, não leva nem 1 minuto
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-card p-6 rounded-xl border-2">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Rápido e Fácil</h3>
              <p className="text-muted-foreground">Apenas 5 perguntas simples para descobrir seu método ideal</p>
            </div>

            <div className="bg-card p-6 rounded-xl border-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-2">100% Personalizado</h3>
              <p className="text-muted-foreground">Recomendação baseada no seu perfil e objetivos únicos</p>
            </div>

            <div className="bg-card p-6 rounded-xl border-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Totalmente Gratuito</h3>
              <p className="text-muted-foreground">Sem custos, sem compromisso. Apenas informação valiosa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      {showQuiz && (
        <div id="quiz-section">
          <QuizSection onComplete={handleQuizComplete} />
        </div>
      )}

      {/* Result Section */}
      {quizCompleted && (
        <div id="result-section">
          <ResultSection answers={quizAnswers} />
        </div>
      )}

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQ */}
      <FaqSection />

      <section className="py-16 px-4 bg-green-50 dark:bg-green-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-card p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-lg">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">Garantia de 7 dias</h3>
            <p className="text-lg text-green-700 dark:text-green-300">
              Se não gostar, devolvemos 100% do valor. Sem perguntas, sem complicações.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            🔥 As vagas promocionais acabam hoje! Garante agora sua transformação.
          </h2>

          <p className="text-xl text-muted-foreground mb-12">
            Junte-se a milhares de pessoas que já transformaram suas vidas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="py-6 px-8 text-lg flex-1 bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handlePurchaseClick}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar agora
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="py-6 px-8 text-lg border-2 flex-1 bg-transparent"
              onClick={() =>
                handleWhatsAppContact("Olá! Gostaria de falar com um especialista sobre o método de emagrecimento.")
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com especialista
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            ✅ Método aprovado por especialistas • ✅ Garantia de satisfação • ✅ Suporte completo
          </p>
        </div>
      </section>
    </main>
  )
}
