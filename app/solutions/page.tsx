import { AppWindow, Glasses, LayoutTemplate } from "lucide-react"
import SolutionDiv from "@/app/components/SolutionsDiv"
import ProcessDiv from "@/app/components/ProcessDiv"
import Link from "next/link"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle, SectionHR } from "../components/textcomponents"
import { CTAContact, CTAFinPage, CTAProjets } from "../components/AnimDivs"

const solutions = [
     {
          icone: <LayoutTemplate color="#ffffff" height={35} width={35} />,
          title: "DEVELOPPEMENT WEB",
          description:
               "Sites E-commerce, vitrines, ou tout autre besoin.\n" +
               "Création d'une image de marque et d'un site dont vos clients se\n" +
               "souviendront!",
          upTag: [{ title: "FULLSTACK" }],
          cta: "Discuter de votre site",
     },
     {
          icone: <AppWindow color="#ffffff" height={35} width={35} />,
          title: "SOFTWARES SUR-MESURE",
          description:
               "Applications web, MVP, SAAS, Outils... Votre idée fonctionnelle et  \n" +
               "vivante en quelques semaines grâce à des technologies modernes.",
          upTag: [{ title: "SAAS/MVP" }],
          cta: "Discuter de votre app",
     },
     {
          icone: <Glasses color="#ffffff" height={35} width={35} />,
          title: "CHEF DE PROJET",
          description:
               "Accompagnement dans la gestion de vos équipes, la direction\n" +
               "de vos projets et la création. Comptes, légal et recrutements\n" +
               "inclus!",
          upTag: [{ title: "GESTION" }],
          cta: "Discuter de votre projet",
     },
]

const processes = [
     {
          number: "01",
          title: "Besoins",
          description:
               "Un appel rapide pour déterminer vos besoins. \n" +
               "Pas de Cahier des charges ni d'étude de cas \n" +
               "interminable: 30 minutes et je fais tout le travail ! ",
     },
     {
          number: "02",
          title: "Proposition",
          description:
               "Proposition et devis clair avec toutes les spécificités techniques, prix et délai.\n" +
               "Aucune surprise, tout est  clair. Proposition en moins de 24h. ",
     },
     {
          number: "03",
          title: "Création",
          description:
               "Phase de création du projet. Bilan et demos \n" +
               "régulières, vous suivez et validez la construction\n" +
               "de votre projet. ",
     },
     {
          number: "04",
          title: "Livraison",
          description:
               "Déploiement inclus, votre projet est livré autonome avec une documentation claire pour que votre projet fasse sens et vous appartienne\n" +
               "complétement.",
     },
]

export default function Solutions() {
     return (
          <div className={"h-screen md:flex"}>
               <Navbar />

               <main className="bg-bg flex flex-col md:flex-1 overflow-y-auto md:pl-6">
                    <MainTitle text="CE QUE JE PROPOSE" title="SOLUTIONS." />
                    <h1 className="text-justify text-xl font-semibold pb-10 m-3 lg:text-3xl lg:max-w-[80%]">
                         Trois offres, un objectif: passer de l'idée au concret. Site web, software ou direction de
                         projet, je prends tout en charge de A à Z.
                    </h1>

                    <SectionHR number="01" text="MES OFFRES" />

                    <div className={"flex flex-col gap-6 items-center my-12 lg:flex-row lg:w-[90%] lg:self-center"}>
                         {solutions.map((solutions, index) => {
                              return <SolutionDiv delay={index * 0.1} key={index} {...solutions} />
                         })}
                    </div>

                    <SectionHR number="02" text="ET APRÈS ?" />

                    <div
                         className={
                              "flex flex-col gap-10 my-12 items-center lg:grid lg:grid-cols-2 lg:w-[90%] lg:self-center"
                         }
                    >
                         {processes.map((proc, index) => {
                              return <ProcessDiv delay={index * 0.1} key={index} {...proc} />
                         })}
                    </div>

                    <SectionHR number="03" text="DÉCOUVRIR" />

                    <div className=" flex flex-col gap-6 my-12 items-center lg:flex-row lg:w-[90%] lg:self-center">
                         <CTAProjets />
                         <CTAContact />
                    </div>

                    <div className="mb-40 flex flex-col items-center md:mb-20">
                         <CTAFinPage text="PRÊT À AVANÇER ?" ctatext="DISCUTONS DE VOTRE PROJET" />
                    </div>

                    <MobileNav />
                    <Footer classname="md:-ml-3" />
               </main>
          </div>
     )
}
