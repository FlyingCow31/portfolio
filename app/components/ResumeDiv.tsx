"use client"
import {motion} from "framer-motion"
import {Lightbulb, Zap} from "lucide-react";



export default function ProblemDiv() {
    return (
        <div className={"flex flex-col items-center gap-6 md:flex-row md:items-start md:max-w-[90%] md:flex-wrap  lg:ml-60"}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 7, y: 10, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                className={"bg-white border-3 shadow-big w-[90%] pb-3 md:w-[1000px] md:self-start md:h-[320px] lg:w-[30%] md:ml-40 lg:ml-0"}
            >
                <div className={'flex gap-3 items-center bg-colerr p-3 '}>
                    <Zap height={40} width={40} color={"#000000"}/>
                    <h1 className={'text-3xl font-extrabold '}>Le Challenge</h1>
                </div>
                <p className={'ml-3 font-semibold text-lg'}>
                    Une association qui créer du contenu open-source sur Github qui a besoin que son site fasse la <span className={"errordiv"}>distinction entre services payants
                    et création Open-Source</span>. Ils voulaient également l&#39;utiliser comme socle pour leurs recrutements.
                    <span className={"errordiv"}>Tout se faisait par google forms</span>, ce qui, pour un studio de création, n&#39;est pas correct. Ils avaient donc besoin d&#39;un outil propriétaire.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 7, y: 10, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                className={"bg-white border-3 shadow-big w-[90%] pb-3 md:w-[1000px] md:self-start md:ml-40 lg:ml-60 md:h-[320px] lg:w-[30%] "}
            >
                <div className={'flex gap-3 items-center bg-colsol p-3 '}>
                    <Lightbulb height={40} width={40} color={"#000000"}/>
                    <h1 className={'text-3xl font-extrabold '}>La solution</h1>
                </div>
                <p className={'ml-3 w-76 font-semibold text-lg'}> Un site web au design épuré, avec seulement le strict nécessaire en pages pour garder un design professionnel mais accueillant.</p>
                <p className={"mb-3"}>✔️ <span className={"soldiv w-fit font-semibold"}>Design épuré</span></p>
                <p className={"mb-3"}>✔️ <span className={"soldiv w-fit font-semibold"}>Formulaire de recrutement intégré</span></p>
                <p className={"mb-3"}>✔️ <span className={"soldiv w-fit font-semibold"}>Page &#34;service&#34; bien spécifiée</span></p>
                <p>✔️ <span className={"soldiv w-fit font-semibold"}>Portfolio intégré par CTA</span></p>
            </motion.div>

            <div className="flex flex-col gap-6 w-full items-center md:items-start md:flex-row md:justify-start md:items-start md:gap-6 md:mt-10 md:ml-40 lg:ml-0">
                <div className={"w-[50%] flex flex-col items-center bg-black py-3 md:w-[30%]"}>
                    <h1 className={"text-white font-extrabold text-3xl italic"}>Moderne</h1>
                    <p className={"text-white font-bold text-xl"}>Design</p>
                </div>
                <div className={"w-[50%] flex flex-col items-center bg-black py-3 md:w-[30%]"}>
                    <h1 className={"text-white font-extrabold text-3xl italic"}>Next.JS</h1>
                    <p className={"text-white font-bold text-xl"}>Stack principale</p>
                </div>
                <div className={"w-[50%] flex flex-col items-center bg-black py-3 md:w-[30%]"}>
                    <h1 className={"text-white font-extrabold text-3xl italic"}>CTA</h1>
                    <p className={"text-white font-bold text-xl"}>Focus</p>
                </div>
            </div>

        </div>

    )
}