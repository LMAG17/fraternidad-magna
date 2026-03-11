"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
   {
    id: 0,
    title: "Inmaculada",
    category: "Transmedia",
    description:
      "Proximamente: exploraciones en narrativas que cruzan multiples plataformas.",
    image: "/images/home/inmaculada.jpg",
    href: "",
  },
  {
    id: 1,
    title: "Inmaculada Magna Fraternidad Teatral",
    category: "Audiovisual",
    description:
      "Proximamente: nuevos proyectos en desarrollo que expandiran nuestro universo creativo.",
    image: "/images/home/magna.jpg",
    href: "",
  },
  {
    id: 2,
    title: "Campus Stellae",
    category: "Teatro",
    description:
      "Una obra que explora el camino interior a traves de la tradicion del Camino de Santiago.",
    image: "/images/campus/coronalengua2.gif",
    href: "/es/proyectos/campus-stellae",
  },
  {
    id: 3,
    title: "Autobiografia de una Comadreja",
    category: "Teatro / Transmedia",
    description:
      "Un viaje autobiografico que entrelaza teatro, cine y narrativa digital.",
    image: "/images/comadreja/teatro.gif",
    href: "/es/proyectos/autobiografia-de-una-comadreja",
  },
 
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nuestro Trabajo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Proyectos
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Cada proyecto es una exploracion unica en el territorio donde se
            encuentran las artes escenicas, el cine y las nuevas narrativas.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <Link href={project.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    {!!project.href && (
                      <div className="flex items-center gap-2 text-sm text-foreground pt-2">
                        <span className="tracking-widest uppercase">
                          Ver mas
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-secondary border-border hover:bg-muted" />
            <CarouselNext className="static translate-y-0 bg-secondary border-border hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
