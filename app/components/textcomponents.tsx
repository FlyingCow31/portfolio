"use client"
import { motion } from "framer-motion"
interface Props {
     text: string
     title: string
}

interface HRProps {
     number: string
     text: string
}

interface BoxProps {
     bigText: string
     smallText: string
     color: string
     textCol?: string
}

export function MainTitle({ text, title }: Props) {
     return (
          <div className="flex flex-col gap-3 m-3 lg:flex-row lg:items-center lg:gap-12 lg:mt-12">
               <div className="bg-black px-6 py-1 w-fit lg:self-end" style={{ transform: "rotate(-3deg)" }}>
                    <p className="text-white font-bold text-xl lg:text-4xl">{text}</p>
               </div>
               <h2 className={"text-5xl font-black font-title lg:text-9xl"}>{title}</h2>
          </div>
     )
}
export function SectionHR({ number, text }: HRProps) {
     return (
          <div className="flex items-center gap-3 ml-3">
               <p className="text-white font-black bg-black p-1 px-2 text-xl lg:text-4xl">{number}</p>
               <h2 className="w-fit font-black text-xl md:text-4xl lg:text-6xl whitespace-nowrap">{text}</h2>
               <hr className="border-2 border-black w-50 md:w-70 lg:w-[70%] lg:ml-3 max-w-[60%]" />
          </div>
     )
}

export function BoxStats({ bigText, smallText, color, textCol = "black" }: BoxProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className={`bg-${color} text-${textCol} p-3 border-2 shadow-small border-black w-[80%] md:w-[90%]`}
          >
               <h2 className="text-4xl font-black">{bigText}</h2>
               <p>{smallText}</p>
          </motion.div>
     )
}

export function TitleDivProject({ text }: { text: string }) {
     return (
          <h2 className="underline decoration-3 decoration-main underline-offset-7 text-3xl font-semibold mb-6 lg:text-4xl">
               {text}
          </h2>
     )
}
