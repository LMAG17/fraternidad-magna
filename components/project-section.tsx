"use client"

import { BookOpen, Theater, Film } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export function ProjectSection() {
  return (
    <section id="proyecto" className="py-24 sm:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedElement animation="fade-right">
              <span className="text-sm font-medium text-background/60 uppercase tracking-widest">El Proyecto</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4 mb-6 text-balance">
                ¿Qué es Autobiografía de una Comadreja?
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={150}>
              <div className="space-y-4 text-background/80 text-base sm:text-lg leading-relaxed">
                <p>
                  Un proyecto artístico transmedia que narra la vida de Jimi Mustela, un personaje que atraviesa su ascenso a la fama y su vertiginosa caída como si fuera un territorio lleno de recuerdos, contradicciones y preguntas sobre el mundo contemporáneo.
                </p>
                <p>
                  El resultado es una experiencia que mezcla narración, música, artes visuales y reflexión crítica sobre la sociedad de consumo, la fama, la identidad y la memoria personal.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <div className="space-y-6">
            <AnimatedElement animation="fade-left">
              <p className="text-background/60 text-sm uppercase tracking-widest mb-4">La historia se despliega en tres lenguajes</p>
            </AnimatedElement>
            
            <div className="grid gap-4">
              <AnimatedElement animation="fade-left" delay={100}>
                <div className="bg-background/10 p-6 border border-background/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background/10">
                      <Theater className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Teatro</h3>
                      <p className="text-background/70 text-sm">Farsa grotesca de una marioneta rebelde</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="fade-left" delay={200}>
                <div className="bg-background/10 p-6 border border-background/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background/10">
                      <Film className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cine</h3>
                      <p className="text-background/70 text-sm">Falso documental sobre el ascenso y caída</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="fade-left" delay={300}>
                <div className="bg-background/10 p-6 border border-background/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background/10">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Libro Ilustrado</h3>
                      <p className="text-background/70 text-sm">82 páginas de verdades incómodas</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
