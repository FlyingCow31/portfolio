
"use client"
import { usePathname } from "next/navigation"
import {MoveUpRight} from "lucide-react";
import Link from "next/link";

import { LiaBriefcaseSolid } from "react-icons/lia";
import { RiListCheck3 } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { PiPersonArmsSpreadLight, PiPersonLight } from "react-icons/pi";

export default function PcNav() {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex fixed top-0 left-0 h-screen border-red border-3 shadow-[11px_0px_0px_rgba(0,0,0,1)] flex-col justify-start items-center w-30 bg-white z-10">

            <Link href={"/"}>
                <div className={`p-3 px-4 border-3 ${pathname === "/" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} flex flex-col items-center mt-3`}>
                    <GoHome color={pathname === "/" ? "#ffffff" : "#000000"} size={40}/>
                    <p className={`${pathname === "/" ? "text-white" : "text-black"} font-bold`}>Accueil</p>
                </div>
            </Link>

            <Link href={"/solutions"}>
                <div className={`w-full flex flex-col items-center p-3 border-3 ${pathname === "/solutions" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} mt-3`}>
                    <RiListCheck3 color={pathname === "/solutions" ? "#ffffff" : "#000000"} size={40}/>
                    <p className={`${pathname === "/solutions" ? "text-white" : "text-black"} font-bold`}>Services</p>
                </div>

            </Link>


            <Link href={"/about"}>
                <div className={`w-full flex flex-col items-center p-3 border-3 ${pathname === "/about" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} mt-3`}>
                    {pathname === "/about" ?
                        <div className={'flex flex-col items-center'}>
                            <PiPersonArmsSpreadLight color={"#ffffff"} size={40}/>
                            <p className={`${pathname === "/about" ? "text-white" : "text-black"} font-bold`}>A Propos</p>
                        </div> :
                        <div className={'flex flex-col items-center'}>
                            <PiPersonLight color={"#000000"} size={40}/>
                            <p className={`${pathname === "/about" ? "text-white" : "text-black"} font-bold`}>A Propos</p>
                        </div>
                    }
                </div>
            </Link>

            <Link href={"/portfolio"}>
                <div className={`w-full flex flex-col items-center p-3 border-3 ${pathname.startsWith("/portfolio") ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} mt-3`}>
                    <LiaBriefcaseSolid color={pathname.startsWith("/portfolio") ? "#ffffff" : "#000000"} size={40}/>
                    <p className={`${pathname === "/portfolio" ? "text-white" : "text-black"} font-bold`}>Portfolio</p>
                </div>
            </Link>



            {/*todo: add a click animation here*/}
            <Link href={"/contact"} className={'w-full flex justify-center mt-auto mb-3'}>
                <div className={'bg-main w-[90%] p-6 flex flex-col justify-center items-center border-3 shadow-small'}>
                    <p className={'text-white text-sm font-bold text-center mb-6'}>DISCUTONS DE VOTRE PROJET</p>
                    <div className={'bg-white p-4 shadow-small border-3'}>
                        <MoveUpRight height={40} width={40}/>
                    </div>
                </div>
            </Link>
        </nav>
    );
}