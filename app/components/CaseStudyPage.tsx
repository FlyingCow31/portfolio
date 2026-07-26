"use client"
import { motion } from "framer-motion"
import { Lightbulb, Zap } from "lucide-react"
import Image from "next/image"

interface ProjectProps {
     type: string
     title: string
     desc: string
     tags: string[]
}
interface ProblemedivProps {
     challenge?: React.ReactNode // Formater comme ça: <>Texte, <span>texte</span>.</>
     solution?: React.ReactNode
}
interface StatsProps {
     Main: string
     Sec: string
}
interface GalerieProps {
     image: string
     title: string
     desc: string
}
interface StackCardProps {
     title: string
     items: stackItem[]
     color: string
}
interface stackItem {
     title: string
     desc: string
}

export function HeroProjet({ type, title, desc, tags }: ProjectProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="border-3 shadow-big bg-main text-white w-[90%] p-6 border-black lg:w-[50%] lg:mr-auto lg:ml-24"
          >
               <p className="text-2xl opacity-30">Case Study - {type}</p>
               <hr className="opacity-30 w-70 mb-6 mt-2 border-2" />
               <h2 className="font-black text-4xl mb-3 lg:text-6xl">{title}</h2>
               <h1 className="text-xl mb-6 lg:text-2xl lg:font-semibold">{desc}</h1>
               <div className="flex gap-3 flex-wrap">
                    {tags.map((tag, index) => {
                         return (
                              <div
                                   key={index}
                                   className={`${index < 1 ? "bg-sec" : "bg-white"} text-black font-semibold px-3 border-2 shadow-small w-fit lg:text-xl`}
                              >
                                   <p>{tag}</p>
                              </div>
                         )
                    })}
               </div>
          </motion.div>
     )
}

export function ChallengeDiv({ challenge }: Pick<ProblemedivProps, "challenge">) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="border-2 shadow-big flex flex-col gap-0 text-black lg:flex-1"
          >
               <div className="bg-colerr  text-3xl font-bold border-b-2 p-3 flex gap-3 items-center">
                    <Zap size={40} color="#000000" />
                    <h2>Le Challenge</h2>
               </div>
               <div className="bg-white p-3 text-xl ">
                    <p>{challenge}</p>
               </div>
          </motion.div>
     )
}
export function SolutionDiv({ solution }: Pick<ProblemedivProps, "solution">) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="border-2 shadow-big flex flex-col gap-0 text-black lg:flex-1"
          >
               <div className="bg-colsol text-3xl font-bold border-b-2 p-3 flex gap-3 items-center">
                    <Lightbulb size={40} color="#000000" />
                    <h2>La Solution</h2>
               </div>
               <div className="bg-white p-3 text-xl ">
                    <p>{solution}</p>
               </div>
          </motion.div>
     )
}

export function StatsDiv({ Main, Sec }: StatsProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               viewport={{ once: true }}
               className="w-full bg-black flex flex-col items-center text-white py-2"
          >
               <h2 className="italic text-2xl">{Main}</h2>
               <p className="opacity-50">{Sec}</p>
          </motion.div>
     )
}

export function GalerieView({ image, title, desc }: GalerieProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="flex flex-col gap-0 border-4 shadow-big lg:flex-row"
          >
               <div className="casestudyborder bg-bg p-3 flex flex-col items-center lg:flex-1">
                    <div className="border-2 shadow-small">
                         <Image height={1000} width={1000} alt={title} src={image} />
                    </div>
               </div>
               <div className="p-4 bg-white lg:flex flex-col lg:justify-center lg:flex-1">
                    <h2 className="text-2xl font-semibold lg:text-5xl lg:font-bold">{title}</h2>
                    <hr className="border-2 border-main w-40 my-3" />
                    <p className="text-xl lg:text-2xl lg:font-semibold">{desc}</p>
               </div>
          </motion.div>
     )
}

export function StackCard({ title, items, color }: StackCardProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="border-2 shadow-small flex-1"
          >
               <div className="p-4 border-b-2 text-3xl font-bold lg:text-4xl" style={{ backgroundColor: color }}>
                    {title}
               </div>
               <div className="p-4 bg-white">
                    {items.map((item, index) => {
                         return (
                              <div key={index} className="text-black">
                                   <h2
                                        className="font-semibold underline decoration-3 text-2xl lg:text-3xl"
                                        style={{ textDecorationColor: color }}
                                   >
                                        {item.title}
                                   </h2>
                                   <p className="opacity-50 text-xl lg:text-2xl">{item.desc}</p>
                              </div>
                         )
                    })}
               </div>
          </motion.div>
     )
}
