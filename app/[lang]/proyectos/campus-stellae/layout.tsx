import type { Metadata } from "next";
import { Space_Grotesk, Permanent_Marker, Bodoni_Moda } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./page.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export default function CampusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${permanentMarker.variable} ${bodoniModa.variable} font-sans antialiased`}
    >
      {children}
      <Analytics />
    </div>
  );
}
