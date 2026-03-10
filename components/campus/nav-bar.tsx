"use client";
import { getCampusConstants } from "@/constants/campus";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  lang: "es" | "en";
};

export default function NavBar({ lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLang = (newLang: "es" | "en") => {
    const newPath = pathname.replace(lang, newLang);
    router.push(newPath);
  };

  const { navbar, navItems, langItems, whoWeAre } = getCampusConstants(lang);

  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const tgl = window.scrollY < 25;
      setIsTop(tgl);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full px-12 lg:px-28 z-20 transition-colors duration-300 ${
        isOpen ? "bg-black" : !isTop ? "bg-black" : "bg-[rgba(2,2,2,0.5)]"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <a href="/" className="text-[#FFEB00] font-bold">
          {isTop ? navbar.topTitle : navbar.bottomTitle}
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded bg-[rgba(254,233,1,0.5)]"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
        >
          {/* Nav items */}
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              href={navItem.href}
              className="navButton text-[#FFEB00]"
            >
              {navItem.name}
            </a>
          ))}

          {/* Who we are dropdown */}
          <div className="relative">
            <button
              onClick={() => setWhoOpen(!whoOpen)}
              className="text-[#FEEA01]"
            >
              {navbar.whoWheareTitle}
            </button>

            {whoOpen && (
              <div className="absolute right-0 mt-2 bg-black shadow-lg rounded">
                {whoWeAre.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-[#FEEA01] hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-[#FEEA01]"
            >
              {langItems.buttonText}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 bg-black shadow-lg rounded">
                {langItems.languajes.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => changeLang(item.value as "es" | "en")}
                    className="block w-full text-left px-4 py-2 text-[#FEEA01] hover:bg-gray-800"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Patreon */}
          <a
            className="navButton"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/user?u=72697259"
          >
            <Image
              src="/images/campus/patreon.png"
              alt="Patreon"
              width={32}
              height={32}
              className="w-8 h-8 ml-6"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
