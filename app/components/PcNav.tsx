
"use client"
import { usePathname } from "next/navigation"
import { House, ListChecks, UserRound, BriefcaseBusiness, Mail } from "lucide-react";
import Link from "next/link";

export default function PcNav() {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex fixed top-0 left-0 h-screen border-red border-3 shadow-[11px_0px_0px_rgba(0,0,0,1)] flex-col justify-around items-center w-30 bg-white z-10">
            <Link href={"/"}>
                <div className={`p-3 border-3 ${pathname === "/" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                    <House color={pathname === "/" ? "#ffffff" : "#000000"} height={40} width={40}/>
                </div>
            </Link>
            <Link href={"/solutions"}>
                <div className={`p-3 border-3 ${pathname === "/solutions" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                    <ListChecks color={pathname === "/solutions" ? "#ffffff" : "#000000"} height={40} width={40}/>
                </div>

            </Link>

            <p className="text-main -rotate-90 text-5xl font-extrabold p-3 font-title">Menu</p>

            <Link href={"/about"}>
                <div className={`p-3 border-3 ${pathname === "/about" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                    <UserRound color={pathname === "/about" ? "#ffffff" : "#000000"} height={40} width={40}/>
                </div>

            </Link>

            <Link href={"/portfolio"}>
                <div className={`p-3 border-3 ${pathname.startsWith("/portfolio") ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                    <BriefcaseBusiness color={pathname.startsWith("/portfolio") ? "#ffffff" : "#000000"} height={40} width={40}/>
                </div>

            </Link>

            <Link href={"/contact"}>
                <div className={`p-3 border-3 ${pathname === "/contact" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                    <Mail color={pathname === "/contact" ? "#ffffff" : "#000000"} height={40} width={40}/>
                </div>

            </Link>
        </nav>
    );
}