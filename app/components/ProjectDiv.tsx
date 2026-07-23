import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

export function IndexProjectDiv() {
     return (
          <div className={"bg-white border-3 w-[80%] mx-auto relative mt-3 shadow-small"}>
               <p className={"bg-sec absolute -top-3 -left-3 z-20 px-3 py-1 border-3 shadow-small"}>SITE WEB</p>
               <div className={"relative mt-6 border-b-3 pb-3"}>
                    <Image
                         src={"/epistudios/indexepi.png"}
                         alt={"Alt"}
                         width={270}
                         height={270}
                         className={"mx-auto"}
                    />
               </div>
               <div className={"p-6"}>
                    <h2 className={"titlecardproj ml-0!"}>EPISTUDIOS.FR</h2>
                    <p className={"mt-3 italic"}>Epistudio est un site pour un studio de jeux vidéos. </p>
                    <Link href={"/portfolio"}>
                         <MdArrowOutward size={50} className={"ml-auto"} />
                    </Link>
               </div>
          </div>
     )
}
