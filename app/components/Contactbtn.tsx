import Link from "next/link";
import Image from "next/image";
import {MousePointerClick} from "lucide-react";

interface ContactCardProps {
    icon: string,
    href: string,
    text: string
}

export default function Contactbtn({ icon, href, text }: ContactCardProps){
    return(
        <>
            <Link href={href} target={"_blank"}>
                <div className={"w-80 border-2 shadow-small bg-white flex flex-row gap-1 p-3 items-center md:w-[50%]"}>
                    <Image src={icon} alt="icon" width={40} height={40} className="w-10 h-10 md:w-18 md:h-18"/>
                    <p className={" flex-1 text-main text-left ml-1 font-bold text-l w-auto h-auto md:text-3xl"}>{text}</p>
                    <MousePointerClick color="#000000" height={32} width={32} className="opacity-25 w-10 h-10 md:w-14 md:h-14"/>
                </div>
            </Link>
        </>
    );
}