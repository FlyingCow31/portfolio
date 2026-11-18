import type { MetadataRoute } from "next"
import { projects } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          { url: "https://gaeltournier.dev", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/portfolio", lastModified: "2026-10-01" },
          ...projects.map((project) => ({
               url: `https://gaeltournier.dev/portfolio/${project.study ? "case-study" : "projects"}/${project.slug}`,
               lastModified: "2026-11-18",
          })),
          { url: "https://gaeltournier.dev/contact", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/about", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/solutions", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/mentions", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/cgv", lastModified: "2026-08-01" },
     ]
}
