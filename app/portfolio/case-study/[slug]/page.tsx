import BackButton, { ButtonCTA } from "@/app/components/buttons"
import Footer from "@/app/components/Footer"
import { MobileNav, Navbar } from "@/app/components/Navbar"
import { ChallengeDiv, GalerieView, HeroProjet, SolutionDiv, StackCard, StatsDiv } from "@/app/components/CaseStudyPage"
import ProjectJsonLd from "@/app/components/ProjectJsonLd"
import { TitleDivProject } from "@/app/components/textcomponents"
import { projects } from "@/lib/data"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
     params: Promise<{ slug: string }>
}

function findCaseStudy(slug: string) {
     const project = projects.find((item) => item.slug === slug && item.study)

     if (!project?.challenge || !project.solution || !project.stats || !project.technologies.groups) {
          return undefined
     }

     return project
}

export function generateStaticParams() {
     return projects
          .filter(
               (project) =>
                    project.study &&
                    project.challenge &&
                    project.solution &&
                    project.stats &&
                    project.technologies.groups,
          )
          .map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
     const { slug } = await params
     const project = findCaseStudy(slug)

     if (!project) {
          notFound()
     }

     return {
          ...project.metadata,
          alternates: { ...project.metadata.alternates, canonical: `/portfolio/case-study/${slug}` },
     }
}

export default async function CaseStudyPage({ params }: PageProps) {
     const { slug } = await params
     const project = findCaseStudy(slug)

     if (!project) {
          notFound()
     }

     const caseStudyPath = `/portfolio/case-study/${project.slug}`

     return (
          <div className="md:flex h-screen md:overflow-hidden">
               <ProjectJsonLd
                    {...project.structuredData}
                    path={caseStudyPath}
               />
               <Navbar />
               <MobileNav />
               <main className="bg-bg overflow-y-auto h-screen flex flex-col">
                    <BackButton />
                    <div className="flex flex-col items-center">
                         <HeroProjet
                              type={project.type}
                              title={project.title}
                              desc={project.heroDescription}
                              tags={project.tags}
                         />
                    </div>

                    <div className="bg-white border-y-3 p-6 mt-12">
                         <TitleDivProject text="LE PROJET" />
                         <div className="flex flex-col gap-6 lg:flex-row">
                              <ChallengeDiv challenge={project.challenge} />
                              <SolutionDiv solution={project.solution} />
                         </div>
                         <div className="grid grid-cols-2 gap-3 my-6 lg:flex">
                              {project.stats.map((stat) => (
                                   <StatsDiv key={stat.secondary} Main={stat.main} Sec={stat.secondary} />
                              ))}
                         </div>
                    </div>

                    <div className="flex flex-col bg-sec border-b-3 p-6">
                         <TitleDivProject text="GALERIE" />
                         <div className="flex flex-col gap-6">
                              {project.images.map((image) => (
                                   <GalerieView
                                        key={image.src}
                                        image={image.src}
                                        title={image.title ?? image.alt}
                                        desc={image.description ?? project.description}
                                   />
                              ))}
                         </div>
                    </div>

                    <div className="flex flex-col bg-white border-b-3 p-6">
                         <TitleDivProject text="LA STACK" />
                         <div className="flex flex-col gap-6 lg:flex-row">
                              {project.technologies.groups.map((group) => (
                                   <StackCard
                                        key={group.title}
                                        title={group.title}
                                        color={group.color}
                                        items={group.items.map((item) => ({
                                             title: item.title,
                                             desc: item.description,
                                        }))}
                                   />
                              ))}
                         </div>
                    </div>

                    <div className="flex flex-col gap-3 p-3 bg-main pb-40 md:p-6 md:gap-6">
                         <h2 className="text-white text-5xl font-black lg:text-6xl">Ce projet vous intéresse?</h2>

                         <ButtonCTA text="Parlons-en" color="white" href="contact" textcol="black" />
                         <Link href={project.link.url} target="_blank" rel="noopener noreferrer">
                              <p className="text-white text-2xl font-bold ctahover">{project.link.label} →</p>
                         </Link>
                    </div>

                    <Footer />
               </main>
          </div>
     )
}
