"use client"
import { motion } from "framer-motion"

interface ProcessProps {
     number: string
     title: string
     description: string
     delay: number
}

export default function ProcessDiv({ number, title, description, delay }: ProcessProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay }}
               viewport={{ once: true }}
               className={"p-3 bg-white border-3 shadow-small w-[90%] lg:w-full"}
          >
               <div className={"relative ml-3"}>
                    <p className={"absolute -top-3 right-0 font-extrabold text-8xl opacity-5"}>{number}</p>
                    <p className={"pt-3 font-extrabold text-4xl font-title"}>{title}</p>
               </div>

               <p className={"ml-3 mt-3 pb-3"}>{description}</p>
          </motion.div>
     )
}
