import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react"
import { AnimatedElement } from "@/components/comadreja/animated-element"

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
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl mb-4">
            Contacto
          </h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto">
            Para funciones, alianzas o informacion pedagogica
          </p>
        </AnimatedElement>

        <div className="space-y-12">
          {/* Informacion de contacto directo */}
          <AnimatedElement animation="fade-up" delay={100}>
            <div className="grid sm:grid-cols-2 gap-6">
              <a 
                href="mailto:magnafraternidadteatral@gmail.com" 
                className="flex items-center gap-4 p-6 bg-background/10 border border-background/20 hover:bg-background/20 transition-colors group"
              >
                <div className="p-3 bg-background/10 group-hover:bg-background/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-background/60 mb-1">Correo electronico</p>
                  <p className="font-medium">magnafraternidadteatral@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://wa.me/573133546955" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-background/10 border border-background/20 hover:bg-background/20 transition-colors group"
              >
                <div className="p-3 bg-background/10 group-hover:bg-background/20 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-background/60 mb-1">WhatsApp</p>
                  <p className="font-medium">+57 313 354 6955</p>
                </div>
              </a>
            </div>
          </AnimatedElement>

          {/* Redes sociales */}
          <AnimatedElement animation="fade-up" delay={200}>
            <div className="text-center mb-8">
              <h3 className="font-semibold text-xl">Siguenos en redes sociales</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-background/10 border border-background/20 hover:bg-background/20 transition-colors group"
                >
                  <div className="p-4 bg-background/10 group-hover:bg-background/20 transition-colors">
                    <social.icon className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{social.name}</p>
                    <p className="text-sm text-background/60">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedElement>

          {/* Ubicacion */}
          <AnimatedElement animation="fade-up" delay={300}>
            <div className="text-center pt-8 border-t border-background/20">
              <p className="text-background/60">
                Bogota, Colombia
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
