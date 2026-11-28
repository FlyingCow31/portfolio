import Link from "next/link"
import { MdArrowOutward, MdStar } from "react-icons/md"
import { RiDoubleQuotesL } from "react-icons/ri"

const CODEUR_PROFILE = "https://www.codeur.com/-gaeltournier"

interface Testimonial {
     quote: string
     author: string
     company: string
     project: string
     rating: number
}

const testimonials: Testimonial[] = [
     {
          quote: "Je recommande vivement cette personne pour la création de mon site e-commerce dédié au printing ! Il a su être à l'écoute de mes besoins, comprendre mon projet et le concrétiser avec sérieux et professionnalisme.",
          author: "Mélissa",
          company: "Hell Coming",
          project: "SITE E-COMMERCE",
          rating: 5,
     },
]

function Stars({ rating }: { rating: number }) {
     return (
          <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
               {Array.from({ length: 5 }).map((_, i) => (
                    <MdStar
                         key={i}
                         size={22}
                         className={i < rating ? "text-black" : "text-black opacity-20"}
                         aria-hidden
                    />
               ))}
          </div>
     )
}

function TestimonialCard({ quote, author, company, project, rating }: Testimonial) {
     return (
          <figure className="relative flex flex-col bg-white text-black border-3 border-black shadow-big p-5 pt-7">
               <p className="absolute -top-5 right-6 border-2 border-black bg-white shadow-small px-3 py-1 text-sm font-bold">
                    {project}
               </p>

               <div className="flex items-center justify-between">
                    <RiDoubleQuotesL size={38} className="text-main" aria-hidden />
                    <Stars rating={rating} />
               </div>

               <blockquote className="mt-2 md:text-lg font-semibold leading-relaxed">« {quote} »</blockquote>

               <figcaption className="mt-4 flex items-center gap-3">
                    <span className="bg-black text-white font-black text-lg w-10 h-10 flex items-center justify-center shrink-0">
                         {author.charAt(0)}
                    </span>
                    <div className="leading-tight">
                         <p className="font-black text-lg font-title">{author}</p>
                         <p className="opacity-60 font-semibold text-sm">{company}</p>
                    </div>
               </figcaption>
          </figure>
     )
}

export default function Testimonials() {
     const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

     return (
          <aside className="flex flex-col gap-6" aria-labelledby="avis-clients">
               <div className="flex flex-wrap items-center gap-3">
                    <h2
                         id="avis-clients"
                         className="bg-black text-white px-4 py-1 w-fit font-bold md:text-lg whitespace-nowrap"
                         style={{ transform: "rotate(-3deg)" }}
                    >
                         ILS M&apos;ONT FAIT CONFIANCE
                    </h2>
                    <p className="bg-main text-white border-2 border-black shadow-small px-3 py-0.5 font-bold whitespace-nowrap">
                         ★ {average.toFixed(1).replace(".", ",")}/5
                    </p>
               </div>

               <div className="flex flex-col gap-8">
                    {testimonials.map((t) => (
                         <TestimonialCard key={`${t.author}-${t.company}`} {...t} />
                    ))}
               </div>

               <Link
                    href={CODEUR_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-fit bg-white border-3 border-black shadow-small px-3 py-2 text-sm font-semibold clicanim"
               >
                    <span>Avis vérifiés sur Codeur.com</span>
                    <MdArrowOutward />
               </Link>
          </aside>
     )
}
