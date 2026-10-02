import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle, SectionHR } from "../components/textcomponents"
import { CTAFinPage, CTAVotreProjet } from "../components/AnimDivs"
import { CaseStudy, ProjectDiv } from "../components/PortfolioItems"
import { Metadata } from "next"

export const metadata: Metadata = {
     metadataBase: new URL("https://gaeltournier.dev/portfolio"),
     title: "Portfolio | Projets et réalisations | Gaël Tournier",
     description:
          "Découvrez le portfolio de Gaël Tournier, projets web et software réalisés sur mesure avec des technologies modernes. Certains de ces projets ont été développés pour des clients.",
     alternates: { canonical: "/portfolio" },
     openGraph: {
          title: "Portfolio | Projets et réalisations | Gaël Tournier",
          description:
               "Découvrez le portfolio de Gaël Tournier, projets web et software réalisés sur mesure avec des technologies modernes. Certains de ces projets ont été développés pour des clients.",
          type: "website",
          locale: "fr_FR",
          siteName: "Gaël Tournier",
          images: [{ url: "/og-image.png", width: 1200, height: 630 }],
     },
     twitter: { card: "summary_large_image" },
}

const caseStudies = [
     {
          type: "SITE WEB",
          title: "EPISTUDIO.FR",
          desc: "Site vitrine pour l'association EPI STUDIO. Design, front-end et back-end, ainsi qu'un vrai travail d'équipe.",
          tags: ["FULLSTACK", "GESTION D'ÉQUIPES", "NEXT.JS"],
          ctatitle: "Découvrir le case study EpiStudio",
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
          ctatitle: "Découvrir le projet FlyingTodo",
          ctahref: "/portfolio/flyingtodo",
          iconhref: "/iconflyingtodovraie-6.png",
          iconalt: "Icone d'une main tenant une checkmark symbolisant une todo.",
     },
     {
          type: "Site Web",
          title: "PANEL DE GESTION D'ENTREPRISE",
          desc: "Panel de gestion d'entreprise pour mon activité de freelance. Le client peut suivre l'avancée de sa commande et retrouver ses documents (devis, facture, etc.) en deux clics.",
          tags: ["FULLSTACK", "NEXT.JS", "AUTH", "PERMISSIONS"],
          ctatitle: "Découvrir le site",
          ctahref: "/portfolio/panelgestionentreprise",
     },
]

export default function Portfolio() {
     return (
          <div className="bg-bg h-screen md:flex">
               <Navbar />
               <MobileNav />
               <main className="flex flex-col md:flex-1 overflow-y-auto bg-bg ">
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
                    <div className=" my-12 w-[90%] self-center flex flex-col gap-10 lg:gap-6 lg:flex-row items-stretch lg:flex-wrap">
                         {projects.map((proj, index) => {
                              return <ProjectDiv key={index} {...proj} />
                         })}
                         <CTAVotreProjet />
                    </div>
                    <div className="flex flex-col items-center mb-12">
                         <CTAFinPage text="ON TRAVAILLE ENSEMBLE ?" ctatext="DÉMARRER UN PROJET" />
                    </div>
                    <Footer />
               </main>
          </div>
     )
}
