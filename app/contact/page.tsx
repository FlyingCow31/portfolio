import MobileNav from "@/app/components/MobileNav";
import Contactbtn from "@/app/components/Contactbtn";
import PcNav from "@/app/components/PcNav";

export default function contact() {
    return (
        <main className="bg-bg min-h-screen">
            <PcNav/>
            <MobileNav/>
            <div className={"flex flex-col ml-6 gap-2 md:ml-60"}>
                <div className={"shadow-small border-3 bg-main w-fit py-2 px-4 mt-6 md:text-2xl"}>
                    <p className={"text-center text-white font-bold"}>CONTACT</p>
                </div>
                <p className={"text-5xl font-extrabold mt-3 md:text-6xl"}>
                    AVANCONS <br/>
                    ENSEMBLE.
                </p>
                <hr className={"w-70 mt-3 border-main border-2 md:w-100"}/>

                <p className={"text-2xl font-semibold md:text-4xl"}>
                    Software, Design, Site Web, Gestion de projets et d&#39;équipes, ou tout autre
                    projets qui vous anime, <span className={"bg-main text-white p-1 border-black border leading-loose"}>Contactez-moi</span> !
                </p>
                <div className={"flex flex-col gap-4 mt-5 "}>
                    <Contactbtn delay={0.1} icon={"/mail.svg"} href={"mailto:contact@gaeltournier.dev"} text={"contact@gaeltournier.dev"}/>
                    <Contactbtn delay={0.2 }icon={"/githubicon.svg"} href={"https://github.com/FlyingCow31"} text={"Gaël Tournier"}/>
                    <Contactbtn delay={0.3} icon={"/linkedinincon.svg"} href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"} text={"Gaël Tournier"}/>
                </div>
            </div>

        </main>
    )
}

