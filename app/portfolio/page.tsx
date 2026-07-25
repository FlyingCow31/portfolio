import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle, SectionHR } from "../components/textcomponents"
import { CTAFinPage, CTAVotreProjet } from "../components/AnimDivs"
import { CaseStudy, ProjectDiv } from "../components/PortfolioItems"
import { desc } from "framer-motion/client"
import { Tags } from "lucide-react"

const caseStudies = [
     {
          type: "SITE WEB",
          title: "EPISTUDIO.FR",
          desc: "Site vitrine pour l'association EPI STUDIO. Design, front-end et back-end, ainsi qu'un vrai travail d'équipe.",
          tags: ["FULLSTACK", "GESTION D'ÉQUIPES", "NEXT.JS"],
          ctatitle: "Découvrir le case study",
          ctahref: "/portfolio/epistudios",
          image: "/epistudios/indexepi.png",
     },
]

const projects = [
     {
          type: "Software",
          title: "FLYINGTODO",
          desc: "Notion a trop de features, on s'y perd. J'ai créé une application simple pour organiser mes projets et ma journée.",
          tags: ["ELECTRON", "JAVASCRIPT", "DEPLOIEMENT"],
          ctatitle: "Découvrir le projet",
          ctahref: "/portfolio/flyingtodo",
          iconhref: "/iconflyingtodovraie.ico",
          iconalt: "Icone d'une main tenant une checkmark symbolisant une todo.",
     },
     {
          type: "Site Web",
          title: "ESPACE MEMBRE",
          desc: "Pannel de gestion de commande pour mon activité de freelance. Le client peut suivre l'avancée de sa commande et retrouver ses documents (devis, facture, etc.) en deux clics.",
          tags: ["FULLSTACK", "NEXT.JS", "AUTH", "PERMISSIONS"],
          ctatitle: "Découvrir le site",
          ctahref: "/portfolio/pannel",
     },
]

export default function Portfolio() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="flex flex-col flex-1 bg-bg pb-40 md:pb-0 overflow-y-auto md:pl-3">
                    <MainTitle text="CRÉATIONS & PROJETS" title="PORTFOLIO." />
                    <h2 className="ml-3 mb-12 text-2xl font-semibold lg:mt-12 ">
                         Chaque projet résoud un problème. Des case studies détaillées sur des réalisations personnelles
                         et professionnelles. WebApps, Sites Webs, Designs.
                    </h2>
                    <SectionHR number="01" text="CASE STUDY" />

                    <div className=" my-12 w-[90%] self-center">
                         {caseStudies.map((study, index) => (
                              <CaseStudy key={index} {...study} />
                         ))}
                    </div>

                    <SectionHR number="02" text="AUTRES PROJETS" />
                    <div className=" my-12 w-[90%] self-center flex flex-col gap-6 lg:flex-row items-stretch lg:flex-wrap">
                         {projects.map((proj, index) => {
                              return <ProjectDiv key={index} {...proj} />
                         })}
                         <CTAVotreProjet />
                    </div>
                    <div className="flex flex-col items-center md:mb-12">
                         <CTAFinPage text="ON TRAVAILLE ENSEMBLE ?" ctatext="DÉMARRER UN PROJET" />
                    </div>
                    <Footer />
               </main>
          </div>
     )
}
