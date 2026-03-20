import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter, Playfair_Display, Stardos_Stencil } from "next/font/google";
import localFont from "next/font/local";
import "./page.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const stardosStencil = Stardos_Stencil({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-stencil",
});


const comadreja = localFont({
  src: "../public/fonts/comadreja-regular.ttf",
  variable: "--font-comadreja",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Magna Fraternidad Teatral | Inmaculada Films Art Transmedia",
  description:
    "Magna Fraternidad Teatral e Inmaculada Films Art Transmedia desarrollan proyectos de artes escenicas, cine independiente y narrativas transmedia, explorando la creacion colectiva y la produccion audiovisual contemporanea.",
  keywords: [
    "compania teatral",
    "artes escenicas",
    "teatro contemporaneo",
    "creacion escenica",
    "productora audiovisual",
    "cine independiente",
    "narrativas transmedia",
    "produccion audiovisual artistica",
    "proyectos culturales",
    "colectivo artistico",
  ],
};

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${stardosStencil.variable} ${comadreja.variable} ${ebGaramond.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
