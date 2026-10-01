import { IDS, JsonLdScript } from "./JsonLd"

const SITE_URL = "https://gaeltournier.dev"

interface Props {
     name: string
     description: string
     path: string
     image: string
     keywords: string[]
     dateCreated?: string
     liveUrl?: string
     type?: "CreativeWork" | "WebSite" | "SoftwareApplication"
}

export default function ProjectJsonLd({
     name,
     description,
     path,
     image,
     keywords,
     dateCreated,
     liveUrl,
     type = "CreativeWork",
}: Props) {
     const pageUrl = `${SITE_URL}${path}`

     const data = {
          "@context": "https://schema.org",
          "@graph": [
               {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                         { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
                         { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio` },
                         { "@type": "ListItem", position: 3, name, item: pageUrl },
                    ],
               },
               {
                    "@type": type,
                    "@id": `${pageUrl}#project`,
                    name,
                    description,
                    url: pageUrl,
                    image: `${SITE_URL}${image}`,
                    keywords: keywords.join(", "),
                    inLanguage: "fr-FR",
                    creator: { "@id": IDS.person },
                    isPartOf: { "@id": IDS.website },
                    ...(dateCreated && { dateCreated }),
                    ...(liveUrl && { sameAs: liveUrl }),
                    ...(type === "SoftwareApplication" && {
                         applicationCategory: "ProductivityApplication",
                         operatingSystem: "Windows",
                    }),
               },
          ],
     }

     return <JsonLdScript data={data} />
}
