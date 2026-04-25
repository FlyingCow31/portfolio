"use client"
import PcNav from "@/app/components/PcNav";
import MobileNav from "@/app/components/MobileNav";
import {motion} from "framer-motion"
import {useState} from "react";
import {Book, Layers, ScanEye} from "lucide-react";
import ProblemDiv from "@/app/components/ResumeDiv";
import Link from "next/link";
import GalerieDiv from "@/app/components/GalerieDiv";
import StackDiv from "@/app/components/StackDiv";
import BackButton from "@/app/components/BackButton";
import {useIsDesktop} from "@/app/hooks/useIsDesktop";


const tags = ["FULLSTACK", "NEXT.JS", "DESIGN"];
const colors = ["","sec", "white" , "main"];


export default function EpiPage() {
            const [activeTab, setActiveTab] = useState("resume");
            const isDesktop = useIsDesktop();
    return (
        <main className={"min-h-screen bg-bg flex flex-col items-center pb-15 md:pb-0 overflow-x-hidden"}>
            <PcNav/>
            <MobileNav/>
            <BackButton href={"/portfolio"} pc={isDesktop}/>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, y: 6, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                    className={`bg-white border-3 shadow-big w-[90%] my-10 ${isDesktop ? "md:w-[50%] md:self-start md:ml-60" : "mt-25"}`}
                >
                    <div className={"flex gap-3 m-2"}>
                        {tags.map((tag, index) => {
                            return (
                                <div key={index} className={`bg-${colors[index + 1]} px-2 border-2 shadow-small font-title`}>
                                    <p>{tag}</p>
                                </div>
                            )
                        })}
                    </div>

                    <h1 className={"font-extrabold text-3xl ml-3 font-title"}>EPISTUDIOS.FR</h1>
                    <p className={"ml-3 font-semibold my-3"}>
                        Design professionnel, pages simples et développement fullstack: EPI Studio
                        avait besoin qu&#39;on représente sa marque et ses valeurs dans un site web.
                    </p>

                    <div className={'bg-sec  border-t-3  *:border-2 *:shadow-small flex gap-3 items-center p-3 *:p-1'}>
                        <button onClick={() => setActiveTab("resume")} className={`${activeTab === "resume" ? "bg-main" : "bg-white"}`}>
                            <Book height={45} width={45}/>
                        </button>
                        <button onClick={() => setActiveTab("galery")} className={`${activeTab === "galery" ? "bg-main" : "bg-white"}`}>
                            <ScanEye height={45} width={45}/>
                        </button>

                        <button onClick={() => setActiveTab("stack")} className={`${activeTab === "stack" ? "bg-main" : "bg-white"}`}>
                            <Layers height={45} width={45} />
                        </button>
                    </div>
                </motion.div>
            {activeTab === "resume" && <ProblemDiv/>}
            {activeTab === "galery" && <GalerieDiv/>}
            {activeTab === "stack" && <StackDiv/>}


            <div className={"bg-white border-t-3 p-6 w-full mt-6 md:ml-60"}>
                <p className={" font-extrabold text-3xl"}>Ce projet vous intéresse?</p>
                <Link href={"/contact"}>
                    <motion.button
                        whileHover={{ x: 4, y: 6, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                        className={'bg-main border-black border-3 p-3 shadow-small mt-3 text-white mb-3'}>Parlons-en!</motion.button>
                </Link>
                <Link href={"https://www.epistudios.fr"} >
                    <p className={"ctahover"}>Découvrez le site web →</p>
                </Link>
            </div>
        </main>
    )
}