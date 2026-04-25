"use client";
import MobileNav from "@/app/components/MobileNav";
import {useState} from "react";
import ExpertiseModale from "@/app/components/ExpertiseModale";
import Link from "next/link";
import BackgroundModale from "@/app/components/BackgroundModale";
import WorkflowsModale from "@/app/components/WorkflowsModale";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import PcNav from "@/app/components/PcNav";
import Footer from "@/app/components/Footer";
import {motion} from "framer-motion"



export default function About() {
    const [activeTab, setActiveTab] = useState("expertise");
    const isDesktop = useIsDesktop();
    return (

      <main className={"bg-bg min-h-screen "}>
          <PcNav/>
          <div className={"overflow-x-hidden h-full flex flex-col items-center md:ml-40 lg:ml-60 md:items-start"}
          >

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 7, y: 10, boxShadow: "1px 1px 0px rgba(0,0,0,1)", transition: { duration: 0.1, ease: "easeOut" } } }
                  transition={{ duration: 0.6}}
                  viewport={{ once: true }}
                  className={"shadow-big bg-white border-3 border-black w-80 mt-10 mb-10 md:w-[90%] md:grid md:grid-cols-2"}>
                  <p className={"border-3 border-black shadow-small bg-sec px-5 max-w-fit ml-3 mt-3 font-bold md:col-span-2 md:text-xl"}> A PROPOS </p>
                  <h1 className={"font-extrabold ml-3 mt-3 text-4xl md:text-6xl font-title"}>
                      WEB-APPS, <br/>
                      SITES WEB, <br/>
                      SUR-MESURE.
                  </h1>

                  <p className={"ml-3 mt-3 mb-3 w-75 font-semibold md:text-xl md:w-60 lg:w-85"}>
                      J&#39;apporte une expertise à vos projets grâce à mon experience dans le
                  domaine du web. Mes workflows augmentés à l&#39;IA me permettent une rapidité tout en
                  conservant une fiabilité dans le code produit.
                  </p>
                  <hr className={"w-50 border border-main ml-auto mr-4 md:hidden"}/>
                  <button className={"text-main font-bold w-fit block ml-auto mr-4 pb-5 mt-2 cursor-pointer md:col-start-2 md:text-3xl md:mt-10 ctahover"}>Découvrir mes projets →</button>
              </motion.div>

              <div className={"md:flex md:flex-col lg:flex-row md:gap-10 md:w-[100%] lg:w-[90%] md:pb-30 "}>

                  <div className={"flex flex-row gap-2 md:flex-col md:*:text-4xl md:gap-6 md:max-w-[90%] "}>
                      <button onClick={() => setActiveTab("expertise")}
                              className={` font-title clicanim font-bold text-sm py-2 px-4 border border-black shadow-small ${activeTab === "expertise" ? "bg-main text-white" : "bg-white"} md:py-4 `}>
                          EXPERTISE
                      </button>
                      <button onClick={() => setActiveTab("background")}
                              className={`font-title clicanim font-bold py-2 px-3  text-sm border border-black shadow-small ${activeTab === "background" ? "bg-main text-white" : "bg-white"} md:py-4`}>
                          BACKGROUND
                      </button>
                      <button onClick={() => setActiveTab("workflows")}
                              className={`font-title clicanim font-bold py-2 px-3 text-sm border border-black shadow-small ${activeTab === "workflows" ? "bg-main text-white" : "bg-white"} md:py-4`}>
                          WORKFLOWS
                      </button>
                      {isDesktop && <Link href={"/contact"} className={"md:mt-auto"}>
                          <button className={"font-title bg-main border-3 border-black shadow-small mb-30 mt-10 text-white p-3 font-bold md:mt-auto md:mb-0 clicanim"}>
                              Construisons ensemble!
                          </button>
                      </Link>}
                  </div>

                  <div className={"mt-10 pt-3 bg-bg h-fit w-80 border-3 border-black shadow-small flex flex-col items-center md:w-[90%] lg:w-[100%] md:mt-0 mx-auto min-w-0"}>
                      {activeTab === 'expertise' && <ExpertiseModale/>}
                      {activeTab === 'background' && <BackgroundModale/>}
                      {activeTab === 'workflows' && <WorkflowsModale/>}
                  </div>
              </div>

              {!isDesktop && <Link href={"/contact"}>
                  <button className={"font-title bg-main border-3 border-black shadow-small mb-30 mt-10 text-white p-3 font-bold clicanim"}>
                      Construisons ensemble!
                  </button>
              </Link>}


          </div>
          <Footer/>

          <MobileNav/>
      </main>
    );
};