import Image from "next/image"

interface ProcessProps {
    number: string,
    title: string,
    description: string,
    arrow?: boolean,
    down?: boolean,
    left?: boolean
}

export default function ProcessDiv({number, title, description, arrow, down, left}: ProcessProps) {
    return (
        <div className={"relative bg-white border-2 shadow-small"}>
            <div className={"relative ml-3"}>
                <p className={"font-extrabold text-7xl opacity-10"}>{number}</p>
                <p className={"absolute bottom-1 left-11 font-extrabold text-4xl"}>{title}</p>
            </div>

            <p className={"ml-3 mt-3 pb-3"}>{description}</p>
            {arrow ? <div className={`rotate-90 absolute -bottom-10 right-29 z-10 opacity-25 md:hidden `}>
                <Image src={"/arrowProcess.svg"} alt={"arrow"} width={80} height={80}/>
            </div>
                : ""}
        </div>
    )
}