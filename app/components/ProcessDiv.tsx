"use client"
import Image from "next/image"
import {motion} from "framer-motion"

interface ProcessProps {
    number: string,
    title: string,
    description: string,
    arrow?: boolean,
    down?: boolean,
    left?: boolean,
    delay: number
}

export default function ProcessDiv({number, title, description, arrow, down, left, delay}: ProcessProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 4, y: 6, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
            transition={{ duration: 0.6, delay}}
            viewport={{ once: true }}
            className={"relative bg-white border-2 shadow-small"}>
            <div className={"relative ml-3"}>
                <p className={"font-extrabold text-7xl opacity-10"}>{number}</p>
                <p className={"absolute bottom-1 left-11 font-extrabold text-4xl font-title"}>{title}</p>
            </div>

            <p className={"ml-3 mt-3 pb-3"}>{description}</p>
            {arrow ? <div className={`rotate-90 absolute -bottom-10 right-29 z-10 opacity-25 md:hidden `}>
                <Image src={"/arrowProcess.svg"} alt={"arrow"} width={80} height={80}/>
            </div>
                : ""}
        </motion.div>
    )
}