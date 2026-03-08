import { Navigation } from "@/components/comadreja/navigation";
import { HeroSection } from "@/components/comadreja/hero-section";
import { ProjectSection } from "@/components/comadreja/project-section";
import { CharacterSection } from "@/components/comadreja/character-section";
import { TransmediaSection } from "@/components/comadreja/transmedia-section";
import { EducationSection } from "@/components/comadreja/education-section";
import { AestheticSection } from "@/components/comadreja/aesthetic-section";
import { GallerySection } from "@/components/comadreja/gallery-section";
import { PressSection } from "@/components/comadreja/press-section";
import { ContactSection } from "@/components/comadreja/contact-section";
import { Footer } from "@/components/comadreja/footer";

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
  );
}
