import Link from "next/link"

interface ClassProps {
     classname?: string
}
export default function Footer({ classname }: ClassProps) {
     return (
          <div
               className={`hidden md:flex bg-white border-t-3 ${classname} gap-10 h-20 text-xl items-center justify-start p-6`}
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

               <p className={"opacity-50 ml-auto mr-10"}>© 2026 Gaël Tournier</p>
          </div>
     )
}
