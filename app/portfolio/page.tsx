"use client"
import MobileNav from "@/app/components/MobileNav";
import Image from "next/image";
import ProjectDiv from "@/app/components/ProjectDiv";

import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import PcNav from "@/app/components/PcNav";

const projects = [
    {
        studyCase: true,
        icone: "",
        type: "Site Web",
        title: "EPISTUDIOS.FR",
        description: "Site Vitrine pour l’association \n" +
            "EPI STUDIO. Design, front-end\n" +
            "et backend, ainsi que travail\n" +
            "d’équipe.",
        tags: ["FULLSTACK", "GESTION D'EQUIPES", "NEXT.JS"],
        upTag: "CASE STUDY",
        cta: "Découvrir le case study ->"
    },
    {
        studyCase: false,
        icone: <Image src={"/iconflyingtodovraie.ico"} alt={"iconeFlyingToDo"} height={64} width={64} className={"md:w-20 md:h-20"}/>,
        type: "Software",
        title: "FLYINGTODO",
        description: "Notion a trop de features, on \n" +
            "s’y perd. J’ai alors créé une \n" +
            "application simple pour \n" +
            "organiser mes projets et ma \n" +
            "journée !",
        tags: ["ELECTRON", "JAVASCRIPT", "DEPLOIEMENT"],
        upTag: "NEW",
        cta: "Découvrir le projet ->"
    }
]



export default function Portfolio() {
    const isDesktop = useIsDesktop();
    const [currentIndex, setCurrentIndex] = useState(0);

    const rightArrow = () => {
        setCurrentIndex((next) => (next + 1) % projects.length);
    }
    const leftArrow = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }

    return (
        <main className={"bg-bg min-h-screen no-scrollbar"}>
            <PcNav/>
            <div className={" flex flex-col items-center md:ml-60 md:mb-20"}>
                <p className={" self-start m-3 border-3 border-black shadow-big bg-main text-white text-sm font-bold p-2 w-fit md:text-2xl"}>
                    PORTFOLIO
                </p>

                <h1 className={"self-start ml-3 text-4xl font-extrabold md:text-6xl"}>CREATIONS <br/> & PROJETS.</h1>
                <hr className={"border-main border-3 w-80 self-start ml-3 mt-3 md:w-100"}/>
                <p className={"ml-3 mt-3 font-semibold w-85 self-start md:w-[80%] md:text-xl"}>
                    Chaque projet résoud un problème.
                    Naviguez dans les case studies sur des
                    projets personnels et professionnels.<br/>
                    WebApps, Sites Webs, Designs...
                </p>

                {/*TODO: Add a modal when clicking on project */}

                <div className={"relative bg-white w-83 border-3 shadow-big py-4 px-3 flex flex-col gap-2 self-start mt-3 ml-3 md:grid md:grid-cols-2 md:w-[80%] md:gap-6"}>
                    {projects.map((project, index) => {
                        if (!isDesktop && index !== currentIndex) return null;
                        return (
                            <ProjectDiv
                                key={index}
                                {...project}
                            />
                        )
                    })}
                    <button onClick={leftArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 -left-3 z-10 bg-main p-2 border-2 border-black shadow-small text-white md:hidden">
                        <ChevronLeft />
                    </button>
                    <button onClick={rightArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 -right-3 z-10 bg-main p-2 border-2 border-black shadow-small text-white  md:hidden">
                        <ChevronRight />
                    </button>
                </div>

            </div>
            <MobileNav/>
        </main>
    )
}