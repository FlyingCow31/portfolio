import { AppWindow, BrainCircuit, LayoutTemplate } from "lucide-react"
import SolutionDiv from "@/app/components/SolutionsDiv"
import ProcessDiv from "@/app/components/ProcessDiv"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle, SectionHR } from "../components/textcomponents"
import { CTAContact, CTAFinPage, CTAProjets } from "../components/AnimDivs"
import { Metadata } from "next"

export const metadata: Metadata = {
     metadataBase: new URL("https://gaeltournier.dev/solutions"),
     title: "Solutions de développement de software sur mesure | Gaël Tournier",
     description:
          "Développement web, software sur mesure, découvrez les solutions que je propose pour transformer votre idée en projet concret, sur mesure. ",
     alternates: { canonical: "/solutions" },
     openGraph: {
          title: "Solutions de développement de software sur mesure | Gaël Tournier",
          description:
               "Développement web, software sur mesure, découvrez les solutions que je propose pour transformer votre idée en projet concret, sur mesure. ",
          type: "website",
          locale: "fr_FR",
          siteName: "Gaël Tournier",
          images: [{ url: "/og-image.png", width: 1200, height: 630 }],
     },
     twitter: { card: "summary_large_image" },
}

const solutions = [
     {
          icone: <LayoutTemplate color="#ffffff" height={35} width={35} />,
          title: "UN SITE VISIBLE.",
          description:
               "Vos clients vous cherchent sur Google et terminent chez vos concurrents, je règle ça !\n" +
               " Design personnalisé pour la visibilité et pour que vos clients se souviennent de vous.",
          upTag: [{ title: "LA PLUS DEMANDÉE" }],
          cta: "Discutons de votre site",
          price: 1500,
          list: [
               { text: "Site web optimisé pour la conversion" },
               { text: "SEO et Google Business Profile" },
               { text: "Formulaire de contact" },
               { text: "En ligne en 3 semaines" },
               { text: "1er mois de suivi offert, puis dès 20 €/mois", green: true },
          ],
     },
     {
          icone: <AppWindow color="#ffffff" height={35} width={35} />,
          title: "FACILITÉ DE GESTION",
          description:
               "Devis, factures, relances, plannings… Je crée l'outil qui le fait à votre place, adapté à votre façon de travailler.\n",

          upTag: [{ title: "PRODUCTIVITÉ" }],
          cta: "Discutons de votre quotidien",
          price: 800,
          list: [
               { text: "Automatisation de vos tâches répétitives" },
               { text: "Outil de gestion sur-mesure (devis, clients, stock...)" },
               { text: "Conformité facturation électronique 2026/2027" },
               { text: "Formation et suivi inclus" },
          ],
     },
     {
          icone: <BrainCircuit color="#ffffff" height={35} width={35} />,
          title: "ASSISTANT IA",
          description:
               "Vos clients posent toujours les mêmes questions, souvent le soir ou le week-end. Votre assistant IA leur répond, prend leurs coordonnées et leurs rendez-vous, et vous les transmet.",
          upTag: [{ title: "NOUVEAU" }],
          cta: "Recrutez votre assistant",
          list: [
               { text: "Assistant IA formé sur votre entreprise" },
               { text: "Réponses à vos clients 24h/24 sur votre site" },
               { text: "Suivi mensuel et amélioration des réponses" },
               { text: "Prise automatique de rendez-vous" },
          ],
          price: 490,
     },
]

const processes = [
     {
          number: "01",
          title: "Besoins",
          description:
               "En 30 minutes, je comprends vos besoins, votre business et votre clientèle. \n" +
               "Création du cahiers des charges gratuite, rapide et efficace! \n",
     },
     {
          number: "02",
          title: "Proposition",
          description:
               "Proposition, cahier des charges et devis clair avec toutes les spécificités techniques, prix et délai.\n" +
               "Aucune surprise, tout est  clair. Proposition gratuite en moins de 24h. ",
     },
     {
          number: "03",
          title: "Création",
          description:
               "Phase de création du projet. Bilan et demos \n" +
               "régulières, vous suivez et validez la construction\n" +
               "de votre projet sur un panel de suivi. ",
     },
     {
          number: "04",
          title: "Livraison",
          description:
               "Déploiement inclus, votre projet est livré autonome avec une documentation claire pour que votre projet fasse sens et vous appartienne\n" +
               "complétement. Pour les clients qui souhaitent héberger leur site avec mes services, 1 mois leur est offert! ",
     },
]

export default function Solutions() {
     return (
          <div className={"h-screen md:flex"}>
               <Navbar />

               <main className="bg-bg flex flex-col md:flex-1 overflow-y-auto md:pl-6">
                    <MainTitle text="CE QUE JE PROPOSE" title="SOLUTIONS." />
                    <h2 className="text-justify text-xl font-semibold pb-10 m-3 lg:text-3xl lg:max-w-[80%]">
                         Trois offres, un objectif: passer de l&apos;idée au concret. Vous avez un problème, j'ai la
                         solution, parlons-en !
                    </h2>

                    <SectionHR number="01" text="MES OFFRES" />

                    <article className="grid grid-cols-1 gap-6 items-stretch my-12 w-[90%] self-center lg:grid-cols-3 lg:w-[90%]">
                         {solutions.map((solution, index) => (
                              <SolutionDiv delay={index * 0.2} key={index} {...solution} />
                         ))}
                    </article>

                    <SectionHR number="02" text="ET APRÈS ?" />

                    <article
                         className={
                              "flex flex-col gap-10 my-12 items-center lg:grid lg:grid-cols-2 lg:auto-rows-fr lg:items-stretch lg:w-[90%] lg:self-center"
                         }
                    >
                         {processes.map((proc, index) => {
                              return <ProcessDiv delay={index * 0.1} key={index} {...proc} />
                         })}
                    </article>

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
