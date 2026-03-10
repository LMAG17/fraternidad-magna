"use client";
import { getCampusConstants } from "@/constants/campus";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

type Props = {
  lang: "es" | "en";
};

export default function TeamCarousel({ lang }: Props) {
  const { teamList: team } = getCampusConstants(lang);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full"
      >
        ←
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {team.map((team, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_33%] p-4 text-center"
            >
              <div className={team.name}>
                <h4>{team.name}</h4>
                <p>{team.paticipation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full"
      >
        →
      </button>
    </div>
  );
}
