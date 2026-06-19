import React from "react";

interface SkillsProps {
    icon: React.ReactNode,
    title: string,
    description: string
}



export default function SkillDiv({icon, title, description}: SkillsProps) {
    return (
        <div className={'bg-white w-[80%] mx-auto border-3 shadow-big p-6'}>
            {icon}
            <div className={'ml-1'}>
                <h2 className={'font-black mt-3 text-2xl'}>{title}</h2>
                <p className={'mt-1 text-sm text-justify'}>{description}</p>
            </div>
        </div>
    )
}