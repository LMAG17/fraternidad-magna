import { getCampusConstants } from "@/constants/campus";
import Image from "next/image";

type Props = {
  lang: "es" | "en";
};

export default function Footer({ lang }: Props) {
  const { footer } = getCampusConstants(lang);
  const { sponsors, contact, logo } = footer;
  
  return (
    <div
      id="footer"
      className="box-style p-5 mt-10 container max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Logo */}

        <div className="w-full h-full relative">
          <Image
            src={"/images/campus/logo.png"}
            alt={logo.alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Contact */}
        <div className="text-center md:text-left ">
          <h6 className="text-xl">{contact.title}</h6>

          <ul style={contact.listStyle} className="space-y-1 p-6">
            {contact.ways.map((way, index) => (
              <li key={index} className="list-disc">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={way.url}
                  className="text-white no-underline hover:underline"
                >
                  {way.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sponsors */}
        <div className="text-center md:text-left">
          <h6 className="text-xl">{sponsors.title}</h6>

          <div className="grid grid-cols-1 mt-4 h-101">
            {sponsors.sponsorsList.map((sponsor, index) => (
              <div
                className="w-full h-full relative mx-auto md:mx-0 "
                key={index}
              >
                <Image
                  key={index}
                  src={sponsor.image}
                  alt={sponsor.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6">
        <hr className="border-[#1A181D]" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <span
          role="img"
          aria-label="ProgressLab"
          id="progresslab"
          className="block w-full"
        >
          2022 © ProgressLab
        </span>
      </div>
    </div>
  );
}
