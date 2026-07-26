export default function JsonLd() {
     const data = {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gaël Tournier",
          jobTitle: "Développeur Web Freelance",
          url: "https://gaeltournier.dev",
          sameAs: ["www.linkedin.com/in/gael-tournier32", "https://github.com/FlyingCow31"],
          knowsAbout: ["Next.js", "React", "TypeScript", "Node.js"],
     }

     return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
