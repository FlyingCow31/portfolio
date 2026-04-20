
import MobileNav from "./components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import ButtonMain from "./components/ButtonMain";
import PcNav from "@/app/components/PcNav";

export default function Home() {
  return (
      <main className="bg-bg min-h-screen ">
          <PcNav/>
          {/*Page Container*/}
          <div className="flex flex-col justify-center md:flex-1">

              {/* Hero */}
              <div className="bg-white border-3 border-black *:ml-3 w-85 md:w-[50%] md:h-[60%] shadow-big pt-3 pb-10 mt-10 mx-auto">
                  <p className="opacity-30 font-bold text-xl">Développeur Web Freelance</p>
                  <hr className="border border-black w-70 opacity-30 mt-2"/>
                  <h1 className="font-extrabold text-5xl text-black mt-3 md:text-7xl">GAEL <br/> TOURNIER</h1>
                  <p className={"mt-3 md:text-2xl font-semibold md:max-w-145"}>Passez de l&#39;idée au concret grâce à mon expertise dans le web! Livraison rapide,
                  sans aucune démarche de votre part.</p>


                  <div className="flex items-center gap-4 mt-5 md:mt-10">

                      <ButtonMain label={"Discutez de votre projet"} href={"/contact"} />

                        <div className={"flex ml-10 md:gap-6 md:mr-3"}>
                            <Link href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"} target={"_blank"} className="ml-auto">
                                <Image src="/linkedinincon.svg" alt="Linkedin" width={32} height={32} />
                            </Link>
                            <Link href={"https://github.com/FlyingCow31"} target={"_blank"} className="mr-3">
                                <Image src="/githubicon.svg" alt="Github" width={32} height={32}
                                />
                            </Link>
                        </div>

                  </div>

              </div>
            {/* Avis*/}

              {/*<div className="relative bg-white border-3 border-black *:ml-3 w-70 shadow-big pt-3 pb-10 mt-10">*/}

              {/*    <span className={"absolute -top-4 bg-sec p-1 pl-2 pr-2 border shadow-small"} >AVIS</span>*/}
              {/*    <p className={"mt-5 text-main text-4xl"}>★★★★★</p>*/}

              {/*    <p className={"mb-10"}>Très bon travail de la part de Gaël!</p>*/}

              {/*    <ButtonMain label={"+5 Avis vérifiés"} href={"/contact"}/>*/}
              {/*</div>*/}
          </div>
          <MobileNav/>

      </main>
  );
}
