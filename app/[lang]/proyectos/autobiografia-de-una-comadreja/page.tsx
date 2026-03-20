import Image from "next/image";
import { Navigation } from "@/components/comadreja/navigation";
import { HeroSection } from "@/components/comadreja/hero-section";
import { ProjectSection } from "@/components/comadreja/project-section";
import { TransmediaSection } from "@/components/comadreja/transmedia-section";
import { EducationSection } from "@/components/comadreja/education-section";
import { RecognitionsSection } from "@/components/comadreja/recognitions-section";
import { GallerySection } from "@/components/comadreja/gallery-section";
import { Footer } from "@/components/comadreja/footer";
import { AnimatedElement } from "@/components/comadreja/animated-element";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <div className="relative z-10 h-0" aria-hidden>
        <div className="absolute left-1/2 top-0 z-20 w-[min(92vw,380px)] sm:w-[min(92vw,440px)] md:w-[480px] -translate-x-1/2 -translate-y-1/2">
          <AnimatedElement
            animation="fade-up"
            duration={800}
            threshold={0.15}
            className="pointer-events-auto group w-full origin-bottom cursor-default transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]  rotate-[5deg] hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-2px_rgba(0,0,0,0.08)]"
          >
            <div className="border-10 border-white border-b-28 sm:border-b-36 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-2px_rgba(0,0,0,0.08)] ring-1 ring-black/10">
              <div className="relative aspect-[2.35/1] w-full overflow-hidden ring-1 ring-inset ring-black/15">
                <Image
                  src="/images/comadreja/surreal.gif"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 440px, 480px"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <div className="relative z-0">
        <RecognitionsSection />
      </div>
      <TransmediaSection />
      <div className="relative z-0">
        <EducationSection />
      </div>
      <div className="relative z-10 h-0" aria-hidden>
        <div className="absolute left-1/2 top-0 z-20 w-[min(92vw,380px)] sm:w-[min(92vw,440px)] md:w-[480px] -translate-x-1/2 -translate-y-1/2">
          <AnimatedElement
            animation="fade-up"
            duration={800}
            delay={100}
            threshold={0.15}
            className="pointer-events-auto group w-full origin-bottom cursor-default transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]  rotate-[-5deg] hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-2px_rgba(0,0,0,0.08)]"
          >
            <div className="border-10 border-white border-b-28 sm:border-b-36 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_2px_4px_-2px_rgba(0,0,0,0.08)] ring-1 ring-black/10">
              <div className="relative aspect-[2.35/1] w-full overflow-hidden ring-1 ring-inset ring-black/15">
                <Image
                  src="/images/comadreja/lluvia.gif"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 440px, 480px"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <div className="relative z-0">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}
