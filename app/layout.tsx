import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Public_Sans, Open_Sans } from "next/font/google"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Gaël Tournier — Développeur Web Freelance",
  description: "Développeur web fullstack spécialisé en Next.JS, react et Tailwind CSS. Création de software et sites-web " +
      "sur mesure.",
  openGraph: {
    title: "Gaël Tournier — Développeur Web Freelance",
    description: "Développeur Full Stack spécialisé en Next.js, React et Tailwind.",
    url: "https://gaeltournier.dev",
    siteName: "Gaël Tournier",
    images: [
      {
        url: "https://gaeltournier.dev/LogoGaelPortfolio.png", // image affichée dans l'embed
        width: 1200,
        height: 630,
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body ">{children}</body>
    </html>
  );
}
