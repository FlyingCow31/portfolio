"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LiaBriefcaseSolid } from "react-icons/lia"
import { PiChat } from "react-icons/pi"

interface CTAFinPageProps {
     text: string
     ctatext: string
}

export function CTAProjets() {
     return (
          <Link href={"/portfolio"} className="block w-[90%]">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                         x: 4,
                         y: 6,
                         boxShadow: "1px 1px 0px rgba(0,0,0,1)",
                         transition: { duration: 0.1, ease: "easeOut" },
                    }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={"bg-white border-3 shadow-big p-3"}
               >
                    <div className="bg-sec shadow-small w-fit p-1 border-2 m-3">
                         <LiaBriefcaseSolid color="#000000" size={40} />
                    </div>
                    <div className="ml-3">
                         <h2 className="text-main font-black text-4xl mb-3">
                              PROJETS <br /> CONCRETS
                         </h2>
                         <p className="text-sec font-semibold text-xl mb-3">
                              Regardez ce que ça donne en vrai: mes case studies et réalisations.
                              <br /> Plus de projets sur Github.
                         </p>
                         <p className="ctahover text-main font-bold">Voir mon portfolio →</p>
                    </div>
               </motion.div>
          </Link>
     )
}
export function CTAContact() {
     return (
          <Link href={"/portfolio"} className="block w-[90%]">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                         x: 4,
                         y: 6,
                         boxShadow: "1px 1px 0px rgba(0,0,0,1)",
                         transition: { duration: 0.1, ease: "easeOut" },
                    }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={"bg-black border-3 shadow-secbig p-3"}
               >
                    <div className="bg-main shadow-small w-fit p-1 border-2 m-3">
                         <PiChat color="#ffffff" size={40} />
                    </div>
                    <div className="ml-3">
                         <h2 className="text-white font-black text-4xl mb-3">
                              UN PROBLÈME <br /> À RÉSOUDRE ?
                         </h2>
                         <p className="text-white opacity-70 font-semibold text-xl mb-3">
                              30 minutes, sans engagement. Votre projet gagne une vision concrète, pas un devis vide de
                              sens.
                         </p>
                         <p className="ctahover text-main font-bold">Discutons-en →</p>
                    </div>
               </motion.div>
          </Link>
     )
}

export function CTAFinPage({ text, ctatext }: CTAFinPageProps) {
     return (
          <div className="bg-sec p-3 border-3 shadow-big flex flex-col gap-6 w-[90%]">
               <h2 className="text-3xl font-black lg:text-6xl lg:m-6 lg:mb-0">{text}</h2>
               <Link href={"/contact"}>
                    <motion.div
                         whileHover={{
                              x: 4,
                              y: 6,
                              boxShadow: "1px 1px 0px rgba(0,0,0,1)",
                              transition: { duration: 0.1, ease: "easeOut" },
                         }}
                         className="shadow-small border-2 bg-main p-3 lg:w-fit lg:m-6 lg:mt-0"
                    >
                         <p className="text-white font-black text-l lg:text-3xl ">{ctatext} →</p>
                    </motion.div>
               </Link>
          </div>
     )
}
