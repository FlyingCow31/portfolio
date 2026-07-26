"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
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
               <div className={"bg-white shadow-click-big p-3"}>
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
               </div>
          </Link>
     )
}
export function CTAContact() {
     return (
          <Link href={"/portfolio"} className="block w-[90%]">
               <div className={"bg-black border-3 shadow-click-big-main p-3"}>
                    <div className="bg-main shadow-click-big w-fit p-1 m-3">
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
               </div>
          </Link>
     )
}

export function CTAFinPage({ text, ctatext }: CTAFinPageProps) {
     return (
          <div className="bg-sec p-3 border-3 shadow-big flex flex-col gap-6 w-[90%]">
               <h2 className="text-3xl font-black lg:text-6xl lg:m-6 lg:mb-0">{text}</h2>
               <Link href={"/contact"}>
                    <div className="shadow-click-small bg-main p-3 lg:w-fit lg:m-6 lg:mt-0">
                         <p className="text-white font-black text-l lg:text-3xl ">{ctatext} →</p>
                    </div>
               </Link>
          </div>
     )
}

export function CTAVotreProjet() {
     return (
          <Link href={"/contact"} className="flex-1 lg:h-fit">
               <div className="shadow-click-big-main bg-black text-white p-6 lg:h-full">
                    <Plus color="#ffffff" size={70} />
                    <h2 className="text-4xl font-black my-3 lg:text-6xl">
                         VOTRE <br />
                         PROJET ICI?
                    </h2>
                    <p className="opacity-70 text-xl mb-3 lg:text-4xl">
                         Le prochain case study, c'est peut-être le vôtre. Discutons-en.
                    </p>

                    <p className="text-sec text-2xl font-bold ctahover lg:text-5xl">Parlons-en →</p>
               </div>
          </Link>
     )
}
