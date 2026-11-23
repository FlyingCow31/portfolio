"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import type { ProjectImage } from "@/lib/data"

interface HeroProps {
     type: string
     scale: string
     title: string
     desc: string
     icon?: ProjectImage
}

interface FeaturesProps {
     title: string
     desc: string
}
interface TechnoProps {
     title: string
     desc: string
     tags: string[]
}

export function ProjectImageCarousel({ images }: { images: ProjectImage[] }) {
     const [activeIndex, setActiveIndex] = useState(0)

     useEffect(() => {
          if (images.length < 2) {
               return
          }

          const intervalId = window.setInterval(() => {
               setActiveIndex((index) => (index + 1) % images.length)
          }, 5000)

          return () => window.clearInterval(intervalId)
     }, [images.length])

     const image = images[activeIndex]

     if (!image) {
          return null
     }

     return (
          <div className="flex flex-col items-center gap-4">
               <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    priority={activeIndex === 0}
                    className="border-3 border-black shadow-small"
               />
               {images.length > 1 && (
                    <div className="flex gap-2" role="group" aria-label="Sélectionner une image">
                         {images.map((item, index) => (
                              <button
                                   key={item.src}
                                   type="button"
                                   aria-label={`Afficher l'image ${index + 1}`}
                                   aria-pressed={index === activeIndex}
                                   onClick={() => setActiveIndex(index)}
                                   className={`h-4 w-4 rounded-full border-2 border-black ${
                                        index === activeIndex ? "bg-black" : "bg-white"
                                   }`}
                              />
                         ))}
                    </div>
               )}
          </div>
     )
}

export function HeroProject({ type, scale, title, desc, icon }: HeroProps) {
     return (
          <motion.div
               initial={{ opacity: 1, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="flex flex-col w-[90%] self-center p-4 border-3 text-black shadow-big bg-white lg:w-[50%] lg:mr-auto lg:ml-24 lg:flex-row lg:items-center lg:gap-4"
          >
               {icon && (
                    <div className="w-fit h-fit shrink-0 bg-sec border-2 shadow-small p-3 mb-3">
                         <Image
                              src={icon.src}
                              height={icon.height}
                              width={icon.width}
                              alt={icon.alt}
                              className="h-32 w-32 object-contain"
                              unoptimized
                         />
                    </div>
               )}
               <div>
                    <p className="opacity-70 text-xl lg:text-2xl">
                         {type} - {scale}
                    </p>
                    <h1 className="text-4xl font-bold lg:text-4xl break-all">{title}</h1>
                    <p className="text-2xl lg:text-3xl">{desc}</p>
               </div>
          </motion.div>
     )
}

export function FeatureDiv({ title, desc }: FeaturesProps) {
     return (
          <motion.div
               initial={{ opacity: 1, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="border-3 shadow-big lg:w-[60%]"
          >
               <div className="bg-bg border-b-3 p-3">
                    <p className="text-2xl font-bold lg:text-4xl">{title}</p>
               </div>
               <div className="bg-white p-3 text-xl lg:text-2xl">{desc}</div>
          </motion.div>
     )
}

export function TechnoDiv({ title, desc, tags }: TechnoProps) {
     return (
          <>
               <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-3 shadow-big mb-6 lg:w-[60%]"
               >
                    <div className="bg-bg border-b-3 p-3">
                         <p className="text-2xl font-bold lg:text-4xl">{title}</p>
                    </div>
                    <div className="bg-white p-3 text-xl lg:text-2xl">{desc}</div>
               </motion.div>
               <div className="flex gap-3 flex-wrap">
                    {tags.map((tag, index) => {
                         return (
                              <motion.div
                                   initial={{ opacity: 1, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6, delay: index * 0.1 }}
                                   viewport={{ once: true }}
                                   key={index}
                                   className="border-2 shadow-small px-4 py-1 lg:text-2xl font-bold"
                              >
                                   <p>{tag}</p>
                              </motion.div>
                         )
                    })}
               </div>
          </>
     )
}
