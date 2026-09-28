export default function JsonLd() {
     const data = {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Gaël Tournier",
          image: "https://gaeltournier.dev/og-image.png",
          url: "https://gaeltournier.dev",
          email: "contact@gaeltournier.dev",
          address: {
               "@type": "PostalAddress",
               streetAddress: "2 Pl. de l'Aigoual",
               addressLocality: "Colomiers",
               postalCode: "31770",
               addressCountry: "FR",
          },
          founder: { "@id": "https://gaeltournier.dev/#person" },
          areaServed: ["France", "Toulouse", "Colomiers", "Occitanie", "worldwide"],
          priceRange: "500€ - 5000€",
          sameAs: ["https://www.linkedin.com/in/gael-tournier32", "https://github.com/FlyingCow31"],
          description:
               "Développeur web freelance spécialisé en Next.js, React et TypeScript. Création de sites web et applications sur-mesure à Toulouse.",
          serviceType: ["Développement Web", "Applications Web sur-mesure", "Direction de projet", "Software"],
     }

     const person = {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://gaeltournier.dev/#person",
          name: "Gaël Tournier",
          url: "https://gaeltournier.dev",
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
               { "@type": "Thing", name: "Rust", sameAs: "https://en.wikipedia.org/wiki/Rust_(programming_language)" },
               "Search engine optimization",
               "Web design",
          ],
          knowsLanguage: ["fr", "en"],
          worksFor: { "@type": "Organization", name: "EPI Studio", url: "https://epistudio.fr" },
     }

     return (
          <>
               <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
               <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
          </>
     )
}
