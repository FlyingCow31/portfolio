import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface ProjectDivProps {
    studyCase: boolean,
    icone: React.ReactNode,
    type: string,
    title: string,
    description: string,
    tags: string[],
    upTag: string,
    cta: string,
    href: string
}



export default function ProjectDiv({studyCase, icone, type, title, description, tags, upTag, cta, href}: ProjectDivProps) {
    return (
        <Link href={href} className={`${studyCase ? "col-span-2" : ""}`}>
        <div className={`relative ${studyCase ? "bg-main" : "bg-bg"} border-3 shadow-small clicanim`}>
            <p className={"font-bold opacity-50 text-white ml-3 mt-3 text-sm md:text-xl"}>{type}</p>
            <hr className={"border-2 border-white w-60 mt-1 opacity-50 ml-3"}/>
            <div className={"flex items-center"}>
                {icone}
                <p className={"ml-3 font-extrabold text-2xl text-white md:text-4xl font-title"}>{title}</p>
            </div>

            <p className={"ml-3 mt-3 text-white opacity-50 text-sm md:text-lg"}>{description}</p>

            <div className={"flex flex-wrap ml-3 gap-3 pt-3"}>
                {tags.map((tag) => {
                    return (
                        <div key={tag} className={"border-2 shadow-small bg-white w-fit py-[0.5] px-3"}>
                            <p className={"font-title font-extrabold md:text-lg"}>{tag}</p>
                        </div>
                    )
                })}
            </div>

            <div className={"font-extrabold absolute -top-4 right-5 bg-white border-3 shadow-small w-fit px-3 "}><p className={"md:text-lg font-title"}>{upTag}</p></div>
            <p className={"text-white opacity-50 text-right mr-3 mt-6 pb-3 md:text-2xl ctahover font-title"}>{cta}</p>
        </div>
        </Link>
    )

}

export function IndexProjectDiv() {
    return (
        <div className={'bg-white border-3 w-[80%] mx-auto relative mt-3 shadow-small'}>
            <p className={'bg-sec absolute -top-3 -left-3 z-20 px-3 py-1 border-3 shadow-small'}>SITE WEB</p>
            <div className={'relative mt-6 border-b-3 pb-3'}>
                <Image src={'/epistudios/indexepi.png'} alt={"Alt"} width={270} height={270} className={'mx-auto'}/>
            </div>
            <div className={'p-6'}>
                <h2 className={'titlecardproj ml-0!'}>EPISTUDIOS.FR</h2>
                <p className={'mt-3 italic'}>Epistudio est un site pour un studio de jeux vidéos. </p>
                <Link href={"/portfolio"}>
                    <MdArrowOutward size={50} className={'ml-auto'}/>
                </Link>
            </div>

        </div>
    )
}