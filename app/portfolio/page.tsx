import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle, SectionHR } from "../components/textcomponents"
import { CTAFinPage, CTAVotreProjet } from "../components/AnimDivs"
import { CaseStudy, ProjectDiv } from "../components/PortfolioItems"
import { Metadata } from "next"
import { projects } from "@/lib/data"

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
export default function Portfolio() {
     const caseStudies = projects.filter((project) => project.study)
     const otherProjects = projects.filter((project) => !project.study)

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
                         {caseStudies.map((study) => (
                              <CaseStudy key={study.slug} {...study} />
                         ))}
                    </div>

                    <SectionHR number="02" text="AUTRES PROJETS" />
                    <div className=" my-12 w-[90%] self-center flex flex-col gap-10 lg:gap-6 lg:flex-row items-stretch lg:flex-wrap">
                         {otherProjects.map((project) => {
                              return <ProjectDiv key={project.slug} {...project} />
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
