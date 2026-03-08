"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Clock, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { AnimatedElement } from "@/components/animated-element"

export function EducationSection() {
  const topics = [
    "Narrativa contemporánea",
    "Creación artística interdisciplinaria",
    "Crítica de la sociedad de consumo",
    "Construcción de identidad"
  ]

  return (
    <section id="colegios" className="py-24 sm:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedElement animation="fade-right">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-8 w-8" />
                <span className="text-sm font-medium text-background/60 uppercase tracking-widest">Experiencia Pedagógica</span>
              </div>
              
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
                Para colegios y estudiantes
              </h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={100}>
              <p className="text-background/80 text-lg mb-8">
                El proyecto ofrece una experiencia artística y pedagógica para estudiantes de <span className="text-background font-medium">grados 10° y 11°</span>.
              </p>
            </AnimatedElement>

            <div className="space-y-4 mb-8">
              <AnimatedElement animation="fade-right" delay={150}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-background/10">
                    <Users className="h-5 w-5" />
                  </div>
                  <span>Función teatral</span>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-right" delay={200}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-background/10">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span>Proyección audiovisual</span>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-right" delay={250}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-background/10">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span>Conversación sobre arte, identidad y sociedad</span>
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement animation="fade-up" delay={300}>
              <div className="flex items-center gap-2 text-sm text-background/60 mb-8">
                <Clock className="h-4 w-4" />
                <span>Duración aproximada: 2 horas</span>
              </div>

              <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground">
                <Link href="#contacto">Solicitar información</Link>
              </Button>
            </AnimatedElement>
          </div>

          <AnimatedElement animation="fade-left" delay={200}>
            <div className="bg-background/10 p-8 sm:p-10 border border-background/20">
              <h3 className="font-semibold text-xl mb-6">Temas abordados</h3>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-background/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="pt-1">
                      <p className="font-medium">{topic}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-background/20">
                <p className="text-background/80 text-sm italic">
                  El objetivo es acercar a los estudiantes a nuevas formas de narración y creación artística.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
