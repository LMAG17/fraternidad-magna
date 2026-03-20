import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logos de la Alcaldia */}
        <div className="flex items-center justify-between gap-8 mb-10 pb-10 border-b border-border">
          <Image
            src="/images/home/Engativá- V1.png"
            alt="Alcaldia Local de Engativa"
            width={180}
            height={60}
            className="h-12 md:h-16 w-auto object-contain"
          />
          <Image
            src="/images/home/Bogotá Blanco.png"
            alt="Alcaldia de Bogota"
            width={180}
            height={60}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl text-foreground">
            Inmaculada Films Art Transmedia
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &amp; Magna Fraternidad Teatral
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="#proyectos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#quienes-somos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Quienes Somos
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
