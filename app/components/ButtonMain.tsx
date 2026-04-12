import Link from "next/link";

interface ButtonProps {
    label: string,
    href?: string
}

export default function ButtonMain({label, href}: ButtonProps) {
    return (
        <Link href={href || "/"} className={" cursor-pointer text-white text-center flex-1 bg-main p-3 border-3 border-black shadow-small"}>
            {label}
        </Link>
    )
}