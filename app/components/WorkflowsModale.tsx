import { Bot, BrainCircuit, FastForward, Focus } from "lucide-react"

const texts = [
     "Grâce à l’IA, les tâches \n" + "répétitives sont 3x plus \n" + "rapides à itérer.",
     "Les tâches impliquant de \n" + "la logique sont toujours \n" + "codées par une main \n" + "humaine par sécurité.",
     "L’IA est utilisée pour augmenter\n" +
          "ma productivité, pas pour\n" +
          "remplacer le plaisir que je \n" +
          "prends à coder !",
]
const titles = ["Rapidité", "L'IA et moi", "Focus"]
const icons = [
     <FastForward color="#ffffff" size={40} className={"md:w-12 md:h-12"} />,
     <Focus color="#ffffff" className={"md:w-12 md:h-12"} />,
     <Bot color="#ffffff" className={"md:w-12 md:h-12"} />,
]
const tags = ["Claude Code", "Perplexity", "Github Copilot"]
export default function WorkflowsModale() {
     return (
          <>
               <div className="flex flex-col items-center self-center gap-6 w-[90%] my-12 lg:flex-row">
                    {texts.map((text, index) => {
                         return (
                              <div key={index} className="bg-white w-full p-5 border-3 shadow-big lg:h-full">
                                   <div className="flex gap-3 items-center">
                                        <div className="bg-main w-fit p-3 border-2 shadow-small">{icons[index]}</div>
                                        <h2 className="text-4xl font-black">{titles[index]}</h2>
                                   </div>

                                   <p className="mt-3 text-xl opacity-60">{text}</p>
                              </div>
                         )
                    })}
               </div>
               <div
                    className="bg-black w-[90%] self-center p-4 lg:flex lg:gap-6 lg:items-center"
                    style={{ boxShadow: "7px 10px 0px var(--color-main)" }}
               >
                    <h2 className="text-white text-4xl font-black mb-3 lg:mr-6">MA STACK IA</h2>
                    {tags.map((tag, index) => {
                         return (
                              <div
                                   key={index}
                                   className="bg-main border-3 text-white font-semibold text-xl mb-3 p-3 w-fit lg:px-6 lg:py-2"
                              >
                                   {tag}
                              </div>
                         )
                    })}
               </div>
          </>
     )
}
