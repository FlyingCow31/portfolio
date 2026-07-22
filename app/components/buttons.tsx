"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Props {
     text: string
     textcol: string
     color?: string
     href: string
     classname?: string
}

export function ButtonCTA({ text, color, href, textcol, classname }: Props) {
     return (
          <Link href={`/${href}`}>
               <motion.div
                    whileHover={{
                         x: 4,
                         y: 6,
                         boxShadow: "1px 1px 0px rgba(0,0,0,1)",
                         transition: { duration: 0.1, ease: "easeOut" },
                    }}
                    transition={{ duration: 0.6 }}
                    className={`bg-${color} ${classname} py-2 px-4 shadow-small border-black border-2 w-fit`}
               >
                    <p className={`text-${textcol} font-semibold`}>{text + "→"}</p>
               </motion.div>
          </Link>
     )
}
