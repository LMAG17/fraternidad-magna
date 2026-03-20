"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-12 xl:mt-0">
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
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Teatro &bull; Cine &bull; Transmedia
        </p>

        <div className="mx-auto mb-4 w-[min(82vw,200px)] sm:mb-5 sm:w-[min(72vw,240px)] md:w-[min(58vw,280px)] lg:w-[min(48vw,300px)]">
          <Image
            src="/images/home/inmaculada.gif"
            alt="Inmaculada Films Art Transmedia"
            width={400}
            height={400}
            unoptimized
            priority
            className="mx-auto h-auto w-full drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          />
        </div>

        <h1 className="font-[family-name:var(--font-stencil)] font-bold tracking-wide sm:tracking-wider text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground leading-snug sm:leading-tight text-balance uppercase">
          <span className="text-[#FFC842]">
            Inmaculada Films Art Transmedia
          </span>{" "}
          <br />
          &
          <br />
          <span className="text-[#FFF]"> Magna Fraternidad Teatral</span>
        </h1>

        <p
          className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-(family-name:--font-eb-garamond) text-base sm:text-lg md:text-md lg:text-lg xl:text-xl font-medium"
        >
          Magna Fraternidad Teatral e Inmaculada Films Art Transmedia
          desarrollan proyectos de artes escénicas, cine independiente y
          narrativas transmedia, explorando la creación colectiva y la
          producción audiovisual contemporánea.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC842] text-background text-sm tracking-widest uppercase hover:bg-[#FFC842]/90 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#quienes-somos"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-[#FFF] text-sm tracking-widest uppercase hover:bg-[#FFF]/10 transition-colors"
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
