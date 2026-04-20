import MobileNav from "@/app/components/MobileNav";
import React from "react";
import {AppWindow, Glasses, LayoutTemplate} from "lucide-react";
import SolutionDiv from "@/app/components/SolutionsDiv";
import ProcessDiv from "@/app/components/ProcessDiv";
import Link from "next/link";
import PcNav from "@/app/components/PcNav";


const solutions = [
    {
        icone: <LayoutTemplate color="#ffffff" height={35} width={35}/>,
        title: "DEVELOPPEMENT WEB",
        description: "Création de sites webs E-commerce, vitrines, ou tout autre besoin!\n" +
            "Création d’une image de marque et d’un site dont vos clients se\n" +
            "souviendront!",
        upTag: [{title:"FULLSTACK", left: true}, {title:"DE A à Z"}],
        cta: "Discuter de votre site web"
    },
    {
        icone: <AppWindow color="#ffffff" height={35} width={35} />,
        title: "SOFTWARES SUR-MESURE",
        description: "Applications web, MVP, SAAS, Outils... Votre idée fonctionnelle et  \n" +
            "vivante en quelques semaines grâce à des technologies modernes.",
        upTag: [ {title:"SAAS", left: true}, {title:"MVP"}],
        cta: "Discuter de votre app"
    },
    {
        icone: <Glasses color="#ffffff" height={35} width={35} />,
        title: "CHEF DE PROJET",
        description: "Accompagnement dans la gestion de vos équipes, de la direction\n" +
            "de vos projets et dans la création. Comptes, légal et recrutements\n" +
            "inclus !",
        upTag: [{title:"RECRUTEMENTS", left: true}, {title:"GESTION"}],
        cta: "Discuter de votre site web"
    }
]

const processes = [
    {
        number: "01",
        title: "Besoins",
        description: "Un appel rapide pour déterminer vos besoins. \n" +
            "Pas de Cahier des charges ni d’étude de cas \n" +
            "interminable: 30 minutes et je fais tout le travail ! ",
        arrow: true
    },
    {
        number: "02",
        title: "Proposition",
        description: "Proposition et devis clair avec toutes les spécificités techniques, prix et délai.\n" +
            "Aucune surprise, tout est  clair. Proposition en moins de 24h. ",
        arrow: true,
        down: true
    },
    {
        number: "03",
        title: "Création",
        description: "Phase de création du projet. Bilan et demos \n" +
            "régulières, vous suivez et validez la construction\n" +
            "de votre projet. ",
        arrow: true,
        left: true
    },
    {
        number: "04",
        title: "Livraison",
        description: "Déploiement inclus, votre projet est livré autonome avec une documentation claire pour que votre projet fasse sens et vous appartienne\n" +
            "complétement."
    }
]


export default function Solutions() {
    return (
        <main className={"bg-bg min-h-screen flex flex-col items-center pb-30 md:flex-row md:overflow-x-hidden"}>
            <PcNav/>
            <div className={"md:ml-60 md:w-full "}>
                <p className={"self-start my-3 border-3 border-black shadow-big bg-main text-white text-sm font-bold p-2 w-fit md:text-3xl"}>
                    Services
                </p>
                <h1 className={"self-start text-5xl font-extrabold mb-10 md:text-7xl"}>MES <br/> SOLUTIONS</h1>

                <div className={"w-85 flex flex-col gap-6 md:w-[90%]"}>
                    {solutions.map((solutions, index) => {
                        return (
                            <SolutionDiv key={index} {...solutions}/>
                        )
                    })}
                </div>

                <div className={"flex flex-col items-center mt-6 md:flex-row md:gap-15 md:max-w-[90%] md:justify-center md:mt-15"}>
                    <div>
                        <p className={"font-extrabold text-xl"}>PROJETS CONCRETS</p>
                        <hr className={" border-3 w-50"}/>
                    </div>
                    <div>
                        <p className={"font-extrabold text-sm opacity-40 mt-2 md:text-xl"}>CONTACTEZ-MOI</p>
                        <hr className={" border-2 w-30 opacity-40 md:w-43"}/>
                    </div>
                </div>

                <div className={"flex gap-5 items-center mt-12"}>
                    <p className={"font-extrabold md:text-4xl"}>ET APRES ?</p>
                    <hr className={"flex-1 border-2 w-auto md:flex-none md:w-[73%]"}/>
                </div>

                <div className={"w-85 flex flex-col gap-10 mt-3 md:mt-6 md:grid md:grid-cols-2 md:w-[90%]"}>
                    {processes.map((proc, index) => {
                        return (
                            <ProcessDiv key={index} {...proc}/>
                        )
                    })}
                </div>

                <div className={"bg-main border-3 shadow-big w-85 flex flex-col items-center py-3 mt-6 md:w-[90%] "}>
                    <h1 className={"self-start ml-3 font-extrabold text-4xl text-white md:text-6xl"}>UN <br/> PROBLEME <br/> A RESOUDRE?</h1>
                    <p className={"self-start ml-3 mt-3 text-xl w-70 font-semibold mb-3 md:w-[80%]"}>Discutons de vos besoins pendant
                        30 minutes. C’est sans engagement et votre
                        projet gagnera une vision concrète;
                        Pas un devis vide de sens.</p>
                    <Link href={"/contact"}>
                        <button className={"bg-white font-bold border-3 shadow-small p-2 w-75  "}>
                            DISCUTONS DE VOTRE PROJET
                        </button>
                    </Link>
                </div>
            </div>
            <MobileNav/>
        </main>
    )
}