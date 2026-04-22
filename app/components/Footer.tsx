import Link from "next/link"

interface ClassProps {
    classname?: string
}
export default function Footer({classname} : ClassProps) {
    return (
        <div className={`hidden md:flex bg-white border-t-3 ${classname} ml-30 gap-10 h-20 *:text-xl items-center justify-center `}>
            <Link href={"/contact"} className={"ml-30"}>
                <p className={"ctahover opacity-50"}>Contact</p>
            </Link>
            <Link href={"https://github.com/FlyingCow31"}>
                <p className={"ctahover opacity-50"}>Github</p>
            </Link>
            <Link href={"https://www.linkedin.com/in/gael-tournier32/?locale=fr"}>
                <p className={"ctahover opacity-50"}>Linkedin</p>
            </Link>

            <p className={"ml-auto mr-30 opacity-50"}>© 2026 Gaël Tournier</p>
        </div>
    )
}