import Image from "next/image";

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left column */}
          <div className="col-span-2">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Quienes Somos
            </p>
            <h2 className="font-(family-name:--font-stencil) font-bold text-4xl md:text-5xl lg:text-6xl text-[#FFC842] mb-8">
              Ecosistema creativo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <b>Inmaculada Films Art Transmedia</b> &{" "}
              <b>Magna Fraternidad Teatral </b>
              forman un ecosistema creativo dedicado a la{" "}
              <b>
                creacion escenica, la produccion audiovisual y el desarrollo de
                narrativas transmedia.
              </b>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro trabajo se situa en el cruce entre teatro contemporaneo,
              cine independiente y proyectos artisticos multidisciplinarios,
              explorando nuevas formas de contar historias y generar
              experiencias culturales significativas.
            </p>
          </div>

          {/* Right column - entities */}
          <div className="space-y-12 col-span-3">
            {/* Inmaculada Films */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative w-24 sm:w-28 md:w-42 aspect-square rounded-4xl shrink-0 overflow-hidden mx-auto sm:mx-0">
                <Image
                  src="/images/home/inmaculada.png"
                  alt="Inmaculada Films Art Transmedia"
                  fill
                  className="object-contain"
                  sizes="(max-width: 720px) 25vw, (max-width: 1024px) 20vw, 12vw"
                />
              </div>
              <div className="border-l border-accent pl-8 w-full">
                <h3 className="font-(family-name:--font-stencil) font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
                  Inmaculada Films Art Transmedia
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Una productora audiovisual y laboratorio creativo dedicado al
                  desarrollo de cine independiente, arte audiovisual y proyectos
                  narrativos transmedia.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Impulsamos proyectos cinematograficos, piezas audiovisuales y
                  universos narrativos que integran imagen, narrativa,
                  tecnologia y experimentacion artistica.
                </p>
              </div>
            </div>
            {/* Magna Fraternidad Teatral */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="relative w-24 sm:w-28 md:w-42 aspect-square rounded-4xl shrink-0 overflow-hidden mx-auto sm:mx-0">
                <Image
                  src="/images/home/magna.png"
                  alt="Magna Fraternidad Teatral"
                  fill
                  className="object-contain"
                  sizes="(max-width: 720px) 25vw, (max-width: 1024px) 20vw, 12vw"
                />
              </div>
              <div className="border-l border-border pl-8 w-full">
                <h3 className="font-(family-name:--font-stencil) font-bold text-2xl md:text-3xl text-foreground mb-4 text-center">
                  Magna Fraternidad Teatral
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Una compania teatral y colectivo de artes escenicas que
                  trabaja desde la experimentacion, la investigacion escenica y
                  el encuentro humano.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Desarrollamos montajes teatrales, procesos de investigacion
                  artistica y proyectos escenicos contemporaneos, donde el
                  teatro se concibe como un espacio de comunidad, exploracion
                  estetica y dialogo con el publico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="bg-secondary/50 p-8 md:p-12">
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nuestra Vision
            </h4>
            <p className="text-foreground leading-relaxed">
              Trabajamos en la interseccion entre las artes escenicas y el
              audiovisual, combinando tradicion teatral con exploracion
              narrativa contemporanea. Buscamos crear proyectos culturales que
              conecten artistas, publicos y comunidades.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 md:p-12">
            <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nuestra Mision
            </h4>
            <p className="text-foreground leading-relaxed">
              Crear experiencias escenicas y audiovisuales que integren teatro,
              cine y narrativas transmedia, impulsando proyectos culturales que
              fomenten la creacion colectiva, la experimentacion artistica y el
              encuentro entre disciplinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
