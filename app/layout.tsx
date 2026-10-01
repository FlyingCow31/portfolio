import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import { Public_Sans, Open_Sans } from "next/font/google"
import JsonLd from "./components/JsonLd"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const publicSans = Public_Sans({
     subsets: ["latin"],
     variable: "--font-public-sans",
})

const openSans = Open_Sans({
     subsets: ["latin"],
     variable: "--font-open-sans",
})

export const metadata: Metadata = {
     metadataBase: new URL("https://gaeltournier.dev"),
     title: "Gaël Tournier — Développeur Web Freelance",
     description:
          "Développeur web fullstack spécialisé en Next.JS, react et node.JS . Création de software et sites-web " +
          "sur mesure.",
     openGraph: {
          type: "website",
          locale: "fr_FR",
          siteName: "Gaël Tournier",
          images: [{ url: "/og-image.png", width: 1200, height: 630 }],
     },
     twitter: { card: "summary_large_image" },
}

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode
}>) {
     return (
          <html lang="fr" className={`${publicSans.variable} ${openSans.variable} h-full antialiased`}>
               <body className="min-h-full flex flex-col font-body ">
                    <JsonLd />
                    <Analytics />
                    <SpeedInsights />
                    {children}
               </body>
          </html>
     )
}
