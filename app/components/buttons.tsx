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
               <div className={`bg-${color} ${classname} py-2 px-4 shadow-click-small w-fit`}>
                    <p className={`text-${textcol} font-semibold lg:text-2xl`}>{text + "→"}</p>
               </div>
          </Link>
     )
}

export default function BackButton() {
     return (
          <Link href={`/portfolio`}>
               <div className="w-fit bg-white px-4 py-2 shadow-click-small m-6 text-2xl font-semibold lg:ml-24">
                    <p>{"← Projets"}</p>
               </div>
          </Link>
     )
}
