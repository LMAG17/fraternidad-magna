"use client";

import Image from "next/image";
import { AnimatedElement } from "@/components/comadreja/animated-element";

const laurels = [
  {
    id: 1,
    src: "/images/comadreja/Laurel 1.png",
    alt: "Laurel 1",
  },
  {
    id: 2,
    src: "/images/comadreja/Laurel 2.png",
    alt: "Laurel 2",
  },
  {
    id: 3,
    src: "/images/comadreja/Laurel 3.png",
    alt: "Laurel 3",
  },
  {
    id: 4,
    src: "/images/comadreja/Laurel 4.png",
    alt: "Laurel 4",
  },
];

export function RecognitionsSection() {
  return (
    <section id="reconocimientos" className="py-24 sm:py-32 border-t-8 border-dashed border-[#FFF6D0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-14">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Reconocimientos
          </span>
          <h2 className="font-[family-name:var(--font-comadreja)] text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            Laureles <span className="text-[#EF2E2E]">Comadreja</span>
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
          {laurels.map((item, index) => (
            <AnimatedElement key={item.id} animation="scale" delay={index * 60}>
              <article className="group relative overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                <div className="relative aspect-[5/5] bg-muted/40">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
