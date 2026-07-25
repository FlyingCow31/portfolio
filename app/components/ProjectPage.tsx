import Image from "next/image"

interface HeroProps {
     type: string
     scale: string
     title: string
     desc: string
     icon?: string
}

interface FeaturesProps {
     title: string
     desc: string
}
interface TechnoProps {
     title: string
     desc: string
     tags: string[]
}

export function HeroProject({ type, scale, title, desc, icon }: HeroProps) {
     return (
          <div className="flex flex-col w-[90%] self-center p-4 border-3 text-black shadow-big bg-white lg:w-[50%] lg:mr-auto lg:ml-24 lg:flex-row lg:items-center lg:gap-4">
               {icon && (
                    <div className="w-fit h-fit bg-sec border-2 shadow-small p-3 mb-3">
                         <Image src={`/${icon}`} height={80} width={80} alt={title} />
                    </div>
               )}
               <div>
                    <p className="opacity-70 text-xl lg:text-2xl">
                         {type} - {scale}
                    </p>
                    <h1 className="text-4xl font-bold lg:text-4xl">{title}</h1>
                    <p className="text-2xl lg:text-3xl">{desc}</p>
               </div>
          </div>
     )
}

export function FeatureDiv({ title, desc }: FeaturesProps) {
     return (
          <div className="border-3 shadow-big lg:w-[60%]">
               <div className="bg-bg border-b-3 p-3">
                    <p className="text-2xl font-bold lg:text-4xl">{title}</p>
               </div>
               <div className="bg-white p-3 text-xl lg:text-2xl">{desc}</div>
          </div>
     )
}

export function TechnoDiv({ title, desc, tags }: TechnoProps) {
     return (
          <>
               <div className="border-3 shadow-big mb-6 lg:w-[60%]">
                    <div className="bg-bg border-b-3 p-3">
                         <p className="text-2xl font-bold lg:text-4xl">{title}</p>
                    </div>
                    <div className="bg-white p-3 text-xl lg:text-2xl">{desc}</div>
               </div>
               <div className="flex gap-3">
                    {tags.map((tag, index) => {
                         return (
                              <div key={index} className="border-2 shadow-small px-4 py-1 lg:text-2xl font-bold">
                                   <p>{tag}</p>
                              </div>
                         )
                    })}
               </div>
          </>
     )
}
