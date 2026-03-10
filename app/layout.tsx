import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
