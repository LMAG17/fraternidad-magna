"use client"

import { AnimatedElement } from "@/components/comadreja/animated-element"
import { Clock, GraduationCap, MessageSquare, Users } from "lucide-react"

export function EducationSection() {
  const topics = [
    "Narrativa contemporánea",
    "Creación artística interdisciplinaria",
    "Crítica de la sociedad de consumo",
    "Construcción de identidad"
  ]

  return (
    <section
      id="colegios"
      className="py-24 sm:py-32 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedElement animation="fade-right">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-8 w-8" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  Experiencia Pedagógica
                </span>
              </div>
              
              <h2 className="font-[family-name:var(--font-comadreja)] text-3xl sm:text-4xl md:text-5xl mb-6 text-balance">
                Para  <span className="text-[#EF2E2E]">colegios</span>
              </h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={100}>
              <p className="text-muted-foreground text-lg mb-8">
                El proyecto ofrece una experiencia artística y pedagógica para
                estudiantes de{" "}
                <span className="text-foreground font-medium">
                  grados 10° y 11°
                </span>
                .
              </p>
            </AnimatedElement>

            <div className="space-y-4 mb-8">
              <AnimatedElement animation="fade-right" delay={150}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">Función teatral</span>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-right" delay={200}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">Proyección audiovisual</span>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-right" delay={250}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">
                    Conversación sobre arte, identidad y sociedad
                  </span>
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement animation="fade-up" delay={300}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Clock className="h-4 w-4" />
                <span>Duración aproximada: 2 horas</span>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement animation="fade-left" delay={200}>
            <div className="bg-muted p-8 sm:p-10 border border-border shadow-sm">
              <h3 className="font-[family-name:var(--font-comadreja)] font-semibold text-2xl mb-6 text-foreground">
                Temas abordados
              </h3>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="pt-1">
                      <p className="font-medium text-foreground">{topic}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/40">
                <p className="text-muted-foreground text-sm italic">
                  El objetivo es acercar a los estudiantes a nuevas formas de
                  narración y creación artística.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
