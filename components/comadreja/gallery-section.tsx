import { AnimatedElement } from "@/components/comadreja/animated-element";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    category: "obra",
    label: "Escena teatral",
    src: "/images/comadreja/gallery/1.png",
  },
  {
    id: 2,
    category: "libro",
    label: "Ilustración",
    src: "/images/comadreja/gallery/2.png",
  },
  {
    id: 3,
    category: "bocetos",
    label: "Boceto escenográfico",
    src: "/images/comadreja/gallery/3.jpeg",
  },
  {
    id: 4,
    category: "corto",
    label: "Still del cortometraje",
    src: "/images/comadreja/gallery/4.jpg",
  },
  {
    id: 5,
    category: "obra",
    label: "Portada del libro",
    src: "/images/comadreja/gallery/5.jpeg",
  },
  {
    id: 6,
    category: "libro",
    label: "Detras de escena",
    src: "/images/comadreja/gallery/6.jpg",
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Galería
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4">
            Imágenes del proyecto
          </h2>
        </AnimatedElement>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <AnimatedElement key={item.id} animation="scale" delay={index * 50}>
              <div className="aspect-square bg-background border-2 border-border hover:border-foreground transition-colors cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-black">
                    <Image src={item.src} alt={item.label} fill className="object-cover"/>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background to-transparent h-full flex flex-col justify-end">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors ">
                    {item.label}
                  </span>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
