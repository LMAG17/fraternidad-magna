"use client";

import { BookOpen, Theater, Film } from "lucide-react";
import { AnimatedElement } from "@/components/comadreja/animated-element";
import Link from "next/link";

export function ProjectSection() {
  return (
    <section id="proyecto" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedElement animation="fade-right">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                El Proyecto
              </span>
              <h2 className="font-(family-name:--font-comadreja) text-3xl sm:text-4xl md:text-5xl mt-4 mb-6 text-balance">
                ¿Qué <span className="text-[#EF2E2E]">es</span> Autobiografía de
                una <span className="text-[#EF2E2E]">Comadreja</span>?
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={150}>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Un proyecto artístico transmedia que narra la vida de Jimi
                  Mustela, un personaje que atraviesa su ascenso a la fama y su
                  vertiginosa caída como si fuera un territorio lleno de
                  recuerdos, contradicciones y preguntas sobre el mundo
                  contemporáneo.
                </p>
                <p>
                  El resultado es una experiencia que mezcla narración, música,
                  artes visuales y reflexión crítica sobre la sociedad de
                  consumo, la fama, la identidad y la memoria personal.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <div className="space-y-6">
            <AnimatedElement animation="fade-left">
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                La historia se despliega en tres lenguajes
              </p>
            </AnimatedElement>

            <div className="grid gap-4">
              <AnimatedElement animation="fade-left" delay={100}>
                <Link href="#teatro">
                  <div className="bg-muted p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-background">
                        <Theater className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-comadreja) font-semibold text-lg text-foreground">
                          Teatro
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Farsa grotesca de una marioneta rebelde
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>

              <AnimatedElement animation="fade-left" delay={200}>
                <Link href="#cine">
                  <div className="bg-muted p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-background">
                        <Film className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-comadreja) font-semibold text-lg text-foreground">
                          Cortometraje
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Un falso documental sobre Jimi mustela.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>

              <AnimatedElement animation="fade-left" delay={300}>
                <Link href="#libro">
                  <div className="bg-muted p-6 border border-border shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-background">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-comadreja) font-semibold text-lg text-foreground">
                          Libro Ilustrado
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          El camino a la fama a través del ridículo y la
                          mentira.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
