import Contactbtn from "@/app/components/Contactbtn"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "../components/Footer"
import { MainTitle } from "../components/textcomponents"
import Marquee from "../components/Marquee"
import { Metadata } from "next"


export const metadata: Metadata = {
     title: "Contact — Gaël Tournier",
     description:
          "Vous avez un projet ou une idée ? Contactez-moi pour en discuter et avancer ensemble.",
     openGraph: {
          title: "Contact — Gaël Tournier",
          description: "Vous avez un projet ou une idée ? Contactez-moi pour en discuter et avancer ensemble.",
          url: "https://gaeltournier.dev",
          siteName: "Gaël Tournier",
          images: [
               {
                    url: "https://gaeltournier.dev/LogoGaelPortfolio.png",
                    width: 1200,
                    height: 630,
               },
          ],
     },
}
const Contacts = [
     {
          icon: "mail.svg",
          href: "mailto:contact@gaeltournier.dev",
          type: "EMAIL",
          text: "contact@gaeltournier.dev",
     },
     {
          icon: "githubicon.svg",
          href: "https://github.com/FlyingCow31",
          type: "GITHUB",
          text: "Gaël Tournier",
     },
     {
          icon: "linkedinicon.svg",
          href: "https://www.linkedin.com/in/gael-tournier32",
          type: "LINKEDIN",
          text: "Gaël Tournier",
     },
]
const words = ["SITE WEB", "DESIGN", "PARLONS DE VOTRE PROJET", "SOFTWARE", "CHEF DE PROJET"]
export default function contact() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col pb-0">
                    <div className="md:ml-6">
                         <MainTitle text="DISPONIBLE ✦ FREELANCE" title="CONTACT." />
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row lg:w-[90%] lg:self-center lg:my-12">
                         <div className="flex flex-col gap-3 p-6 bg-main border-3 shadow-big w-[90%] self-center lg:h-full">
                              <h1 className="text-5xl text-white font-black lg:text-8xl">AVANÇONS ENSEMBLE.</h1>
                              <p className="text-white text-xl font-semibold lg:text-3xl lg:leading-relaxed">
                                   Software, design, site web, gestion de projets et d'équipes, ou tout autre projet qui
                                   vous anime - <span className="boxCTAContact">contactez-moi</span> !
                              </p>
                              <div className="flex gap-3 lg:text-2xl">
                                   <p className="px-3 py-1 bg-white border-2 shadow-small font-bold">
                                        {"RÉPONSE < 24H"}
                                   </p>
                                   <p className="px-3 py-1 bg-sec border-2 shadow-small font-bold">SANS ENGAGEMENT</p>
                              </div>
                         </div>
                         <div className="w-[90%] self-center flex flex-col gap-3 lg:justify-between lg:h-125 lg:gap-0">
                              {Contacts.map((Card, index) => {
                                   return <Contactbtn key={index} {...Card} />
                              })}
                         </div>
                    </div>
                    <div className="my-12 pb-80">
                         <Marquee words={words} />
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
