"use client"
import { usePathname } from "next/navigation"
import { House, ListChecks, UserRound, BriefcaseBusiness, Mail } from "lucide-react";
import Link from "next/link";

// TODO: faire les animations de la navbar
export default function MobileNav() {
    const pathname = usePathname();
    return (
      <nav className="fixed bottom-0 w-full flex flex-row justify-around  bg-white p-4
      shadow-[0px_-10px_0px_rgba(0,0,0,1)] z-100 md:hidden">

          <Link href={"/"}>
              <div className={`p-1 border-3 ${pathname === "/" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                  <House color={pathname === "/" ? "#ffffff" : "#000000"}/>
              </div>
          </Link>

          <Link href={"/solutions"}>
              <div className={`p-1 border-3 ${pathname === "/solutions" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                  <ListChecks color={pathname === "/solutions" ? "#ffffff" : "#000000"}/>
              </div>
          </Link>

          <Link href={"/about"}>
              <div className={`p-1 border-3 ${pathname === "/about" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                  <UserRound color={pathname === "/about" ? "#ffffff" : "#000000"}/>
              </div>

          </Link>

          <Link href={"/portfolio"}>
              <div className={`p-1 border-3 ${pathname.startsWith("/portfolio") ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                  <BriefcaseBusiness color={pathname.startsWith("/portfolio") ? "#ffffff" : "#000000"}/>
              </div>
          </Link>


          <Link href={"/contact"}>
              <div className={`p-1 border-3 ${pathname === "/contact" ? "bg-main shadow-small border-black " : "border-transparent nav-hover"} `}>
                  <Mail color={pathname === "/contact" ? "#ffffff" : "#000000"}/>
              </div>
          </Link>
      </nav>
    );
}