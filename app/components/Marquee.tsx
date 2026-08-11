interface MarqProps {
     words: string[]
}

export default function Marquee({ words }: MarqProps) {
     const line = words.join(" ✦ ") + " ✦ "
     return (
          <div className="marquee">
               <div className="marquee-track">
                    <p>{line}</p>
                    <p>{line}</p>
                    <p>{line}</p>
               </div>
          </div>
     )
}
