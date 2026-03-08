"use client"

import { AnimatedElement } from "@/components/animated-element"

export function AestheticSection() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative sketch elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-20 h-20 text-border opacity-50" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        </svg>
        <svg className="absolute bottom-40 right-20 w-16 h-16 text-border opacity-50" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" stroke="currentColor" strokeWidth="2" transform="rotate(12 32 32)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Estética</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4 text-balance">
            El lenguaje visual
          </h2>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedElement animation="fade-up" delay={100}>
            <div className="text-center p-8 border-2 border-border bg-card">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-foreground flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 35 L20 5 L35 35 Z" />
                  <path d="M12 25 L28 25" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cuaderno de notas</h3>
              <p className="text-sm text-muted-foreground">Bocetos, apuntes y fragmentos visuales</p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <div className="text-center p-8 border-2 border-border bg-card">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-foreground flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="5" width="30" height="30" />
                  <path d="M5 20 Q 20 10, 35 20" />
                  <circle cx="12" cy="15" r="3" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Mural urbano</h3>
              <p className="text-sm text-muted-foreground">Arte callejero y pintura gestual</p>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={300}>
            <div className="text-center p-8 border-2 border-border bg-card">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-foreground flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 32 Q 20 8, 32 32" />
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                  <path d="M10 12 L14 16 M26 12 L30 16" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Autobiografía dibujada</h3>
              <p className="text-sm text-muted-foreground">Memoria visual fragmentada</p>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fade-up" delay={400} className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            La propuesta visual se inspira en lenguajes cercanos al <span className="text-foreground font-medium">arte urbano y la pintura gestual</span>, con referencias al imaginario gráfico contemporáneo. Los elementos escénicos funcionan como un paisaje visual fragmentado, donde texto, símbolos y dibujos conviven sobre fondo blanco.
          </p>
        </AnimatedElement>
      </div>
    </section>
  )
}
