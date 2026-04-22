import React from "react";
import Link from "next/link";


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
        <div className={`relative ${studyCase ? "bg-main col-span-2" : "bg-bg"} border-3 shadow-small clicanim`}>
            <p className={"font-bold opacity-50 text-white ml-3 mt-3 text-sm md:text-xl"}>{type}</p>
            <hr className={"border-2 border-white w-60 mt-1 opacity-50 ml-3"}/>
            <div className={"flex items-center"}>
                {icone}
                <p className={"ml-3 font-extrabold text-2xl text-white md:text-4xl"}>{title}</p>
            </div>

            <p className={"ml-3 mt-3 text-white opacity-50 text-sm md:text-lg"}>{description}</p>

            <div className={"flex flex-wrap ml-3 gap-3 pt-3"}>
                {tags.map((tag) => {
                    return (
                        <div key={tag} className={"border-2 shadow-small bg-white w-fit py-[0.5] px-3"}>
                            <p className={"font-extrabold md:text-lg"}>{tag}</p>
                        </div>
                    )
                })}
            </div>

            <div className={"font-extrabold absolute -top-4 right-5 bg-white border-3 shadow-small w-fit px-3 "}><p className={"md:text-lg"}>{upTag}</p></div>
            <p className={"text-white opacity-50 text-right mr-3 mt-6 pb-3 md:text-2xl ctahover"}>{cta}</p>
        </div>
        </Link>
    )

}