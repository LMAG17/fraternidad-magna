import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./page.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

const comadreja = localFont({
  src: "../../../../public/fonts/comadreja-regular.ttf",
  variable: "--font-comadreja",
  display: "swap",
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
      className={`comadreja-theme ${libreBaskerville.variable} ${comadreja.variable} font-sans antialiased`}
    >
      {children}
      <Analytics />
    </div>
  );
}
