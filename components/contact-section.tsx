"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react"
import { useState } from "react"
import { AnimatedElement } from "@/components/animated-element"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl mb-4">
            Contacto
          </h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto">
            Para funciones, alianzas o información pedagógica
          </p>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedElement animation="fade-right" delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Correo electrónico</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                  placeholder="Motivo del contacto"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background min-h-[120px]"
                  placeholder="Cuéntanos sobre tu interés en el proyecto..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-background text-foreground hover:bg-background/90">
                Enviar mensaje
              </Button>
            </form>
          </AnimatedElement>

          <AnimatedElement animation="fade-left" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <a href="mailto:contacto@autobiografiacomadreja.com" className="flex items-center gap-4 text-background/80 hover:text-background transition-colors">
                    <div className="p-3 bg-background/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>contacto@autobiografiacomadreja.com</span>
                  </a>
                  <a href="tel:+573001234567" className="flex items-center gap-4 text-background/80 hover:text-background transition-colors">
                    <div className="p-3 bg-background/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+57 300 123 4567</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-6">Redes sociales</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-background/10 hover:bg-background/20 transition-colors" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-4 bg-background/10 hover:bg-background/20 transition-colors" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-4 bg-background/10 hover:bg-background/20 transition-colors" aria-label="YouTube">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-background/20">
                <p className="text-background/60 text-sm">
                  Bogotá, Colombia
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
