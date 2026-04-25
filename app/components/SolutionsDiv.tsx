"use client"
import React from "react";
import {motion} from "framer-motion"
import Link from "next/link";


interface SolutionDivProps {
    icone: React.ReactNode,
    title: string,
    description: string,
    upTag: { title: string; left?: boolean }[],
    cta: string,
    delay: number
}

export default function SolutionDiv({icone, title, description, upTag, cta, delay}: SolutionDivProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 4, y: 6, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
            transition={{ duration: 0.6, delay}}
            viewport={{ once: true }}
            className={`relative bg-white border-3 shadow-small`}>


            <div className={"bg-main border-3 shadow-small w-fit p-2 m-3 mt-6 "}>{icone}</div>
            <p className={"ml-3 font-extrabold text-2xl text-black md:text-4xl font-title"}>{title}</p>

            <p className={"ml-3 mt-3 text-black opacity-50 text-sm md:text-xl font-semibold"}>{description}</p>

            <div className={"flex absolute -top-4 right-2 gap-2"}>
                {upTag.map((tag, index) => {
                    return(
                        <p key={index} className={`font-extrabold ${tag.left ? "bg-main" :  "bg-sec"} border-3 shadow-small w-fit px-3 md:text-xl`}>{tag.title}</p>
                    )
                })}
            </div>

            <hr className={"ml-auto border-2 border-main w-60 opacity-50 mt-6 mr-3 md:w-80"}/>
            <Link href={"/contact"}>
                <p className={"text-main opacity-50 text-right mr-3 mt-1 pb-3 md:text-2xl ctahover font-title"}>{cta + " →"}</p>
            </Link>

        </motion.div>
    )
}