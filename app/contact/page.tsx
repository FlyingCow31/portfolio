import MobileNav from "@/app/components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import ButtonMain from "@/app/components/ButtonMain";
import Contactbtn from "@/app/components/Contactbtn";

export default function contact() {
    return (
        <main className="bg-bg min-h-screen">
            <MobileNav/>
            <div className={"flex flex-col ml-6 gap-2"}>
                <div className={"shadow-small border-3 bg-main w-fit py-2 px-4 mt-6"}>
                    <p className={"text-center text-white font-bold"}>CONTACT</p>
                </div>
                <p className={"text-5xl font-extrabold mt-3"}>
                    AVANCONS
                    ENSEMBLE.
                </p>
                <hr className={"w-70 mt-3 border-main border-2"}/>

                <p className={"text-2xl font-semibold"}>
                    Software, Design, Site Web, Gestion de projets et d&#39;équipes, ou tout autre
                    projets qui vous anime, <span className={"bg-main text-white p-1 border-black border leading-loose"}>Contactez-moi</span> !
                </p>
                <div className={"flex flex-col gap-4 mt-5"}>
                    <Contactbtn icon={"/mail.svg"} href={"mailto:contact@gaeltournier.dev"} text={"contact@gaeltournier.dev"}/>
                    <Contactbtn icon={"/githubicon.svg"} href={"https://github.com/FlyingCow31"} text={"Gaël Tournier"}/>
                    <Contactbtn icon={"/linkedinincon.svg"} href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"} text={"Gaël Tournier"}/>
                </div>
            </div>

        </main>
    )
}

