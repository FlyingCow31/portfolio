import { House, ListChecks, UserRound, BriefcaseBusiness, Mail } from "lucide-react";


export default function MobileNav() {
    return (
      <nav className="fixed bottom-0 w-full flex flex-row justify-around md:hidden bg-white p-4
      shadow-[0px_-10px_0px_rgba(0,0,0,1)]">
          <House color="#000000" />
          <ListChecks color="#000000" />
        <p className="hidden md:block">Menu</p>
          <UserRound color="#000000" />
          <BriefcaseBusiness color="#000000" />
          <Mail color="#000000" />
      </nav>
    );
}