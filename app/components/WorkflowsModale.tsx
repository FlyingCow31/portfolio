import {Bot, BrainCircuit, FastForward, Focus} from "lucide-react";


const texts = [
    "Grâce à l’IA, les tâches \n" +
    "répétitives sont 3x plus \n" +
    "rapides à itérer.",
    "Les tâches impliquant de \n" +
    "la logique sont toujours \n" +
    "codées par une main \n" +
    "humaine par sécurité.",
    "L’IA est utilisée pour augmenter\n" +
    "ma productivité, pas pour\n" +
    "remplacer le plaisir que je \n" +
    "prends à coder !"
]
const tags = [
    "Claude Code",
    "Perplexity",
    "Github Copilot"
]
export default function WorkflowsModale() {
    return (

            <div className={"flex flex-col items-center w-[90%] md:w-[100%]"}>
                <div className={"flex flex-row items-center mb-3 md:self-start"}>
                    <div className={"bg-main p-2 border shadow-small ml-3"}><BrainCircuit color="#ffffff" className={"md:h-14 md:w-14"}/></div>

                    <h1 className={"ml-3 text-white font-extrabold text-2xl md:text-5xl"}>Workflows augmentés à l&#39;IA</h1>
                </div>

                <div className={"md:grid-cols-2 md:grid-rows-2 md:grid md:gap-6 md:px-3 md:mt-6"}>

                    <div className={"bg-white w-full border shadow-small mb-3 md:row-end-1"}>
                        <div className={"flex gap-2 ml-3 pt-3 items-center"}>
                            <span className={"bg-main p-1 border"}><FastForward color="#ffffff" className={"md:w-12 md:h-12"}/></span>
                            <p className={"font-bold text-xl md:text-4xl"}>Rapidité</p>
                        </div>

                        <p className={"ml-3 mt-3 pb-3 font-semibold opacity-50"}>{texts[0]}</p>
                    </div>

                    <div className={"bg-white w-full border shadow-small mb-3 md:row-span-1"}>
                        <div className={"flex gap-2 ml-3 pt-3 items-center"}>
                            <span className={"bg-main p-1 border"}><Focus color="#ffffff" className={"md:w-12 md:h-12"}/></span>
                            <p className={"font-bold text-xl md:text-4xl"}>Focus</p>
                        </div>
                        <p className={"ml-3 mt-3 pb-3  font-semibold opacity-50"}>{texts[1]}</p>
                    </div>

                    <div className={"bg-white w-full border shadow-small mb-3 md:row-end-1 md:row-span-2"}>
                        <div className={"flex gap-2 ml-3 pt-3 items-center"}>
                            <span className={"bg-main p-1 border"}><Bot color="#ffffff" className={"md:w-12 md:h-12"}/></span>
                            <p className={"font-bold text-xl text-main md:text-4xl"}>L&#39;IA et moi</p>
                        </div>
                        <p className={"ml-3 mt-3 pb-3  font-semibold opacity-50"}>{texts[2]}</p>
                        <div className={"flex flex-col"}>
                            <h1 className={"ml-3 font-bold text-main text-2xl md:text-3xl"}>Ma stack IA</h1>
                            <hr className={"w-60 ml-3 border-2"}/>
                            <div className={"flex flex-wrap ml-3 gap-3 pb-6 mt-3"}>
                                {tags.map((tag) => {
                                    return (
                                        <div key={tag} className={"p-2 border shadow-secbig bg-black"}>
                                            <p className={"text-white"}>{tag}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    )
}