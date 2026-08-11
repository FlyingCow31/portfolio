import BackButton, { ButtonCTA } from "@/app/components/buttons"
import Footer from "@/app/components/Footer"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import { FeatureDiv, HeroProject, TechnoDiv } from "@/app/components/ProjectPage"
import { TitleDivProject } from "@/app/components/textcomponents"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "PANNEL GAELTOURNIER.DEV — Gaël Tournier",
     description:
          "Pannel de gestion de commande pour que mes clients puissent suivre l'avancée de leur commande plus facilement.",
     openGraph: {
          title: "PANNEL GAELTOURNIER.DEV — Gaël Tournier",
          description:
               "Pannel de gestion de commande pour que mes clients puissent suivre l'avancée de leur commande plus facilement.",
          url: "https://gaeltournier.dev",
          siteName: "Gaël Tournier",
          images: [
               {
                    url: "https://gaeltournier.dev/LogoGaelPortfolio.png",
                    width: 1200,
                    height: 630,
               },
          ],
     },
}
export default function EpiPage() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col">
                    <BackButton />
                    <div className="flex flex-col items-center">
                         <HeroProject
                              type="Site Web"
                              scale="Projet Professionnel"
                              title="PANNEL GAELTOURNIER.DEV"
                              desc="Pannel de gestion de commande pour que mes clients puissent suivre l'avancée de leur commande plus facilement. Projet réalisé par Gaël Tournier."
                         />
                    </div>

                    <div className="bg-white border-y-3 p-6 mt-12">
                         <TitleDivProject text="APERÇU" />
                         <div className="flex justify-center">
                              <Image
                                   src={"/pannelscreen.png"}
                                   width={840}
                                   height={840}
                                   alt={"Page d'accueil du site web de gestion de commandes"}
                                   priority
                                   className="border-3 border-black shadow-small"
                              />
                         </div>
                    </div>

                    <div className="flex flex-col bg-sec border-b-3 p-6">
                         <TitleDivProject text="FEATURES" />
                         <FeatureDiv
                              title="Authentification & Permissions"
                              desc="Ce panel est entièrement géré par un backend en Node.JS qui authentifie les users, leur procure des permissions et charge leurs infos. Un compte administrateur a accès à toutes les commandes, peut rajouter et supprimer des documents et ajouter/supprimer des comptes. Usage de Vercel Blob et de Neon DB pour le stockage, cryptage des données et mots de passes (jamais stockés en clair)."
                         />
                    </div>

                    <div className="flex flex-col bg-white border-b-3 p-6">
                         <TitleDivProject text="LA STACK" />
                         <TechnoDiv
                              title="Technologies"
                              desc="Frontend en Next.JS, React et Typescript. Bases de données utilisant Neon (base de donnée PostgreSQL) et Vercel Blob pour le stockage de documents. Sécurité gérée par jsonwebtoken (& Jose), hash et validation avec bcryptjs et zod, et rate limiting avec redis. Utilisation des cookies pour le token."
                              tags={["REACT.JS", "POSTGRESQL", "REDIS"]}
                         />
                    </div>

                    <div className="flex flex-col gap-3 bg-main pb-40 md:p-6 md:gap-6 p-4">
                         <h2 className="text-white text-5xl font-black lg:text-6xl">Envie de tester le projet?</h2>

                         <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-12">
                              <ButtonCTA text="Parlons-en" color="white" href="contact" textcol="black" />
                              <Link
                                   href={"https://github.com/FlyingCow31/portfolioclient"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <p className="text-white text-2xl font-bold ctahover">Découvrez le Projet →</p>
                              </Link>
                         </div>
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
