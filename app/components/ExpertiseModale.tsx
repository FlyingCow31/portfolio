import { Telescope, Wrench } from "lucide-react"

const texts = [
     "J'utilise des technologies modernes (Next.JS, React, Tailwind) pour produire\n" +
          "un code performant.\n" +
          "J'accorde une attention particulière à \n" +
          "l'optimisation, à la sécurité des données\n" +
          "et à la partie légale de vos projets.\n" +
          "Workflows augmentés par l'IA.",
     "Grâce à mon experience de chef de projet, je comprends vos besoins et\n" +
          "votre environnement sans même coder. Je priorise ce dont vous avez besoin,\n" +
          "pas ce qui vous sera inutile.",
]

const expertise = [
     {
          image: <Wrench color={"white"} />,
          emojis: <Wrench height={70} width={70} opacity={0.1} />,
          name: "Ingénierie",
          text: texts[0],
          tags: ["FULLSTACK", "TYPESCRIPT", "NEXT.JS", "NODE.JS"],
     },
     {
          image: <Telescope color={"white"} />,
          emojis: <Telescope height={70} width={70} opacity={0.1} />,
          name: "Vision",
          text: texts[1],
          tags: ["ROI", "EQUIPES", "VISION", "PRIORISATION"],
     },
]

export default function ExpertiseModale() {
     return (
          <>
               {expertise.map((item) => {
                    return (
                         <div
                              key={item.name}
                              className={"relative bg-white border-3 border-black shadow-small w-[90%] mb-3"}
                         >
                              <div className={"bg-main w-fit p-3 border shadow-small mt-3 ml-3"}>{item.image}</div>

                              <div className={"absolute right-5 top-10"}>{item.emojis}</div>
                              <h1 className={"text-5xl font-black ml-3 mt-3 md:text-5xl font-title"}>{item.name}</h1>
                              <p className={"ml-3 mt-3 md:text-xl"}>{item.text}</p>

                              <div className={"flex flex-wrap gap-3 ml-3 mt-3 pb-10"}>
                                   {item.tags.map((tag) => (
                                        <div
                                             key={tag}
                                             className={
                                                  "font-title font-bold border border-black shadow-small bg-sec w-fit p-2 md:text-xl"
                                             }
                                        >
                                             <p>{tag}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    )
               })}
          </>
     )
}
