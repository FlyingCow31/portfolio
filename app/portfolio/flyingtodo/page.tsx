"use client"
import MobileNav from "@/app/components/MobileNav";
import PcNav from "@/app/components/PcNav";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import {useIsDesktop} from "@/app/hooks/useIsDesktop";


export default function TodoPage() {
    const isDesktop = useIsDesktop();
    return (
        <main className={"bg-bg min-h-screen flex flex-col items-star pb-10 md:pb-0"}>
            <MobileNav/>
            <PcNav/>
            <BackButton href={"/portfolio"} pc={isDesktop}/>
            <div className={'bg-white border-3 shadow-big w-[90%] mx-auto mt-25 pb-6 mb-10 md:ml-35 lg:ml-40 md:w-[80%] md:mt-10'}>
                <div className={"m-3 w-fit bg-sec p-2 border-3 shadow-small"}>
                    <Image src={"/iconflyingtodovraie.ico"} alt={"Icone FlyingTodo"} height={50} width={50}/>
                </div>

                <h1 className={"text-3xl font-extrabold m-3 md:text-4xl font-title"}>FlyingTodo</h1>
                <p className={'ml-3 w-70 text-xl md:w-full md:text-2xl'}>Logiciel de gestion de projet avec Todo List intégrée, avec un focus sur la simplicité.</p>

                <div className={"relative h-[200px] lg:h-[600px] md:h-[400px] w-[90%] lg:w-[70%] mx-auto border-3 shadow-small my-3"}>
                    <Image src={"/flyingtodoscreen.png"} alt={"Screenshot de l'application"} fill/>
                </div>

                <h1 className={"text-2xl font-extrabold m-3 md:text-3xl font-title"}>Features</h1>
                <p className={"text-lg ml-3 md:text-xl"}>La feature principale est la simplicité : Le but
                de cette application est d&#39;avoir le moins de friction entre l&#39;ouverture et la création de TODO. 
                Stockage en local grâce à une DB orientée web. Intégration de la prise de note, ainsi que d&#39;outils tels que les
                    tags pour organiser ses tâches et ses projets plus efficacement
                </p>

                <h1 className={"text-2xl font-extrabold m-3 md:text-3xl font-title"}>Stack</h1>
                <p className={"text-lg  ml-3 md:text-xl"}>Interface en Raw JS/HTML/CSS; Electron pour un build simple et accessible sur windows ;
                Dexie.JS pour une DB orientée Web, simple à découvrir et fiable. </p>

                <h1 className={"text-2xl font-extrabold m-3 font-title"}>Liens</h1>
                <Link href={"https://github.com/FlyingCow31/FlyingToDo"}><p className={"ctahover ml-3 font-extrabold text-2xl"}>Découvrir le projet →</p></Link>

            </div>
            <Footer/>
        </main>
    )
}