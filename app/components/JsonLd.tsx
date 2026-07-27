export default function JsonLd() {
     const data = {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Gaël Tournier — Développeur Web Freelance",
          image: "https://gaeltournier.dev/LogoGaelPortfolio.png",
          url: "https://gaeltournier.dev",
          email: "contact@gaeltournier.dev",
          address: {
               "@type": "PostalAddress",
               addressLocality: "Toulouse",
               addressCountry: "FR",
          },
          founder: {
               "@type": "Person",
               name: "Gaël Tournier",
          },
          areaServed: "FR",
          priceRange: "500€ - 5000€",
          sameAs: ["https://www.linkedin.com/in/gael-tournier32", "https://github.com/FlyingCow31"],
          description:
               "Développeur web freelance spécialisé en Next.js, React et TypeScript. Création de sites web et applications sur-mesure.",
          serviceType: ["Développement Web", "Applications Web sur-mesure", "Direction de projet", "Software"],
     }

     return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
