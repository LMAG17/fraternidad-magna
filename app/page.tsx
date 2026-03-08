import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectSection } from "@/components/project-section"
import { CharacterSection } from "@/components/character-section"
import { TransmediaSection } from "@/components/transmedia-section"
import { EducationSection } from "@/components/education-section"
import { AestheticSection } from "@/components/aesthetic-section"
import { GallerySection } from "@/components/gallery-section"
import { PressSection } from "@/components/press-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <CharacterSection />
      <TransmediaSection />
      <EducationSection />
      <AestheticSection />
      <GallerySection />
      <PressSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
