import { AnimatedElement } from "@/components/comadreja/animated-element";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    label: "Escena teatral",
    src: "/images/comadreja/gallery/1.png",
  },
  {
    id: 2,
    label: "Ilustración",
    src: "/images/comadreja/gallery/2.png",
  },
  {
    id: 3,
    label: "Still del cortometraje",
    src: "/images/comadreja/gallery/4.jpg",
  },
  {
    id: 4,
    label: "Portada del libro",
    src: "/images/comadreja/libro.jpg",
  },
  {
    id: 5,
    label: "Animación",
    src: "/images/comadreja/animacion.jpg",
  },
  {
    id: 6,
    label: "Corto Pacheco",
    src: "/images/comadreja/corto-pacheco.jpg",
  },
  {
    id: 7,
    label: "Figura de Jimi",
    src: "/images/comadreja/figura.png",
  },
  {
    id: 8,
    label: "Mural",
    src: "/images/comadreja/mural.jpg",
  },
  {
    id: 9,
    label: "Revista",
    src: "/images/comadreja/Revista1.jpeg",
  },
  {
    id: 10,
    label: "Revista",
    src: "/images/comadreja/Revista2.jpeg",
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-14">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Galería
          </span>
          <h2 className="font-(family-name:--font-comadreja) text-3xl sm:text-4xl md:text-5xl mt-4 text-foreground">
            Imágenes <span className="text-[#EF2E2E]">Comadreja</span>
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryItems.map((item, index) => (
            <AnimatedElement key={item.id} animation="scale" delay={index * 50}>
              <article className="group relative overflow-hidden rounded-2xl border-2 border-border bg-background shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-4/5 relative bg-muted">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
