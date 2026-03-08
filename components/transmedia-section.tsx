"use client"

import { Badge } from "@/components/ui/badge"
import { Theater, Film, BookOpen, Clock, Award } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"

export function TransmediaSection() {
  return (
    <section id="transmedia" className="py-24 sm:py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Experiencia Transmedia</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4 text-balance">
            Tres formatos, una historia
          </h2>
        </AnimatedElement>

        <div className="grid gap-8 lg:gap-12">
          {/* Teatro */}
          <AnimatedElement animation="fade-up" delay={100}>
            <div className="bg-background p-8 sm:p-10 border-2 border-foreground relative">
              <div className="absolute -top-4 left-8 bg-foreground text-background px-4 py-1">
                <span className="font-[family-name:var(--font-display)] text-sm">01</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Theater className="h-8 w-8" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Teatro</h3>
                  </div>
                  <p className="text-lg font-medium text-foreground mb-4">
                    Farsa grotesca de una Marioneta Rebelde
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Jimi comparte anécdotas de su absurda autobiografía y sus puntos de vista sobre los ideales de la sociedad de consumo. El espectáculo combina diferentes técnicas escénicas con elementos de danza y teatro gestual en un escenario minimalista.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    <span className="text-foreground font-medium">Seis actores interpretan a un mismo personaje.</span> Todos usan la misma máscara. Todos encarnan a Jimi. La voz del personaje guía la obra mientras los cuerpos se alternan, se duplican y se contradicen.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>55 minutos</span>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      Es Cultura Local 2025
                    </Badge>
                  </div>
                </div>
                <div className="aspect-video bg-muted border-2 border-border flex items-center justify-center">
                  <Theater className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Cine */}
          <AnimatedElement animation="fade-up" delay={200}>
            <div className="bg-background p-8 sm:p-10 border-2 border-foreground relative">
              <div className="absolute -top-4 left-8 bg-foreground text-background px-4 py-1">
                <span className="font-[family-name:var(--font-display)] text-sm">02</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Film className="h-8 w-8" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Cortometraje</h3>
                  </div>
                  <p className="text-lg font-medium text-foreground mb-4">
                    Un falso documental sobre Jimi Mustela
                  </p>
                  <p className="text-muted-foreground mb-6">
                    La narración se hace en tercera persona. Por momentos escuchamos apartes de entrevistas hechas a Jimi en los años 70 y 80. Parodiando el género documental en su estructura y forma, al mostrar falso material de archivo, como videos, fotografías o portadas de revistas inexistentes.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>7 minutos</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Cinexcusa 2024</Badge>
                    <Badge variant="outline" className="text-xs">Bajo Cauca 2024</Badge>
                    <Badge variant="outline" className="text-xs">FENCINE 2025</Badge>
                    <Badge variant="outline" className="text-xs">Laberinto 2025</Badge>
                  </div>
                </div>
                <div className="lg:order-1 aspect-video bg-muted border-2 border-border flex items-center justify-center">
                  <Film className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Libro */}
          <AnimatedElement animation="fade-up" delay={300}>
            <div className="bg-background p-8 sm:p-10 border-2 border-foreground relative">
              <div className="absolute -top-4 left-8 bg-foreground text-background px-4 py-1">
                <span className="font-[family-name:var(--font-display)] text-sm">03</span>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-8 w-8" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Libro Ilustrado</h3>
                  </div>
                  <p className="text-lg font-medium text-foreground mb-4">
                    El camino a la fama a través del ridículo y la mentira
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Esta es la autobiografía no autorizada (porque nadie la pidió) de Jimi Mustela, una vieja gloria del espectáculo barato que pasó de ser estrella de televisión a influencer de popó… y de ahí al olvido más absoluto.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Entre carcajadas, sarcasmo y verdades incómodas, Jimi nos cuenta cómo el sistema nos manipula, cómo nos dejamos manipular y cómo, aun sabiendo todo esto, seguimos felices de ser marionetas andantes.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm text-muted-foreground">82 páginas • Ilustrado • Contiene códigos QR</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Disponible en BibloRed</Badge>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      Es Cultura Local 2025
                    </Badge>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-muted border-2 border-border flex items-center justify-center max-w-xs mx-auto lg:mx-0">
                  <BookOpen className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
