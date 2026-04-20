

import { House, ListChecks, UserRound, BriefcaseBusiness, Mail } from "lucide-react";
import Link from "next/link";

export default function PcNav() {
    return (
        <nav className="hidden md:flex border-red border-3 shadow-[11px_0px_0px_rgba(0,0,0,1)] flex-col justify-around items-center w-30 bg-white ">
            <Link href={"/"}><House color="#000000" height={40} width={40}/></Link>
            <Link href={"/solutions"}><ListChecks color="#000000" height={40} width={40}/></Link>
            <p className="text-main -rotate-90 text-5xl font-extrabold ">Menu</p>
            <Link href={"/about"}><UserRound color="#000000" height={40} width={40}/></Link>
            <Link href={"/portfolio"}><BriefcaseBusiness color="#000000" height={40} width={40}/></Link>
            <Link href={"/contact"}><Mail color="#000000" height={40} width={40}/></Link>
        </nav>
    );
}