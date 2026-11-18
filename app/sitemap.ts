import type { MetadataRoute } from "next"
import { projects } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
     const projectPages = projects
          .filter((project) =>
               project.study
                    ? project.challenge && project.solution && project.stats && project.technologies.groups
                    : project.features,
          )
          .map((project) => ({
               url: `https://gaeltournier.dev/portfolio/${project.study ? "case-study" : "projects"}/${project.slug}`,
               lastModified: new Date(),
          }))

     return [
          { url: "https://gaeltournier.dev", lastModified: new Date() },
          { url: "https://gaeltournier.dev/portfolio", lastModified: "2026-11-18" },
          ...projectPages,
          { url: "https://gaeltournier.dev/contact", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/about", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/solutions", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/mentions", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/cgv", lastModified: "2026-08-01" },
     ]
}
