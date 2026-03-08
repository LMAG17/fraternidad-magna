"use client"

import { AnimatedElement } from "@/components/comadreja/animated-element"
import Image from "next/image";

export function CharacterSection() {
  return (
    <section id="personaje" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-border rotate-12 opacity-30" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-border -rotate-6 opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">El Personaje</span>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={100}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl mt-4 mb-8">
              Jimi Mustela
            </h2>
          </AnimatedElement>

          <AnimatedElement animation="scale" delay={200}>
            <div className="relative inline-block mb-12">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-muted border-4 border-foreground flex items-center justify-center">

                <Image
                  src="/images/comadreja/profile.jpg"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />

              </div>

              <svg className="absolute -top-4 -right-4 w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path
                  d="M8 8 L24 24 M24 8 L8 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                />
              </svg>
            </div>
          </AnimatedElement>

          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            <AnimatedElement animation="fade-up" delay={300}>
              <p className="text-foreground font-medium text-xl sm:text-2xl">
                Jimi Mustela es una comadreja. Pero también es un narrador, un sobreviviente y un observador del mundo.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={400}>
              <p>
                A través de su voz —irónica, sensible y a veces brutal— recorre episodios de su vida: la infancia, el amor, el arte, la ciudad, la soledad y el consumo.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={500}>
              <p>
                Jimi habla desde un lugar ambiguo: entre la fábula, la autobiografía imaginaria y la crítica cultural.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={600}>
              <div className="pt-8 border-t border-border mt-8">
                <p className="text-sm italic">
                  Jimi Mustela se inspira en los <span className="text-foreground font-medium">payasos sagrados</span> de los pueblos nativos norteamericanos. Para estas comunidades el Heyoka no solo tiene un rol de divertimento, sino también una vocación espiritual, de curar el alma. Funciona como un espejo y un maestro.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={700}>
              <p className="text-foreground font-medium pt-4">
                Su historia no pretende dar respuestas, sino abrir preguntas sobre cómo vivimos hoy.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}
