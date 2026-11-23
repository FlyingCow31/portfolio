import Image from "next/image"
import Link from "next/link"
import { ProjectData } from "@/lib/data"

interface CaseStudiesProps {
     type: string
     title: string
     desc: string
     tags: string[]
     ctatitle: string
     ctahref: string
     image: string
}

interface ProjectProps {
     type: string
     title: string
     desc?: string
     description?: string
     tags: string[]
     slug?: string
     ctatitle?: string
     ctahref?: string
     iconhref?: string
     iconalt?: string
     icon?: ProjectData["icon"]
}

export function CaseStudy({
     type,
     title,
     description: desc,
     tags,
     slug,
     images: [{ src: image }],
     ctatitle = `Découvrir le case study ${title}`,
     ctahref = `/portfolio/case-study/${slug}`,
}: ProjectData & { ctatitle?: string; ctahref?: string }) {
     return (
          <div className="flex flex-col relative shadow-click-big lg:flex-row">
               <div className="bg-main text-white p-4 casestudyborder lg:w-[60%] lg:p-8 ">
                    <p className="font-bold opacity-50 text-2xl lg:text-4xl">{type}</p>
                    <h2 className="font-black text-4xl lg:text-8xl">{title}</h2>
                    <p className="font-light opacity-70 text-xl my-3 lg:text-3xl lg:whitespace-break-spaces">{desc}</p>
                    <div className="flex flex-wrap gap-3">
                         {tags.map((tag, index) => {
                              return (
                                   <div
                                        key={index}
                                        className="bg-white text-black border shadow-small px-3 font-semibold lg:text-2xl"
                                   >
                                        <p>{tag}</p>
                                   </div>
                              )
                         })}
                    </div>
                    <Link href={ctahref ?? `/portfolio/case-study/${slug}`}>
                         <p className="text-2xl ctahover font-bold my-6 lg:text-4xl w-fit">
                              {ctatitle ?? `Découvrir le case study ${title}`} →
                         </p>
                    </Link>
               </div>
               <div className="flex flex-col items-center justify-center w-full p-6 lg:flex-1">
                    <Image
                         src={image}
                         alt={title}
                         height={640}
                         width={640}
                         className="border-2 border-black shadow-small"
                    />
               </div>
               <div className="absolute -top-5 right-10 bg-white shadow-small px-3 w-fit border-2 lg:text-3xl lg:-top-8">
                    <p className="font-bold">CASE STUDY</p>
               </div>
          </div>
     )
}

export function ProjectDiv(props: ProjectProps) {
     const { type, title, tags } = props
     const desc = props.desc ?? props.description ?? ""
     const ctatitle = props.ctatitle ?? `Découvrir le projet ${title}`
     const ctahref = props.ctahref ?? (props.slug ? `/portfolio/projects/${props.slug}` : "/portfolio")
     const iconhref = props.iconhref ?? props.icon?.src
     const iconalt = props.iconalt ?? props.icon?.alt ?? `Icone du projet ${title}`

     return (
          <div className="bg-white p-5 relative text-main shadow-click-big lg:p-8 flex-1 lg:basis-[calc(50%-12px)]">
               <div className="absolute -top-5 right-5 bg-main shadow-small px-3 py-1 w-fit border-2 border-black text-white lg:text-4xl">
                    <p className="font-bold">NEW</p>
               </div>
               <div className="flex gap-3 lg:gap-6">
                    {iconhref && (
                         <div className="p-3 border-2 shadow-small border-black bg-sec w-16 lg:w-32 h-16 lg:h-32 flex items-center justify-center shrink-0">
                              <Image
                                   src={iconhref}
                                   alt={iconalt}
                                   width={props.icon?.width ?? 40}
                                   height={props.icon?.height ?? 40}
                                   className="w-10 h-10 object-contain lg:w-20 lg:h-20"
                                   unoptimized
                              />
                         </div>
                    )}
                    <div>
                         <p className="text-2xl opacity-30 font-bold lg:text-4xl">{type}</p>
                         <h2 className="text-3xl font-black lg:text-6xl">{title}</h2>
                    </div>
               </div>
               <p className="font-light text-xl my-3 lg:text-3xl lg:my-6">{desc}</p>
               <div className="flex flex-wrap gap-3">
                    {tags.map((tag, index) => {
                         return (
                              <div
                                   key={index}
                                   className="bg-sec text-black border shadow-small px-3 py-1 font-semibold text-xl lg:text-2xl"
                              >
                                   <p>{tag}</p>
                              </div>
                         )
                    })}
               </div>
               <Link href={ctahref}>
                    <p className="text-2xl ctahover font-bold my-6 lg:text-4xl w-fit">{ctatitle} →</p>
               </Link>
          </div>
     )
}
