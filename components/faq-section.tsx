import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Preciso seguir dieta restrita?",
      answer:
        "Não! Esse método foi criado para se adaptar ao seu estilo de vida e rotina, sem cortes radicais. Você aprenderá a fazer escolhas inteligentes mantendo o prazer de comer bem.",
    },
    {
      question: "Funciona mesmo para quem não tem tempo?",
      answer:
        "Sim. As técnicas foram desenvolvidas justamente para pessoas com pouco tempo livre. O método se encaixa na sua rotina corrida, transformando pequenos momentos em grandes resultados.",
    },
    {
      question: "O produto é seguro?",
      answer:
        "100% aprovado e recomendado por especialistas em nutrição. Baseado em ciência comprovada e testado por milhares de pessoas com resultados consistentes e duradouros.",
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer:
        "Os primeiros resultados aparecem já nas primeiras semanas, com mais energia e disposição. A transformação completa acontece de forma gradual e sustentável, respeitando seu ritmo natural.",
    },
    {
      question: "Preciso fazer exercícios intensos?",
      answer:
        "Não é necessário! O método inclui atividades simples e prazerosas que podem ser feitas em casa, adaptadas ao seu nível atual. Movimento inteligente, não sofrimento.",
    },
    {
      question: "Tem garantia?",
      answer:
        "Sim, oferecemos garantia total de 7 dias. Se não ficar completamente satisfeito, devolvemos 100% do seu investimento sem perguntas ou burocracias.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground">Tire suas dúvidas sobre o método</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
