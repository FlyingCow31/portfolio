"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface SolutionDivProps {
     icone: React.ReactNode
     title: string
     description: string
     upTag: { title: string }[]
     cta: string
     delay: number
     range?: boolean
     price?: number
     list?: { text: string; green?: boolean }[]
}

export default function SolutionDiv({
     icone,
     title,
     description,
     upTag,
     cta,
     delay,
     range = true,
     price,
     list,
}: SolutionDivProps) {
     return (
          <Link href={"/contact"} className="clicanim block w-full h-full">
               <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay }}
                    viewport={{ once: true }}
                    className="relative bg-white border-3 shadow-big w-full h-full flex flex-col"
               >
                    <div className={"bg-main border-3 shadow-small w-fit p-2 m-3 mt-6 "}>{icone}</div>

                    <p className={"m-3 font-extrabold text-2xl text-black md:text-4xl font-title"}>{title}</p>

                    <p className={"m-3 text-black opacity-100 text-sm md:text-xl font-semibold"}>{description}</p>
                    {list && (
                         <p className="mx-3 mb-0 text-sm md:text-xl font-black underline decoration-main decoration-2">
                              Package
                         </p>
                    )}

                    <ul className="m-3 mt-0 text-sm md:text-xl">
                         {list?.map((item, i) => (
                              <li key={i} className="flex items-baseline gap-2">
                                   <span
                                        className={`mt-1 ${item.green ? "text-colsol" : "text-main"}`}
                                        aria-hidden="true"
                                   >
                                        ✦
                                   </span>
                                   <span className={`${item.green ? "text-[#155823]" : "text-black"} font-semibold`}>
                                        {item.text}
                                   </span>
                              </li>
                         ))}
                    </ul>
                    <hr className={"ml-3 border-2 border-main w-60 opacity-50 mt-6 md:w-80"} />

                    <div className="m-3 mt-auto">
                         {price ? range && <p className="font-bold opacity-50 italic text-2xl">À partir de</p> : ""}
                         <p className="font-bold text-4xl text-testRed">
                              {price ? `${price} €` : "Sur devis"}
                              {!range && (
                                   <span className="font-semibold text-2xl text-[#0a090c] opacity-50 italic">
                                        {" "}
                                        par jour
                                   </span>
                              )}
                         </p>
                    </div>

                    <div className={"absolute -top-4 right-2 flex flex-wrap justify-end gap-2"}>
                         {upTag.map((tag, index) => {
                              return (
                                   <p
                                        key={index}
                                        className={`font-extrabold bg-sec border-3 shadow-small w-fit px-3 md:text-xl`}
                                   >
                                        {tag.title}
                                   </p>
                              )
                         })}
                    </div>

                    <div
                         className={
                              "ml-auto mr-3 mt-auto mb-3 w-fit flex items-center border-3 border-black bg-main px-4 py-1 text-white shadow-small hover-btn-dark"
                         }
                    >
                         <p className={"font-title text-center font-bold"}>{cta + " →"}</p>
                    </div>
               </motion.div>
          </Link>
     )
}
