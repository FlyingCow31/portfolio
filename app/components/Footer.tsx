import Link from "next/link"

interface ClassProps {
     classname?: string
}
export default function Footer({ classname }: ClassProps) {
     return (
          <div
               className={`flex flex-col md:flex-row pb-90 px-6 gap-3 pt-3 bg-white border-t-3 ${classname} md:gap-10 h-20 text-xl items-center justify-start md:pb-6 md:p-6 md:pt-6`}
          >
               <Link href={"/contact"} className="ml-3">
                    <p className={"ctahover opacity-50"}>Contact</p>
               </Link>
               <Link href={"https://github.com/FlyingCow31"} target="_blank" rel="noopener noreferrer">
                    <p className={"ctahover opacity-50"}>Github</p>
               </Link>
               <Link
                    href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"}
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <p className={"ctahover opacity-50"}>Linkedin</p>
               </Link>
               <Link href={"/mentions"}>
                    <p className={"ctahover opacity-50"}>Mentions Légales</p>
               </Link>
               <Link href={"/cgv"}>
                    <p className={"ctahover opacity-50"}>CGV</p>
               </Link>

               <p className={"opacity-50 ml-auto mr-10"}>© 2026 Gaël Tournier</p>
          </div>
     )
}
