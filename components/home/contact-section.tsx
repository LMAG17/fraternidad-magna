import { Mail, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Conectemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Creemos que el arte es un espacio de encuentro. El teatro nos
              reune en el presente, mientras que el cine y los contenidos
              audiovisuales permiten expandir esa experiencia hacia nuevos
              publicos y territorios digitales.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:contacto@magnafraternidad.com"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg">contacto@magnafraternidad.com</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card p-8 md:p-12 border border-border">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Envianos un mensaje
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
