import { Quote, UserCog } from "lucide-react"

const text =
     "Grâce à mon experience dans de nombreux projets, \n" +
     "j'ai aquéri une capacité à mener un projet de A à Z, \n" +
     "aussi bien en tant que chef de projet qu'en tant que \n" +
     "développeur. " +
     "La création d'EPI STUDIO m'a appris à collaborer en \n" +
     "équipe, à gérer des projets et à savoir repèrer les \n" +
     "problèmes avec les projets et commandes. "

export default function BackgroundModale() {
     return (
          <div className={"flex flex-col items-center gap-6 my-12 lg:flex-row lg:w-[90%] lg:self-center lg:h-full"}>
               <div className={"border-3 shadow-small bg-main w-[90%] p-6"}>
                    <div className={"flex flex-row items-center mb-3 gap-3"}>
                         <div className={"bg-white p-2 border-2 shadow-small"}>
                              <UserCog color="#000000" width={40} height={40} className={"md:w-20 md:h-20"} />
                         </div>

                         <h1 className={" text-white font-extrabold text-4xl md:text-6xl font-title"}>
                              TECHNICAL LEADER
                         </h1>
                    </div>
                    <p className={"font-semibold text-white text-xl lg:text-2xl"}>{text}</p>
               </div>

               <div className="border-3 shadow-small bg-white w-[90%] p-6 lg:h-full">
                    <Quote size={70} />
                    <h2 className="font-black text-4xl leading-snug mt-3 lg:text-5xl">
                         Même avec le meilleur produit, le client partira si le site web n'est pas unique.
                    </h2>
                    <hr className="w-30 border-2 border-main mt-3 lg:w-40" />
               </div>
          </div>
     )
}
