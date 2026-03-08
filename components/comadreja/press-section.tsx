"use client"

import { Button } from "@/components/ui/button"
import { FileText, Image, FileDown, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedElement } from "@/components/comadreja/animated-element"

export function PressSection() {
  const materials = [
    { icon: FileText, label: "Dossier del proyecto", description: "Documento completo con información detallada" },
    { icon: Image, label: "Fotografías oficiales", description: "Imágenes de alta resolución para prensa" },
    { icon: FileText, label: "Sinopsis corta y larga", description: "Textos para difusión y programación" },
    { icon: FileDown, label: "Ficha técnica", description: "Información técnica y requerimientos" },
  ]

  return (
    <section id="prensa" className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <AnimatedElement animation="fade-right">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Prensa y Aliados</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4 mb-6">
                Material para medios
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Disponemos de material completo para medios de comunicación y programadores interesados en difundir o presentar el proyecto.
              </p>
            </AnimatedElement>

            <div className="space-y-4">
              {materials.map((item, index) => (
                <AnimatedElement key={index} animation="fade-right" delay={100 + index * 75}>
                  <div className="flex items-start gap-4 p-4 border border-border hover:border-foreground transition-colors cursor-pointer">
                    <div className="p-2 bg-muted">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement animation="fade-up" delay={400}>
              <Button asChild className="mt-8 bg-foreground text-background hover:bg-foreground/90">
                <Link href="#contacto">
                  <Mail className="h-4 w-4 mr-2" />
                  Contacto de prensa
                </Link>
              </Button>
            </AnimatedElement>
          </div>

          <div id="patrocinadores">
            <AnimatedElement animation="fade-left">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Patrocinadores</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mt-4 mb-6">
                Únete al proyecto
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                El proyecto está abierto a alianzas con instituciones culturales, educativas y empresas interesadas en apoyar propuestas artísticas contemporáneas.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={200}>
              <div className="bg-muted p-8 border-2 border-border">
                <h3 className="font-semibold text-lg mb-6">Beneficios</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0" />
                    <span>Visibilidad de marca en todas las comunicaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0" />
                    <span>Presencia en funciones y material promocional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-foreground mt-2 flex-shrink-0" />
                    <span>Asociación con un proyecto cultural y educativo</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}
