import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
     return [
          { url: "https://gaeltournier.dev", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/portfolio", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/portfolio/epistudios", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/portfolio/flyingtodo", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/portfolio/panelgestionentreprise", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/contact", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/about", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/solutions", lastModified: "2026-10-01" },
          { url: "https://gaeltournier.dev/mentions", lastModified: "2026-08-01" },
          { url: "https://gaeltournier.dev/cgv", lastModified: "2026-08-01" },
     ]
}
