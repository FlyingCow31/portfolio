import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

interface IndexProjetProps {
     title: string
     type: string
     desc: string
     tag: string
     icon?: string
     color?: string
     href: string
}
export function IndexProjectDiv({ title, type, desc, tag, icon, color = "main", href }: IndexProjetProps) {
     return (
          <Link href={`${href}`} className="flex-1">
               <div className={`relative bg-${color} shadow-click-small flex flex-col p-4 text-white h-full`}>
                    <p className="text-white text-xl font-bold opacity-60">{type}</p>
                    <div className="flex gap-3 items-center">
                         {icon && <Image src={icon} alt={title} height={50} width={50} />}
                         <h2 className="font-black text-4xl">{title}</h2>
                    </div>
                    <p className="opacity-60 text-lg mb-6">{desc}</p>
                    <p className="ml-auto text-2xl font-bold opacity-60 ctahover">Découvrir →</p>
                    <p className="absolute -top-5 right-10 border-2 bg-white shadow-small px-3 py-1 text-black font-bold">
                         {tag}
                    </p>
               </div>
          </Link>
     )
}
