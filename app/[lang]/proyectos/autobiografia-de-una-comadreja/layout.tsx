import type { Metadata } from "next";
import { Space_Grotesk, Permanent_Marker } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Autobiografía de una Comadreja | Proyecto Transmedia",
  description:
    "Una sátira transmedia sobre identidad, consumo y memoria. Un libro, una obra teatral y un cortometraje. La historia de Jimi Mustela.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function ComadrejaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${permanentMarker.variable} font-sans antialiased`}
    >
      {children}
      <Analytics />
    </div>
  );
}
