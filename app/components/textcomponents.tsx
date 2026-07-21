interface Props {
     text: string
     title: string
}

interface HRProps {
     number: string
     text: string
}

export function MainTitle({ text, title }: Props) {
     return (
          <div className="flex flex-col gap-3 m-3 lg:flex-row lg:items-center lg:gap-12 lg:mt-12">
               <div className="bg-black px-6 py-1 w-fit lg:self-end" style={{ transform: "rotate(-3deg)" }}>
                    <p className="text-white font-bold text-xl lg:text-4xl">{text}</p>
               </div>
               <h2 className={"text-6xl font-black font-title lg:text-9xl"}>{title}</h2>
          </div>
     )
}
export function SectionHR({ number, text }: HRProps) {
     return (
          <div className="flex items-center gap-3 ml-3">
               <p className="text-white font-black bg-black p-1 px-2 text-xl">{number}</p>
               <h2 className="w-fit font-black text-xl md:text-4xl lg:text-6xl">{text}</h2>
               <hr className="border-2 border-black w-50 md:w-70 lg:w-[70%] lg:ml-3" />
          </div>
     )
}
