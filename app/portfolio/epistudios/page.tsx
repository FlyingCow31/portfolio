import BackButton, { ButtonCTA } from "@/app/components/buttons"
import Footer from "@/app/components/Footer"
import { MobileNav, Navbar } from "@/app/components/Navbar"
import { ChallengeDiv, GalerieView, HeroProjet, SolutionDiv, StackCard, StatsDiv } from "@/app/components/ProjectPage"
import { TitleDivProject } from "@/app/components/textcomponents"
import { desc } from "framer-motion/client"
import Link from "next/link"
import { title } from "process"

const challenge = (
     <>
          Une association qui créer du contenu open-source sur Github qui a besoin que son site fasse la
          <span className="errordiv">distinction entre services payants et créations Open-Source.</span> Ils voulaient
          également l'utiliser comme socle pour leurs recrutements.{" "}
          <span className="errordiv">Tout se faisait par google forms</span>, ce qui n'est pas correct pour un studio de
          création. Ils avaient donc besoin d'un outil propriétaire.
     </>
)
const solution = (
     <>
          Un site web au design épuré, avec seulement le strict nécessaire en pages pour garder un design professionnel
          mais accueillant.
          <br />
          ✔️ <span className="soldiv">Design épuré</span> <br />
          ✔️ <span className="soldiv">Formulaires gérés par SMTP</span> <br />
          ✔️ <span className="soldiv">Page "service" bien spécifiée</span> <br />
          ✔️ <span className="soldiv">Portfolio intégré par CTA</span> <br />
     </>
)

const galerie = [
     {
          image: "/epistudios/indexepi.png",
          title: "Page d'accueil",
          desc: "Design de l'index moderne et épuré avec des animations de feuilles tournantes autour de l'objet principal: la statue.",
     },
     {
          image: "/epistudios/projectsepi.png",
          title: "Projets",
          desc: "Chaque projet possède un CTA dédié, avec un design lissé et accessible.",
     },
     {
          image: "/epistudios/servicesepi.png",
          title: "Services",
          desc: "Les services sont optimisés pour que l'utilisateur comprenne directement ce qui est proposé et puisse avoir une experience d'achat linéaire.",
     },
]

const stackCards = [
     {
          title: "Front-End",
          items: [
               {
                    title: "Next.JS",
                    desc: "Rapidité, facilité et lisibilité pour un projet Open-Source.",
               },
               {
                    title: "React.JS",
                    desc: "Simplicité de code grâce aux components et à sa syntaxe en TS.",
               },
               {
                    title: "Tailwind.CSS",
                    desc: "Moderne, Tailwind nous permet d'aller plus vite dans le code.",
               },
          ],
          color: "#87CEEB",
     },
     {
          title: "Back-End",
          items: [
               {
                    title: "Node.JS",
                    desc: "Rester dans l'environnement JS avec Node m'a permi d'être plus productif.",
               },
               {
                    title: "SMTP/Nodemailer",
                    desc: "Liaison par mail sécurisé avec les serveurs SMTP inclus avec le nom de domaine pour réduire les coûts.",
               },
          ],
          color: "#90EE90",
     },
     {
          title: "DevOps & Design",
          items: [
               {
                    title: "Docker",
                    desc: "Pour un déploiement facile et optimisé de la V1 sur le VPS de l'association.",
               },
               {
                    title: "Figma",
                    desc: "Un long travail de design, en collaboration avec les graphistes de l'association.",
               },
               {
                    title: "Vercel & Google Search Console",
                    desc: "Déploiement facile et aucun impact négatif sur le SEO. Gestion du SEO et du transfert depuis l'ancien nom de domaine.",
               },
          ],
          color: "#F4D738",
     },
]
export default function EpiPage() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col">
                    <BackButton />
                    <div className="flex flex-col items-center">
                         <HeroProjet
                              type="Site Web"
                              title="EPISTUDIO.FR"
                              desc="Design professionnel, pages simples et développement fullstack: EPI Studio avait besoin
                    qu'on représente sa marque et ses valeurs dans un site web."
                              tags={["FULLSTACK", "NEXT.JS", "DESIGN"]}
                         />
                    </div>

                    <div className="bg-white border-y-3 p-6 mt-12">
                         <TitleDivProject text="LE PROJET" />
                         <div className="flex flex-col gap-6">
                              <ChallengeDiv challenge={challenge} />
                              <SolutionDiv solution={solution} />
                         </div>
                         <div className="grid grid-cols-2 gap-3 my-6">
                              <StatsDiv Main="Moderne" Sec="Design" />
                              <StatsDiv Main="Next.JS" Sec="Stack principale" />
                              <StatsDiv Main="CTA" Sec="Focus" />
                              <StatsDiv Main="SMTP" Sec="Mailing" />
                         </div>
                    </div>

                    <div className="flex flex-col bg-sec border-b-3 p-6">
                         <TitleDivProject text="GALERIE" />
                         <div className="flex flex-col gap-6">
                              {galerie.map((div, index) => {
                                   return <GalerieView key={index} {...div} />
                              })}
                         </div>
                    </div>

                    <div className="flex flex-col bg-white border-b-3 p-6">
                         <TitleDivProject text="LA STACK" />
                         <div className="flex flex-col gap-6">
                              {stackCards.map((card, index) => {
                                   return <StackCard key={index} {...card} />
                              })}
                         </div>
                    </div>

                    <div className="flex flex-col gap-3 p-3 bg-main pb-40">
                         <h2 className="text-white text-5xl font-black">Ce projet vous intéresse?</h2>

                         <ButtonCTA text="Parlons-en" color="white" href="contact" textcol="black" />
                         <Link href={"https://epistudio.fr"}>
                              <p className="text-white text-2xl font-bold ctahover">Découvrez le site web →</p>
                         </Link>
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
