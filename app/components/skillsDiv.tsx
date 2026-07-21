import React from "react"

interface SkillsProps {
     icon: React.ReactNode
     title: string
     description: string
}

export default function SkillDiv({ icon, title, description }: SkillsProps) {
     return (
          <div className={"bg-white w-[80%] md:w-[98%] mx-auto md:mx-0 border-3 shadow-big p-6 md:flex md:gap-6"}>
               {icon}
               <div className="my-auto">
                    <h2 className={"font-black mt-3 text-2xl md:text-2xl"}>{title}</h2>
                    <p className={"mt-1 text-sm text-justify md:text-xl"}>{description}</p>
               </div>
          </div>
     )
}
