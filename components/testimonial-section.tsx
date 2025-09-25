import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Juliana",
      age: 34,
      text: "Eu tentei várias dietas sem sucesso. Depois que conheci esse método, perdi 7kg em 2 meses e ganhei muito mais energia!",
      rating: 5,
      photo: "/smiling-woman-34-years-old-healthy-lifestyle.jpg",
    },
    {
      name: "Carlos",
      age: 42,
      text: "Finalmente um método que se adapta à minha rotina corrida. Perdi 12kg sem abrir mão dos alimentos que gosto.",
      rating: 5,
      photo: "/smiling-man-42-years-old-healthy-lifestyle.jpg",
    },
    {
      name: "Maria",
      age: 28,
      text: "O suporte foi fundamental. Nunca me senti sozinha no processo. Resultado: -9kg e muito mais autoestima!",
      rating: 5,
      photo: "/smiling-woman-28-years-old-healthy-lifestyle.jpg",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">O que nossos clientes dizem</h2>
          <p className="text-xl text-muted-foreground">Histórias reais de transformação</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 relative">
              <CardContent className="p-6">
                <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Cliente verificado
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
