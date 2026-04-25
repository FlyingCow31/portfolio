"use client"
import Image from "next/image";

import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {motion} from "framer-motion"

const galerie = [
    {
        src: "/epistudios/indexepi.png",
        alt: "Index epi",
        description: "Design de l'index moderne et épuré avec des animations de feuilles tournantes autour de l'objet principal: la statue.",
        index: 1
    },
    {
        src: "/epistudios/projectsepi.png",
        alt: "Projects Epi",
        description: "Chaque projet possède un CTA dédié, avec un design lissé et accessible. ",
        index: 2
    },
    {
        src: "/epistudios/servicesepi.png",
        alt: "Services Epi",
        description: "Les services sont optimisés pour que l'utilisateur comprenne directement ce qui est proposé et puisse " +
            "avoir une experience d'achat linéaire",
        index: 3
    }
];

export default function GalerieDiv() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const rightArrow = () => {
        setCurrentIndex((next) => (next + 1) % galerie.length);
    }
    const leftArrow = () => {
        setCurrentIndex((prev) => (prev + 1) % galerie.length);
    }
    return (
        <div className={'md:w-[70%] md:ml-50'}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={"relative flex flex-col items-center md:items-start md:ml-3"}>
                {galerie.map((image, index) => {
                    if (index !== currentIndex) return null;
                    return (
                        <div key={index} className={"relative w-[95%] h-[300px] shadow-small"}>
                            <Image src={`${image.src}`} alt={`${image.alt}`} fill
                                   className="object-contain p-3 border-black border-3"/>
                        </div>
                        )

                })}
                <button onClick={leftArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 left-2 z-10 bg-main p-2 border-2 border-black shadow-small text-white md:hidden">
                    <ChevronLeft />
                </button>
                <button onClick={rightArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 right-2 z-10 bg-main p-2 border-2 border-black shadow-small text-white  md:hidden">
                    <ChevronRight />
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={"hidden md:flex flex-col items-center mt-3 md:items-start md:ml-3"}>
                <div className={"md:flex flex-row w-[95%] border-3 shadow-small py-3 bg-sec overflow-hidden flex-nowrap"}>
                {galerie.map((image, index) => {
                    return (
                        <div key={index} style={{width: "calc(100% / 3)" }} className={"relative h-[100px] flex-shrink-0"} onClick={() => setCurrentIndex(image.index - 1)}>
                            <Image src={`${image.src}`} alt={`${image.alt}`} fill
                                   className="object-contain" />
                        </div>
                    )

                })}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={"flex flex-col items-center mt-6 md:items-start md:ml-3"}>
                {galerie.map((image, index) => {
                    if (index !== currentIndex) return null;
                    return (
                        <div key={index} className={"relative w-[95%] h-fit shadow-small bg-white border-3 py-6"}>
                            <p className={"ml-3 font-semibold text-xl"}>{image.description}</p>
                        </div>
                    )

                })}
            </motion.div>
        </div>
    )
}