import Link from "next/link"
import type { Metadata } from "next"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MainTitle } from "@/app/components/textcomponents"

export const metadata: Metadata = {
     title: "Page introuvable | Gaël Tournier",
}

export default function NotFound() {
     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col flex-1 pb-40 md:pb-0">
                    <div className="md:ml-6">
                         <MainTitle text="ERREUR 404" title="404." />
                    </div>

                    <div className="bg-white border-3 border-black shadow-big p-6 w-[90%] md:w-[70%] lg:w-[50%] mx-auto md:ml-17 my-12 flex flex-col gap-8">
                         <p className="text-xl md:text-3xl font-semibold md:leading-relaxed">
                              Cette page <span className="errordiv">n&apos;existe pas</span> ou a été déplacée. Vérifiez
                              l&apos;adresse, ou repartez depuis l&apos;accueil.
                         </p>

                         <Link
                              href="/"
                              className="font-title font-bold text-white text-lg md:text-2xl bg-main px-6 py-3 border-3 border-black shadow-small hover-btn-dark w-fit focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-black"
                         >
                              ← Retour à l&apos;accueil
                         </Link>
                    </div>

                    <div className="mt-auto">
                         <Footer />
                    </div>
               </main>
          </div>
     )
}
