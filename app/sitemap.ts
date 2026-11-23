import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          { url: "https://gaeltournier.dev", lastModified: new Date() },
          { url: "https://gaeltournier.dev/portfolio", lastModified: "2026-11-18" },
          { url: "https://gaeltournier.dev/portfolio/case-study/webdevpanel", lastModified: "2026-11-18" },
          { url: "https://gaeltournier.dev/portfolio/projects/epistudio", lastModified: "2026-11-18" },
          { url: "https://gaeltournier.dev/portfolio/projects/flyingtodo", lastModified: "2026-11-18" },
          { url: "https://gaeltournier.dev/portfolio/projects/stylhome", lastModified: "2026-11-23" },
          { url: "https://gaeltournier.dev/contact", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/about", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/solutions", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/mentions", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/cgv", lastModified: "2026-08-01" },
     ]
}
