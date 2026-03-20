import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/magnafraternidadteatral/",
    icon: Instagram,
    username: "@magnafraternidadteatral"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/magnafraternidadteatral",
    icon: Facebook,
    username: "Magna Fraternidad Teatral"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@magnafraternidadteatral",
    icon: Youtube,
    username: "Magna Fraternidad Teatral"
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Contacto
          </p>
          <h2 className="font-[family-name:var(--font-stencil)] font-bold text-4xl md:text-5xl lg:text-6xl text-[#FFC842] mb-6">
            Conectemos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Creemos que el arte es un espacio de encuentro. El teatro nos
            reune en el presente, mientras que el cine y los contenidos
            audiovisuales permiten expandir esa experiencia hacia nuevos
            publicos y territorios digitales.
          </p>
        </div>

        {/* Contacto directo */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:magnafraternidadteatral7@gmail.com" 
            className="flex items-center gap-4 p-6 bg-card border border-border hover:border-[#FFC842] transition-colors group"
          >
            <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-[#FFC842] group-hover:bg-foreground group-hover:text-background transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Correo electronico</p>
              <p className="text-foreground font-medium group-hover:text-[#FFC842]">magnafraternidadteatral7@gmail.com</p>
            </div>
          </a>
          <a 
            href="https://wa.me/573133546955" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card border border-border hover:border-[#FFC842] transition-colors group"
          >
            <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-[#FFC842] group-hover:bg-foreground group-hover:text-background transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
              <p className="text-foreground font-medium group-hover:text-[#FFC842]">+57 313 354 6955</p>
            </div>
          </a>
          <a
            href="mailto:inmaculadafilms@gmail.com"
            className="flex items-center gap-4 p-6 bg-card border border-border hover:border-[#FFC842] transition-colors group"
          >
            <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-[#FFC842] group-hover:bg-foreground group-hover:text-background transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Correo Inmaculada</p>
              <p className="text-foreground font-medium group-hover:text-[#FFC842]">inmaculadafilms@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Redes sociales */}
        <div className="text-center mb-8">
          <h3 className="font-[family-name:var(--font-stencil)] font-bold text-2xl text-foreground">Siguenos en redes sociales</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border hover:border-[#FFC842] transition-colors group"
            >
              <div className="w-16 h-16 flex items-center justify-center border border-border group-hover:border-[#FFC842] group-hover:bg-foreground group-hover:text-background transition-colors">
                <social.icon className="h-8 w-8" />
              </div>
              <div className="text-center">
                <p className="text-foreground font-medium group-hover:text-[#FFC842]">{social.name}</p>
                <p className="text-sm text-muted-foreground">{social.username}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Ubicacion */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Bogota, Colombia
          </p>
        </div>
      </div>
    </section>
  );
}
