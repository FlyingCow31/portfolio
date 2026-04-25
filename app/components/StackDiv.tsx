"use client"
import {motion} from "framer-motion"

export default function StackDiv() {
    return (
        <div className={"flex flex-col gap-6 w-[90%] md:flex-row md:w-[75%] lg:w-[80%] md:ml-40 lg:ml-45 *:pb-3"}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={"border-3 shadow-big bg-white w-full"}>
                <h1 className={"bg-[#87CEEB] font-extrabold text-2xl p-3 font-title"}>Front-End</h1>
                <p className={"titlecardproj underline decoration-[#87CEEB] decoration-3"}>Next.JS </p>
                <p className={"desccardproj"}>Rapidité, facilité et lisibilité pour un projet Open-Source.</p>
                <p className={"titlecardproj underline decoration-[#87CEEB] decoration-3"}>React.JS</p>
                <p className={"desccardproj"}>Simplicité de code grâce aux componants et à sa syntaxe en TS.</p>
                <p className={"titlecardproj underline decoration-[#87CEEB] decoration-3"}>Tailwind.CSS</p>
                <p className={"desccardproj"}>Moderne, Tailwind nous permet d&#39;aller plus vite dans le code.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={"border-3 shadow-big bg-white w-full"}>
                <h1 className={"bg-[#90EE90] font-extrabold text-2xl p-3 font-title"}>Back-End</h1>
                <p className={"titlecardproj underline decoration-[#90EE90] decoration-3"}>Node.JS </p>
                <p className={"desccardproj"}>Rester dans l&#39;environnement JS avec Node m&#39;a permi d&#39;être plus productif.</p>
                <p className={"titlecardproj underline decoration-[#90EE90] decoration-3"}>Email.JS</p>
                <p className={"desccardproj"}>Un système simple, modifiable par tous niveaux, et adapté aux besoins de l&#39;association.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={"border-3 shadow-big bg-white w-full "}>
                <h1 className={"bg-[#F4D738] font-extrabold text-2xl p-3 font-title"}>DevOps & design</h1>
                <p className={"titlecardproj underline decoration-[#F4D738] decoration-3"}>Docker </p>
                <p className={"desccardproj"}>Pour un déploiement facile et optimisé.</p>
                <p className={"titlecardproj underline decoration-[#F4D738] decoration-3"}>Figma</p>
                <p className={"desccardproj"}>Un long travail de design, en collaboration avec les graphistes de l&#39;association.</p>
            </motion.div>
        </div>
    )
}