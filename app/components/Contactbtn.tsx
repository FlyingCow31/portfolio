"use client"
import Link from "next/link";
import Image from "next/image";
import {MousePointerClick} from "lucide-react";
import {motion} from "framer-motion"

interface ContactCardProps {
    icon: string,
    href: string,
    text: string,
    delay: number
}

export default function Contactbtn({ icon, href, text, delay }: ContactCardProps){
    return(
        <>
            <Link href={href} target={"_blank"}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 7, y: 10, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                    transition={{ duration: 0.6, delay}}
                    viewport={{ once: true }}
                    className={"w-80 border-2 shadow-small bg-white flex flex-row gap-1 p-3 items-center md:w-[90%] lg:w-[50%]"}>
                    <Image src={icon} alt="icon" width={40} height={40} className="w-10 h-10 md:w-18 md:h-18"/>
                    <p className={"font-title flex-1 text-main text-left ml-1 font-bold text-l w-auto h-auto md:text-3xl"}>{text}</p>
                    <MousePointerClick color="#000000" height={32} width={32} className="opacity-25 w-10 h-10 md:w-14 md:h-14"/>
                </motion.div>
            </Link>
        </>
    );
}