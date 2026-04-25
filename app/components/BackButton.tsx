"use client"
import { motion } from "framer-motion";
import Link from "next/link";

interface BackButtonProps {
    href: string,
    pc?: boolean
}


export default function BackButton({href, pc}: BackButtonProps) {
    return (
        <Link href={`${href}`} className={`absolute top-3 left-3 z-10 ${pc ? "md:static mt-10 self-start ml-40" : ""}`}>
            <motion.div
                whileHover={{ x: 7, y: 10, boxShadow: "1px 1px 0px rgba(0,0,0,1)", opacity: 1, transition: { duration: 0.1, ease: "easeOut" } } }
                className={"bg-white border-3 shadow-small p-3 opacity-50"}>
                <p className={"text-xl font-extrabold"}>← Projets</p>
            </motion.div>
        </Link>
    )
}