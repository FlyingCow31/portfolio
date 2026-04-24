import { House, ListChecks, UserRound, BriefcaseBusiness, Mail } from "lucide-react";
import Link from "next/link";

// TODO: faire les animations de la navbar
export default function MobileNav() {
    return (
      <nav className="fixed bottom-0 w-full flex flex-row justify-around  bg-white p-4
      shadow-[0px_-10px_0px_rgba(0,0,0,1)] z-100 md:hidden">
          <Link href={"/"}><House color="#000000" /></Link>
          <Link href={"/solutions"}><ListChecks color="#000000" /></Link>
        <p className="hidden md:block">Menu</p>
          <Link href={"/about"}><UserRound color="#000000" /></Link>
          <Link href={"/portfolio"}><BriefcaseBusiness color="#000000" /></Link>
          <Link href={"/contact"}><Mail color="#000000" /></Link>
      </nav>
    );
}