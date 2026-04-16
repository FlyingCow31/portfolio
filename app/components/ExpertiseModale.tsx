
import { Telescope, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import {useState} from "react";

const texts = [
    "J’utilise des technologies modernes (Next.JS, React, Tailwind) pour produire\n" +
    "un code performant.\n" +
    "J’accorde une attention particulière à \n" +
    "l’optimisation, à la sécurité des données\n" +
    "et à la partie légale de vos projets.\n" +
    "Workflows augmentés par l’IA."
    ,
    "Grâce à mon experience de chef de projet, je comprends vos besoins et\n" +
    "votre environnement sans même coder. Je priorise ce dont vous avez besoin,\n" +
    "pas ce qui vous sera inutile."
]

const expertise = [
    {
        image: <Wrench color={"white"}/>,
        emojis: <Wrench height={70} width={70} opacity={0.2}/>,
        name: "Ingénierie",
        text: texts[0],
        tags: ["FULLSTACK", "TYPESCRIPT", "NEXT.JS", "NODE.JS"]
    },
    {
        image: <Telescope color={"white"}/>,
        emojis: <Telescope height={70} width={70} opacity={0.2}/>,
        name: "Vision",
        text: texts[1],
        tags: ["ROI", "EQUIPES", "VISION", "PRIORISATION"]
    }
]

export default function ExpertiseModale() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const rightArrow = () => {
        setCurrentIndex((next) => (next + 1) % expertise.length);
    }
    const leftArrow = () => {
        setCurrentIndex((prev) => (prev + 1) % expertise.length);
    }


    return(
        <div className={"relative"}>
            {expertise.map((item, Index) => {
                if (Index !== currentIndex) return null;
                return (
                    <div key={item.name} className={"bg-white border-3 border-black shadow-small w-60 h-fit mb-3"}>
                        <div className={"bg-main w-fit p-3 border shadow-small mt-3 ml-3"}>{item.image}</div>

                        <div className={"absolute right-5 top-10"}>{item.emojis}</div>
                        <h1 className={"text-4xl font-extrabold ml-3 mt-3"}>{item.name}</h1>
                        <p className={"ml-3 mt-3 max-w-50"}>{item.text}</p>

                        <div className={"flex flex-wrap gap-3 ml-3 mt-3 pb-10"}>
                            {item.tags.map((tag) => (
                                <div key={tag} className={"font-bold border border-black shadow-small bg-sec w-fit p-2"}>
                                    <p>{tag}</p>
                                </div>
                            ))}
                        </div>
                    </div> )

                })}
            <button onClick={leftArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 -left-7 z-10 bg-main p-2 border-2 border-black shadow-small text-white">
            <ChevronLeft />
            </button>
            <button onClick={rightArrow} className="opacity-25 hover:opacity-100 absolute top-1/2 -right-7 z-10 bg-main p-2 border-2 border-black shadow-small text-white">
                <ChevronRight />
            </button>

        </div>

    )
}