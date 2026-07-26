import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

interface ContactCardProps {
     icon: string
     href: string
     type: string
     text: string
}

export default function Contactbtn({ icon, href, type, text }: ContactCardProps) {
     return (
          <>
               <Link href={href} target={"_blank"} rel={"noopener noreferrer"}>
                    <div className="flex gap-4 p-4 lg:p-8 contactDiv items-center">
                         <div className="border-2 shadow-small p-2">
                              <Image
                                   src={`/icons/${icon}`}
                                   alt={text}
                                   height={30}
                                   width={30}
                                   className="w-7.5 h-7.5 lg:w-12.5 lg:h-12.5"
                              />
                         </div>
                         <div className="flex flex-col gap-0 flex-1 min-w-0">
                              <p className="text-main opacity-50 font-semibold lg:text-2xl">{type}</p>
                              <p className="text-main font-bold text-lg truncate lg:text-4xl">{text}</p>
                         </div>
                         <MdArrowOutward size={30} className="opacity-50 w-7.5 h-7.5 lg:w-12.5 lg:h-12.5" />
                    </div>
               </Link>
          </>
     )
}
