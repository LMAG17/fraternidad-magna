import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { PressSectionHome } from "@/components/home/press-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/home/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <PressSectionHome />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
