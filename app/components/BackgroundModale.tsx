import {UserCog} from "lucide-react";

const texts = [
    "Grâce à mon experience dans de nombreux projets, \n" +
    "j’ai aquéri une capacité à mener un projet de A à Z, \n" +
    "aussi bien en tant que chef de projet qu’en tant que \n" +
    "développeur. ",
    '“ Même avec le meilleur produit, le client partira \n' +
    'si le site web n’est pas unique. ”',
    "La création d’EPI STUDIO m’a appris à collaborer en \n" +
    "équipe, à gérer des projets et à savoir repèrer les \n" +
    "problèmes avec les projets et commandes. "
]

export default function BackgroundModale() {
    return (
        <div className={"flex flex-col items-center md:items-start md:w-[100%] md:ml-6 "}>
            <div className={"flex flex-row items-center mb-3"}>
                <div className={"bg-main p-2 border shadow-small"}><UserCog color="#ffffff" className={"md:w-20 md:h-20"}/></div>

                <h1 className={"ml-4 text-white font-extrabold text-2xl md:text-6xl"}>TECHNICAL LEADER</h1>
            </div>

            <div className={"border-3 shadow-small bg-white w-73 mb-5 *:ml-3 *:w-65 py-5 md:w-[80%] md:*:w-[90%] md:*:text-2xl md:mt-10 clicanim"}>
                <p className={"font-semibold"}>
                    {texts[0]}
                </p>
                <p className={"border-l-main border-l-3 pl-3 bg-black/10 my-3"}> {texts[1]}</p>
                <p className={"font-semibold"}>{texts[2]}</p>
            </div>


        </div>
    )
}