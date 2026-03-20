"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Theater, Film, BookOpen } from "lucide-react";
import Link from "next/link";
import { AnimatedElement } from "@/components/comadreja/animated-element";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern - Sketch-like lines */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="sketch-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                stroke="currentColor"
                fill="none"
                strokeWidth="1"
              />
              <path
                d="M50 0 Q 30 25, 50 50 T 50 100"
                stroke="currentColor"
                fill="none"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <AnimatedElement animation="fade-down" duration={800}>
            <div className="relative min-h-[40vh] max-w-6xl mx-auto">
              <Image
                src="/images/comadreja/header.webp"
                alt="Autobiografía de una Comadreja"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
          </AnimatedElement>

          {/* Subtitle */}
          <AnimatedElement animation="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mt-8 mb-4">
              Una sátira transmedia sobre identidad, consumo y memoria.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-left" delay={400}>
              <div
                id="animacion"
                className="rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src="/images/comadreja/animacion.gif"
                    alt="Animación de Jimi Mustela"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>
            </AnimatedElement>

          {/* Media Types */}
          <AnimatedElement animation="fade" delay={400} duration={700}>
            <div className="flex items-center justify-center gap-6 sm:gap-8 my-8">
              <Link href="#teatro">
                <div className="flex items-center gap-2 text-foreground">
                  <Theater className="h-5 w-5" />
                  <span className="text-sm font-medium">Teatro</span>
                </div>
              </Link>
              <div className="h-6 w-px bg-border" />
              <Link href="#cine">
                <div className="flex items-center gap-2 text-foreground">
                  <Film className="h-5 w-5" />
                  <span className="text-sm font-medium">Cine</span>
                </div>
              </Link>
              <div className="h-6 w-px bg-border" />
              <Link href="#libro">
                <div className="flex items-center gap-2 text-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm font-medium">Libro</span>
                </div>
              </Link>
            </div>
          </AnimatedElement>

          {/* Description */}
          <AnimatedElement animation="fade-up" delay={500} duration={700}>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
              Un proyecto que mezcla literatura, teatro, cine y arte visual para
              explorar lo que somos en una sociedad que lo convierte todo en
              mercancia.
            </p>
          </AnimatedElement>

          {/* CTA Buttons */}
          <AnimatedElement animation="fade-up" delay={600} duration={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#EF2E2E] text-background hover:bg-[#EF2E2E]/90 font-medium px-8"
              >
                <Link href="#transmedia">Ver la obra</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-[#EF2E2E] text-[#EF2E2E] hover:bg-[#EF2E2E] hover:text-background font-medium px-8"
              >
                <Link href="#proyecto">Conocer el proyecto</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-[#EF2E2E] hover:text-[#EF2E2E] hover:bg-[#EF2E2E]/10 font-black"
              >
                <Link href="#colegios">Para colegios</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
