import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos de la Alcaldia */}
        <div className="flex items-center justify-between gap-8 mb-8 pb-8 border-b border-border">
          <Image
            src="/images/home/Engativá- V1.png"
            alt="Alcaldia Local de Engativa"
            width={180}
            height={60}
            className="h-10 md:h-14 w-auto object-contain"
          />
          <Image
            src="/images/home/Bogotá Blanco.png"
            alt="Alcaldia de Bogota"
            width={180}
            height={60}
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-lg">La Comadreja</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#proyecto" className="hover:text-foreground transition-colors">Proyecto</Link>
            <Link href="#transmedia" className="hover:text-foreground transition-colors">Experiencia</Link>
            <Link href="#colegios" className="hover:text-foreground transition-colors">Colegios</Link>
            <Link href="#contacto" className="hover:text-foreground transition-colors">Contacto</Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Autobiografía de una Comadreja
          </p>
        </div>
      </div>
    </footer>
  )
}
