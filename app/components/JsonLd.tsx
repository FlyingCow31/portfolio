const SITE_URL = "https://gaeltournier.dev"

export const IDS = {
     website: `${SITE_URL}/#website`,
     business: `${SITE_URL}/#business`,
     person: `${SITE_URL}/#person`,
}

const graph = {
     "@context": "https://schema.org",
     "@graph": [
          {
               "@type": "WebSite",
               "@id": IDS.website,
               url: SITE_URL,
               name: "Gaël Tournier",
               description: "Développeur web freelance à Toulouse, spécialisé en Next.js, React et TypeScript.",
               inLanguage: "fr-FR",
               publisher: { "@id": IDS.business },
          },
          {
               "@type": "ProfessionalService",
               "@id": IDS.business,
               name: "Gaël Tournier — Développeur Web Freelance",
               url: SITE_URL,
               logo: `${SITE_URL}/LogoGaelPortfolio.webp`,
               image: `${SITE_URL}/og-image.png`,
               email: "contact@gaeltournier.dev",
               telephone: "+33658538254",
               address: {
                    "@type": "PostalAddress",
                    streetAddress: "22 Allée du Loiret",
                    addressLocality: "Colomiers",
                    postalCode: "31770",
                    addressRegion: "Occitanie",
                    addressCountry: "FR",
               },
               founder: { "@id": IDS.person },
               areaServed: [
                    { "@type": "City", name: "Toulouse" },
                    { "@type": "City", name: "Colomiers" },
                    { "@type": "AdministrativeArea", name: "Occitanie" },
                    { "@type": "Country", name: "France" },
               ],
               priceRange: "500€ - 5000€",
               sameAs: ["https://www.linkedin.com/in/gael-tournier32", "https://github.com/FlyingCow31"],
               description:
                    "Développeur web freelance spécialisé en Next.js, React et TypeScript. Création de sites web et applications sur-mesure à Toulouse.",
               serviceType: ["Développement Web", "Applications Web sur-mesure", "Direction de projet", "Software"],
          },
          {
               "@type": "Person",
               "@id": IDS.person,
               name: "Gaël Tournier",
               url: SITE_URL,
               image: `${SITE_URL}/LogoGaelPortfolio.webp`,
               jobTitle: "Développeur Web Freelance",
               address: {
                    "@type": "PostalAddress",
                    addressLocality: "Colomiers",
                    postalCode: "31770",
                    addressCountry: "FR",
               },
               sameAs: [
                    "https://www.linkedin.com/in/gael-tournier32",
                    "https://github.com/FlyingCow31",
                    "https://epistudio.fr",
               ],
               knowsAbout: [
                    { "@type": "Thing", name: "Next.js", sameAs: "https://en.wikipedia.org/wiki/Next.js" },
                    { "@type": "Thing", name: "React", sameAs: "https://en.wikipedia.org/wiki/React_(software)" },
                    { "@type": "Thing", name: "TypeScript", sameAs: "https://en.wikipedia.org/wiki/TypeScript" },
                    { "@type": "Thing", name: "Tailwind CSS", sameAs: "https://en.wikipedia.org/wiki/Tailwind_CSS" },
                    "Search engine optimization",
                    "Web design",
               ],
               knowsLanguage: ["fr", "en"],
               worksFor: { "@id": IDS.business },
               memberOf: { "@type": "Organization", name: "EPI Studio", url: "https://epistudio.fr" },
          },
     ],
}

export function JsonLdScript({ data }: { data: object }) {
     return (
          <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
          />
     )
}

export default function JsonLd() {
     return <JsonLdScript data={graph} />
}
