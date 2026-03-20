"use client";

import { FileText, Image as ImageIcon, FileDown, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const materials = [
  {
    icon: FileText,
    label: "Dossier del proyecto",
    description: "Documento completo con información detallada.",
  },
  {
    icon: ImageIcon,
    label: "Fotografías oficiales",
    description: "Imágenes de alta resolución para prensa.",
  },
  {
    icon: FileText,
    label: "Sinopsis corta y larga",
    description: "Textos para difusión y programación.",
  },
  {
    icon: FileDown,
    label: "Ficha técnica",
    description: "Información técnica y requerimientos.",
  },
];

export function PressSectionHome() {
  return (
    <section
      id="material-para-medios"
      className="py-24 md:py-32 bg-background border-t border-border/60"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Prensa y aliados
          </p>
          <h2 className="font-(family-name:--font-stencil) font-bold text-3xl md:text-4xl lg:text-5xl text-[#FFC842] mb-5">
            Material para medios
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            Contamos con material completo para medios de comunicación y
            programadores interesados en difundir o presentar nuestros
            proyectos escénicos y audiovisuales.
          </p>

          <div className="grid gap-4">
            {materials.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-xl border border-border bg-secondary/10 px-4 py-4 transition-colors hover:border-foreground hover:bg-secondary/30"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground/90">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              asChild
              className="bg-[#FFC842] text-background hover:bg-[#FFC842]/90"
            >
              <Link href="#contacto">
                <Mail className="mr-2 h-4 w-4" />
                Contacto de prensa
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-md md:pt-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Patrocinadores
          </p>
          <h3 className="font-[family-name:var(--font-stencil)] font-bold text-2xl text-foreground mb-4">
            Únete al proyecto
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Buscamos alianzas con instituciones culturales, educativas y
            empresas interesadas en apoyar propuestas artísticas contemporáneas
            que cruzan teatro, cine y narrativas transmedia.
          </p>
          <div className="rounded-2xl border border-dashed border-border bg-secondary/15 p-6 space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Beneficios
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-4 rounded-full bg-foreground/80" />
                <span>Visibilidad de marca en comunicaciones y materiales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-4 rounded-full bg-foreground/80" />
                <span>Presencia en funciones, proyecciones y piezas gráficas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-4 rounded-full bg-foreground/80" />
                <span>
                  Asociación con un proyecto artístico y pedagógico de largo
                  aliento.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

