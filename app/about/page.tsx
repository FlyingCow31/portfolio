import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { BoxStats, MainTitle, SectionHR } from "../components/textcomponents"
import { ButtonCTA } from "../components/buttons"
import Marquee from "../components/Marquee"
import ExpertiseModale from "../components/ExpertiseModale"
import BackgroundModale from "../components/BackgroundModale"
import WorkflowsModale from "../components/WorkflowsModale"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "A propos — Gaël Tournier — Développeur Web Freelance",
     description:
          "Découvrez le parcours et l'expertise de Gaël Tournier, développeur web freelance spécialisé en Next.JS, React et Node.JS.",
     openGraph: {
          title: "Gaël Tournier — Développeur Web Freelance",
          description:
               "Parcours et expertise de Gaël Tournier, développeur web freelance spécialisé en Next.JS, React et Node.JS.",
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
export default function About() {
     const words = ["NEXT.JS", "NODE.JS", "TYPESCRIPT", "UI/UX", "SEO", "REACT"]
     return (
          <div className="flex">
               <Navbar />
               <MobileNav />
               <main className="bg-bg h-screen overflow-y-auto flex flex-col pb-40 md:pb-0">
                    <div className="ml-6">
                         <MainTitle text="QUI SUIS-JE" title="À PROPOS." />
                    </div>

                    <div className="flex flex-col gap-12 items-center my-12 lg:flex-row md:justify-center lg:gap-3">
                         <article className="bg-white border-3 shadow-big p-3 w-[90%] lg:w-full lg:ml-20 lg:h-full self-center lg:p-6">
                              <h1 className="font-semibold text-2xl lg:text-3xl">
                                   Je suis Gaël Tournier, développeur web freelance à Toulouse, je transforme les idées
                                   en produits concrets. J'associe une
                                   <span className="proposdiv font-bold">expertise technique fullstack</span> à une
                                   vraie
                                   <span className="proposdiv2 ml-1 text-white font-bold">vision produit</span> pour
                                   livrer vite, sans vous demander le moindre effort.
                              </h1>
                              <div className="flex gap-3 mt-6 lg:text-2xl lg:font-black">
                                   <ButtonCTA text="MES PROJETS" color="main" textcol="white" href="portfolio" />
                                   <ButtonCTA text="ME CONTACTER" color="white" textcol="black" href="contact" />
                              </div>
                         </article>

                         <div className="flex flex-col gap-3 items-center w-full">
                              <BoxStats
                                   bigText="A→Z"
                                   smallText="Projets menés de bout en bout"
                                   color="main"
                                   textCol="white"
                              />
                              <BoxStats bigText="IA +" smallText="Workflows augmentés" color="white" />
                              <BoxStats bigText="24h" smallText="Proposition & devis" color="sec" />
                         </div>
                    </div>
                    <div className="w-full mb-12">
                         <Marquee words={words} />
                    </div>
                    <div className="w-[99%] ml-3">
                         <SectionHR number="01" text="EXPERTISE" />
                    </div>

                    <div className="flex flex-col items-center gap-6 my-12 lg:flex-row lg:w-[90%] lg:self-center">
                         <ExpertiseModale />
                    </div>

                    <div className="w-[99%] ml-3">
                         <SectionHR number="02" text="BACKGROUND" />
                    </div>

                    <BackgroundModale />

                    <div className="w-[99%] ml-3">
                         <SectionHR number="03" text="WORKFLOWS IA" />
                    </div>

                    <WorkflowsModale />

                    <div className="bg-sec w-[90%] self-center border-3 shadow-big p-6 mt-12 md:mb-12 lg:flex lg:justify-between lg:items-center">
                         <h2 className="text-4xl font-black mb-3 lg:text-6xl">
                              CONSTRUISONS <br /> ENSEMBLE.
                         </h2>
                         <ButtonCTA
                              text="DÉMARRER UN PROJET"
                              color="main"
                              textcol="white"
                              href="contact"
                              classname="lg:text-3xl lg:px-9 lg:py-3"
                         />
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
