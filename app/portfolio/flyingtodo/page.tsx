import BackButton, { ButtonCTA } from "@/app/components/buttons"
import Footer from "@/app/components/Footer"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import { FeatureDiv, HeroProject, TechnoDiv } from "@/app/components/ProjectPage"
import { TitleDivProject } from "@/app/components/textcomponents"
import Link from "next/link"
import Image from "next/image"

export default function EpiPage() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col">
                    <BackButton />
                    <div className="flex flex-col items-center">
                         <HeroProject
                              type="Software"
                              scale="Projet Personnel"
                              title="FLYINGTODO"
                              desc="Logiciel de gestion de projet avec Todo List intégrée, avec un focus sur la simplicité."
                              icon="iconflyingtodovraie.ico"
                         />
                    </div>

                    <div className="bg-white border-y-3 p-6 mt-12">
                         <TitleDivProject text="APERÇU" />
                         <div className="flex justify-center">
                              <Image
                                   src={"/flyingtodoscreen.png"}
                                   width={840}
                                   height={840}
                                   alt={"Page d'accueil de l'application FlyingTodo"}
                                   priority
                                   className="border-3 border-black shadow-small"
                              />
                         </div>
                    </div>

                    <div className="flex flex-col bg-sec border-b-3 p-6">
                         <TitleDivProject text="FEATURES" />
                         <FeatureDiv
                              title="La simplicité avant tout"
                              desc="La feature principale est la simplicité: le but de cette application est d'avoir le moins de friction possible entre l'ouverture et la création de TODO. Stockage en local grâce à une DB orientée web. Intégration de la prise de note, ainsi que d'outils tels que les tags pour organiser ses tâches et ses projets plus efficacement."
                         />
                    </div>

                    <div className="flex flex-col bg-white border-b-3 p-6">
                         <TitleDivProject text="LA STACK" />
                         <TechnoDiv
                              title="Technologies"
                              desc="Interface en Raw JS/HTML/CSS; Electron pour un build simple et accessible sur windows; Dexie.JS pour une DB orientée Web, simple à découvrir et fiable."
                              tags={["ELECTRON", "JAVASCRIPT", "DEXIE.JS"]}
                         />
                    </div>

                    <div className="flex flex-col gap-3 bg-main pb-40 md:p-6 md:gap-6 p-4">
                         <h2 className="text-white text-5xl font-black lg:text-6xl">Envie de tester le projet?</h2>

                         <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-12 p">
                              <ButtonCTA text="Parlons-en" color="white" href="contact" textcol="black" />
                              <Link
                                   href={"https://github.com/FlyingCow31/FlyingToDo"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <p className="text-white text-2xl font-bold ctahover">Découvrez le Projet →</p>
                              </Link>
                         </div>
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
