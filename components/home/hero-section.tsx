"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 600,
        }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Teatro &bull; Cine &bull; Transmedia
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight text-balance"> 
          Magna Fraternidad Teatral
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Magna Fraternidad Teatral e Inmaculada Films Art Transmedia desarrollan
          proyectos de artes escénicas, cine independiente y narrativas transmedia,
          explorando la creación colectiva y la producción audiovisual contemporánea.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#quienes-somos"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm tracking-widest uppercase hover:bg-secondary transition-colors"
          >
            Conocenos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#proyectos"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">
            Descubre mas
          </span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
