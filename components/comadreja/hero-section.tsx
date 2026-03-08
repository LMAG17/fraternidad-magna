"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Theater, Film, BookOpen } from "lucide-react"
import Link from "next/link"
import { AnimatedElement } from "@/components/comadreja/animated-element"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern - Sketch-like lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sketch-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="1"/>
              <path d="M50 0 Q 30 25, 50 50 T 50 100" stroke="currentColor" fill="none" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <AnimatedElement animation="fade-down" duration={800}>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none tracking-tight mb-6">
              <span className="block">Autobiografía</span>
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">de una</span>
              <span className="block relative inline-block mt-2">
                Comadreja
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 Q 75 2, 150 8 T 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent"/>
                </svg>
              </span>
            </h1>
          </AnimatedElement>

          {/* Subtitle */}
          <AnimatedElement animation="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mt-8 mb-4">
              Una sátira transmedia sobre identidad, consumo y memoria.
            </p>
          </AnimatedElement>

          {/* Media Types */}
          <AnimatedElement animation="fade" delay={400} duration={700}>
            <div className="flex items-center justify-center gap-6 sm:gap-8 my-8">
              <div className="flex items-center gap-2 text-foreground">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Libro</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2 text-foreground">
                <Theater className="h-5 w-5" />
                <span className="text-sm font-medium">Teatro</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2 text-foreground">
                <Film className="h-5 w-5" />
                <span className="text-sm font-medium">Cine</span>
              </div>
            </div>
          </AnimatedElement>

          {/* Description */}
          <AnimatedElement animation="fade-up" delay={500} duration={700}>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
              La historia de Jimi Mustela, una marioneta que fue famosa decide contarse a sí misma antes de desaparecer.
            </p>
          </AnimatedElement>

          {/* CTA Buttons */}
          <AnimatedElement animation="fade-up" delay={600} duration={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-medium px-8">
                <Link href="#transmedia">Ver la obra</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-foreground hover:bg-foreground hover:text-background font-medium px-8">
                <Link href="#proyecto">Conocer el proyecto</Link>
              </Button>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={700} duration={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-muted-foreground hover:text-foreground font-medium">
                <Link href="#colegios">Para colegios</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-muted-foreground hover:text-foreground font-medium">
                <Link href="#prensa">Prensa / Aliados</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
