"use client"

import { useState } from "react"
import { AnimatedElement } from "@/components/comadreja/animated-element"

const galleryItems = [
  { id: 1, category: "obra", label: "Escena teatral" },
  { id: 2, category: "libro", label: "Ilustración" },
  { id: 3, category: "bocetos", label: "Boceto escenográfico" },
  { id: 4, category: "corto", label: "Still del cortometraje" },
  { id: 5, category: "obra", label: "Los seis actores" },
  { id: 6, category: "libro", label: "Portada del libro" },
  { id: 7, category: "bocetos", label: "Diseño de máscara" },
  { id: 8, category: "corto", label: "Material de archivo" },
]

const categories = [
  { id: "all", label: "Todo" },
  { id: "obra", label: "Obra" },
  { id: "libro", label: "Libro" },
  { id: "bocetos", label: "Bocetos" },
  { id: "corto", label: "Cortometraje" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Galería</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl mt-4">
            Imágenes del proyecto
          </h2>
        </AnimatedElement>

        {/* Filter Tabs */}
        <AnimatedElement animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </AnimatedElement>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <AnimatedElement key={item.id} animation="scale" delay={index * 50}>
              <div 
                className="aspect-square bg-background border-2 border-border hover:border-foreground transition-colors cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-display)] text-4xl text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
