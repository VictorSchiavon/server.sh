"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, ShoppingCart } from "lucide-react"

interface ResultSectionProps {
  answers: Record<string, string>
}

export function ResultSection({ answers }: ResultSectionProps) {
  const getDifficulty = () => {
    const difficultyMap: Record<string, string> = {
      "no-time": "falta de tempo",
      anxiety: "ansiedade e fome emocional",
      "no-discipline": "falta de disciplina",
      "dont-know": "não saber por onde começar",
    }
    return difficultyMap[answers["main-difficulty"]] || "suas dificuldades específicas"
  }

  const handlePurchaseClick = () => {
    // Replace with your actual purchase/checkout URL
    window.open("https://checkout.exemplo.com/produto-emagrecimento", "_blank")
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999" // Replace with real number
    const message =
      "Olá! Acabei de fazer o teste e gostaria de falar com um especialista sobre o método de emagrecimento."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-success-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">🎯 Resultado Personalizado</h2>
        </div>

        <Card className="border-2 mb-8">
          <CardContent className="p-8">
            <p className="text-xl leading-relaxed mb-8">
              Com base nas suas respostas, identificamos que o método{" "}
              <span className="font-bold text-primary">Emagrecimento Saudável</span> é ideal para o seu perfil. Ele foi
              desenvolvido exatamente para pessoas que enfrentam{" "}
              <span className="font-semibold">{getDifficulty()}</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Button size="lg" className="py-6 text-lg" onClick={handlePurchaseClick}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Quero conhecer agora
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="py-6 text-lg border-2 bg-transparent"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com especialista
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-card p-6 rounded-lg border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Método Personalizado</h3>
            <p className="text-sm text-muted-foreground">Adaptado especificamente para seu perfil e necessidades</p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Resultados Comprovados</h3>
            <p className="text-sm text-muted-foreground">Milhares de pessoas já transformaram suas vidas</p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Suporte Completo</h3>
            <p className="text-sm text-muted-foreground">Acompanhamento especializado durante toda jornada</p>
          </div>
        </div>
      </div>
    </section>
  )
}
