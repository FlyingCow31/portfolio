import BackButton, { ButtonCTA } from "@/app/components/buttons"
import Footer from "@/app/components/Footer"
import { Navbar, MobileNav } from "@/app/components/Navbar"
import { FeatureDiv, HeroProject, TechnoDiv } from "@/app/components/ProjectPage"
import ProjectJsonLd from "@/app/components/ProjectJsonLd"
import { TitleDivProject } from "@/app/components/textcomponents"
import { projects } from "@/lib/data"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
     params: Promise<{ slug: string }>
}

function findProject(slug: string) {
     const project = projects.find((item) => item.slug === slug && !item.study)

     if (!project?.features) {
          return undefined
     }

     return project
}

export function generateStaticParams() {
     return projects.filter((project) => !project.study && project.features).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
     const { slug } = await params
     const project = findProject(slug)

     if (!project) {
          notFound()
     }

     return {
          ...project.metadata,
          alternates: { ...project.metadata.alternates, canonical: `/portfolio/projects/${slug}` },
     }
}

export default async function ProjectPage({ params }: PageProps) {
     const { slug } = await params
     const project = findProject(slug)

     if (!project) {
          notFound()
     }

     const image = project.images[0]
     const caseStudyPath = `/portfolio/projects/${project.slug}`

     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <ProjectJsonLd {...project.structuredData} path={caseStudyPath} />
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col">
                    <BackButton />
                    <div className="flex flex-col items-center">
                         <HeroProject
                              type={project.type}
                              scale={project.scale ?? "Projet"}
                              title={project.title}
                              desc={project.heroDescription}
                              icon={project.icon?.src.replace(/^\//, "")}
                         />
                    </div>

                    <div className="bg-white border-y-3 p-6 mt-12">
                         <TitleDivProject text="APERÇU" />
                         <div className="flex justify-center">
                              <Image
                                   src={image.src}
                                   width={image.width}
                                   height={image.height}
                                   alt={image.alt}
                                   priority
                                   className="border-3 border-black shadow-small"
                              />
                         </div>
                    </div>

                    <div className="flex flex-col bg-sec border-b-3 p-6">
                         <TitleDivProject text="FEATURES" />
                         {project.features.map((feature) => (
                              <FeatureDiv key={feature.title} title={feature.title} desc={feature.description} />
                         ))}
                    </div>

                    <div className="flex flex-col bg-white border-b-3 p-6">
                         <TitleDivProject text="LA STACK" />
                         <TechnoDiv
                              title="Technologies"
                              desc={project.technologies.description ?? ""}
                              tags={project.technologies.tags}
                         />
                    </div>

                    <div className="flex flex-col gap-3 bg-main pb-40 md:p-6 md:gap-6 p-4">
                         <h2 className="text-white text-5xl font-black lg:text-6xl">Envie de tester le projet?</h2>

                         <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-12 p">
                              <ButtonCTA text="Parlons-en" color="white" href="contact" textcol="black" />
                              <Link href={project.link.url} target="_blank" rel="noopener noreferrer">
                                   <p className="text-white text-2xl font-bold ctahover">{project.link.label} →</p>
                              </Link>
                         </div>
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
