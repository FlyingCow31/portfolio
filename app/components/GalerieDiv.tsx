"use client"
import Image from "next/image";
import {useIsDesktop} from "@/app/hooks/useIsDesktop";
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
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
    const isDesktop = useIsDesktop();
    const [currentIndex, setCurrentIndex] = useState(0);

    const rightArrow = () => {
        setCurrentIndex((next) => (next + 1) % galerie.length);
    }
    const leftArrow = () => {
        setCurrentIndex((prev) => (prev + 1) % galerie.length);
    }
    return (
        <div>
            <div className={"relative flex flex-col items-center"}>
                {galerie.map((image, index) => {
                    if (index !== currentIndex) return null;
                    return (
                        <div key={index} className={"relative w-[95%] h-[300px] shadow-small "}>
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
            </div>
            <div className={"hidden md:flex flex-col items-center mt-3"}>
                <div className={"md:flex flex-row gap-3 w-[95%] border-3 shadow-small py-3 bg-sec"}>
                {galerie.map((image, index) => {
                    return (
                        <div key={index} className={"relative w-[50%] h-[100px]"} onClick={() => setCurrentIndex(image.index - 1)}>
                            <Image src={`${image.src}`} alt={`${image.alt}`} fill
                                   className="object-contain" />
                        </div>
                    )

                })}
                </div>
            </div>
            <div className={"flex flex-col items-center mt-6"}>
                {galerie.map((image, index) => {
                    if (index !== currentIndex) return null;
                    return (
                        <div key={index} className={"relative w-[95%] h-fit shadow-small bg-white border-3 py-6"}>
                            <p className={"ml-3 font-semibold text-xl"}>{image.description}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}