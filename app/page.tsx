import Image from "next/image"
import Link from "next/link"
import ButtonMain from "./components/ButtonMain"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import { IndexProjectDiv } from "@/app/components/ProjectDiv"
import { MdKeyboardDoubleArrowDown, MdArrowForward } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"
import { PiCodeLight } from "react-icons/pi"
import { SlSocialGoogle } from "react-icons/sl"

import SkillDiv from "@/app/components/skillsDiv"
import Footer from "@/app/components/Footer"

export default function Home() {
     return (
          <div className="bg-bg h-screen md:flex">
               <Navbar />
               {/*Page Container*/}
               <main className="flex flex-col md:flex-1 overflow-y-auto">
                    {/* Hero */}
                    <div className="bg-white border-3 border-black p-6 w-85 md:w-[70%] lg:w-[50%] md:h-[60%] shadow-big pb-10 md:mt-10 mt-30 mx-auto md:ml-17 mb-25">
                         <p className="opacity-30 font-bold text-xl font-title">Développeur Web Freelance</p>
                         <hr className="border border-black w-70 opacity-30 mt-2" />
                         <h1 className="font-extrabold text-5xl text-black mt-3 md:text-7xl font-title">
                              GAEL <br /> TOURNIER
                         </h1>
                         <p className={"mt-3 md:text-2xl font-semibold md:max-w-145"}>
                              Passez de l&#39;idée au concret grâce à mon expertise dans le web! Livraison rapide, sans
                              aucune démarche de votre part.
                         </p>

                         <div className="flex items-center gap-4 mt-5 md:mt-10">
                              <ButtonMain label={"Discutez de votre projet →"} href={"/contact"} />
                              <div className={"flex ml-10 gap-2 md:gap-6 md:mr-3"}>
                                   <Link
                                        href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"}
                                        target={"_blank"}
                                        className="ml-auto"
                                   >
                                        <Image src="/linkedinincon.svg" alt="Linkedin" width={32} height={32} />
                                   </Link>
                                   <Link href={"https://github.com/FlyingCow31"} target={"_blank"} className="mr-3">
                                        <Image src="/githubicon.svg" alt="Github" width={32} height={32} />
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                         <MdKeyboardDoubleArrowDown size={100} className={"float-anim"} />
                    </div>

                    <div className={"bg-white mt-20 border-t-6 pb-16"}>
                         <h2
                              className={
                                   "ml-6 text-2xl font-bold py-3 underline decoration-5 underline-offset-9 decoration-main"
                              }
                         >
                              MES PROJETS RECENTS
                         </h2>

                         <Link
                              href={"/portfolio"}
                              className={
                                   "ml-6 my-3 flex items-center gap-3 w-fit bg-main border-3 shadow-small text-white border-black px-3 py-2 "
                              }
                         >
                              <p>Voir plus</p>
                              <MdArrowForward />
                         </Link>

                         <div className={"md:grid md:grid-cols-3 flex flex-col gap-6 mt-6"}>
                              <IndexProjectDiv />
                              <IndexProjectDiv />
                              <IndexProjectDiv />
                         </div>
                    </div>

                    <div className={"bg-sec pb-40 border-t-6"}>
                         <h2
                              className={
                                   "ml-6 text-2xl font-bold py-3 underline decoration-5 underline-offset-9 decoration-main"
                              }
                         >
                              MES SERVICES
                         </h2>
                         <div className={"flex flex-col gap-6 mt-3 md:ml-6"}>
                              <SkillDiv
                                   icon={<AiOutlinePicture size={70} className="my-auto" />}
                                   title={"UI/UX DESIGN"}
                                   description={
                                        "Je designe votre site web en m'adaptant à vos clients et votre business. Interface graphique, qui " +
                                        "traduit visuellement votre marque à vos clients."
                                   }
                              />
                              <SkillDiv
                                   icon={<PiCodeLight size={70} className="my-auto" />}
                                   title={"DEVELOPPEMENT"}
                                   description={
                                        "Applications et sites webs sur-mesure, rapides et sécurisés. Code maintenable et documenté."
                                   }
                              />
                              <SkillDiv
                                   icon={<SlSocialGoogle size={70} className="my-auto" />}
                                   title={"Visibilité"}
                                   description={
                                        "Optimisation SEO et accompagnement dans l'optimisation Google Maps, pour une experience utilisateur" +
                                        "optimale."
                                   }
                              />
                         </div>
                    </div>

                    {/* Avis*/}

                    {/*<div className="relative bg-white border-3 border-black *:ml-3 w-70 shadow-big pt-3 pb-10 mt-10">*/}

                    {/*    <span className={"absolute -top-4 bg-sec p-1 pl-2 pr-2 border shadow-small"} >AVIS</span>*/}
                    {/*    <p className={"mt-5 text-main text-4xl"}>★★★★★</p>*/}

                    {/*    <p className={"mb-10"}>Très bon travail de la part de Gaël!</p>*/}

                    {/*    <ButtonMain label={"+5 Avis vérifiés"} href={"/contact"}/>*/}
                    {/*</div>*/}
                    <Footer />
               </main>

               <MobileNav />
          </div>
     )
}
