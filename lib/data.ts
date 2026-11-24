import type { Metadata } from "next"

export interface ProjectImage {
     src: string
     alt: string
     title?: string
     description?: string
     width: number
     height: number
}

interface ProjectFeature {
     title: string
     description: string
}

interface TechnologyItem {
     title: string
     description: string
}

interface TechnologyGroup {
     title: string
     color: string
     items: TechnologyItem[]
}

export interface ProjectData {
     study?: boolean
     slug: string
     type: string
     scale?: string
     title: string
     description: string
     heroDescription: string
     tags: string[]
     metadata: Metadata
     structuredData: {
          type: "CreativeWork" | "WebSite" | "SoftwareApplication"
          name: string
          description: string
          path: string
          image: string
          keywords: string[]
          liveUrl?: string
     }
     images: ProjectImage[]
     icon?: ProjectImage
     challenge?: string
     solution?: string
     stats?: { main: string; secondary: string }[]
     features?: ProjectFeature[]
     technologies: {
          description?: string
          tags: string[]
          groups?: TechnologyGroup[]
     }
     link: { label: string; url: string }
}

export const projects = [
     {
          study: true,
          slug: "webdevpanel",
          type: "Outil Webapp",
          title: "WEB-DEV PANEL",
          description:
               "Panel de gestion de micro-entreprise spécialisée dans le développement web. Espace client, comptabilité, suivi de commandes, documents et bien plus!",
          heroDescription:
               "Panel de gestion de micro-entreprise spécialisée dans le développement web. Espace client, comptabilité, suivi de commandes, documents et bien plus! Projet open-source réalisé par Gaël Tournier.",
          tags: ["FULLSTACK", "NEXT.JS", "Vercel CRON", "API"],
          metadata: {
               metadataBase: new URL("https://gaeltournier.dev/"),
               title: "Web-Dev Panel | Gaël Tournier",
               description:
                    "Découvrez Web-Dev Panel, une webapp de gestion d'entreprise, spécialisée pour les développeurs et hébergeurs. Gestion des finances, espace client, todos et bien plus!",
               alternates: { canonical: "/portfolio/case-study/webdevpanel" },
               openGraph: {
                    title: "Web-Dev Panel | Gaël Tournier.",
                    url: "/portfolio/case-study/webdevpanel",
                    description:
                         "Découvrez Web-Dev Panel, un espace de gestion d'entreprise de développement.Projet fullstack en Next.Js et API.",
                    type: "website",
                    locale: "fr_FR",
                    siteName: "Gaël Tournier",
                    images: [{ url: "/webdevpanel/indexPanel-anonymise.png", width: 1200, height: 630 }],
               },
               twitter: { card: "summary_large_image" },
          },
          structuredData: {
               type: "WebSite",
               name: "Web-Dev Panel",
               description:
                    "Découvrez Web-Dev Panel, une webapp de gestion d'entreprise, spécialisée pour les développeurs et hébergeurs. Gestion des finances, espace client, todos et bien plus!",
               path: "/portfolio/case-study/webdevpanel",
               image: "/webdevpanel/indexPanel-anonymise.png",
               keywords: ["Next.js", "React", "Tailwind CSS", "Node.js", "Webapp"],
               liveUrl: "https://panel.gaeltournier.dev",
          },
          images: [
               {
                    src: "/webdevpanel/indexPanel-anonymise.png",
                    alt: "Page d'accueil du panel WebDev",
                    title: "Page d'accueil",
                    description:
                         "Design de l'index dans mon style de référence. Toutes les données sont fonctionnelles et chacune a son action spécifique. La navbar est réactive aux nombres de projets et todos, ainsi qu'aux sites down.",
                    width: 1000,
                    height: 1000,
               },
               {
                    src: "/webdevpanel/panelfinances.png",
                    alt: "Page de suivi des finances du panel WebDev",
                    title: "Suivi des finances",
                    description:
                         "Suivi des finances de l'entreprise; Un abattement de 20% est appliqué au bénéfice (taxes avec l'ACRE). Le graphique se dessine quand le projet est clôturé (paiement en entier.)",
                    width: 1000,
                    height: 1000,
               },
               {
                    src: "/webdevpanel/espaceclientpanel.png",
                    alt: "Espace client panel WebDev",
                    title: "Espace client",
                    description:
                         "Seule page visible du client: suivi de son projet et de ses avancées, hub de documents et contact direct.",
                    width: 1000,
                    height: 1000,
               },
          ],
          challenge:
               "Un panel qui soit fluide, qui soit facile à utiliser pour favoriser l'utilisation quotidienne et remplacer différentes appli lourdes comme Notion ou Google Drive. L'efficacité du panel client est primordiale et les features doivent être sécurisées pour favoriser l'utilisation par de réels utilisateurs.",
          solution:
               "Utilisation de Next.Js et de son système de cache pour privilégier le long terme. Sans changement, le cache reste actif un jour par défaut pour la data utilisée tous les jours. Le panel client utilise un système de reset password, envoyé par mail au client lors de la création de l'utilisateur. Cela rends le panel sécurisé et renforce la confiance du client.",
          stats: [
               { main: "Néo-Brutaliste", secondary: "Design" },
               { main: "Next.Js", secondary: "Stack principale" },
               { main: "Caching", secondary: "Feature phare" },
               { main: "JWT/Redis/Zod", secondary: "Sécurité" },
          ],
          technologies: {
               tags: ["FULLSTACK", "NEXT.JS", "DESIGN"],
               groups: [
                    {
                         title: "Front-End",
                         color: "#87CEEB",
                         items: [
                              {
                                   title: "Next.JS",
                                   description: "Rapidité, facilité et lisibilité pour un projet Open-Source.",
                              },
                              {
                                   title: "React.JS",
                                   description: "Simplicité de code grâce aux components et à sa syntaxe en TS.",
                              },
                              {
                                   title: "Claude AI",
                                   description:
                                        "Entraînement de Claude à mes façons de coder, à ma stack et à mon style.",
                              },
                         ],
                    },
                    {
                         title: "Back-End",
                         color: "#90EE90",
                         items: [
                              {
                                   title: "Sécurité",
                                   description:
                                        "Construit à la main; Token de session avec JWT et mot de passe hashé pour garantir la sécurité. Rate limiting et isolation de donnée SQL.",
                              },
                              {
                                   title: "Design du backend",
                                   description:
                                        "Le backend est designé et maintenu par moi-même, pour de réels utilisateurs;",
                              },
                              {
                                   title: "Disclaimer IA",
                                   description:
                                        "Le front-end a été réalisé par Claude, le back-end a été codé à la main. Plus d'infos en premières lignes du Github.",
                              },
                         ],
                    },
                    {
                         title: "DevOps & Design",
                         color: "#F4D738",
                         items: [
                              {
                                   title: "Data modelling",
                                   description:
                                        "Focus sur la conceptualisation d'une base de donnée grâce à la méthode MERISE (MCD/MLD). RESTRICT et CASCADE sur la BDD. Accessible sur le repo Github.",
                              },
                              {
                                   title: "Automatisation & Intégration API",
                                   description:
                                        "Un 'CRON job' tous les trois jours pour la partie monitoring pour la partie SSL, et un call Google API pour les scores de performance. ",
                              },
                              {
                                   title: "Déploiement serverless",
                                   description:
                                        "Base de donnée serverless (Neon), déploiement automatique et stockage Blob. ",
                              },
                         ],
                    },
               ],
          },
          link: { label: "Découvrez le repo Github", url: "https://github.com/FlyingCow31/WebDev-Panel" },
     },
     // EPI STUDIO
     {
          study: false,
          slug: "epistudio",
          type: "Site Web",
          scale: "Projet Client",
          title: "EPISTUDIO.FR",
          description:
               "Site vitrine pour l'association EPI STUDIO. Design, front-end et back-end, ainsi qu'un vrai travail d'équipe.",
          heroDescription:
               "Design professionnel, pages simples et développement fullstack: EPI Studio avait besoin qu'on représente sa marque et ses valeurs dans un site web. Projet réalisé par Gaël Tournier.",
          tags: ["FULLSTACK", "NEXT.JS", "DESIGN"],
          metadata: {
               metadataBase: new URL("https://gaeltournier.dev/"),
               title: "Site internet pour une association | Gaël Tournier",
               description:
                    "Découvrez EpiStudio, le site web que j'ai développé pour l'association de création de contenu open-source. Design, développement fullstack en Next.JS et déploiement.",
               alternates: { canonical: "/portfolio/projects/epistudio" },
               openGraph: {
                    title: "Site internet pour une association | Gaël Tournier.",
                    url: "/portfolio/projects/epistudio",
                    description:
                         "Découvrez EpiStudio, un site web pour une association de développeurs. Design, développement fullstack Next.Js et déploiement.",
                    type: "website",
                    locale: "fr_FR",
                    siteName: "Gaël Tournier",
                    images: [{ url: "/epistudios/indexepi.png", width: 1200, height: 630 }],
               },
               twitter: { card: "summary_large_image" },
          },
          structuredData: {
               type: "WebSite",
               name: "EpiStudio.fr",
               description:
                    "Site vitrine pour l'association EPI STUDIO : design, développement fullstack en Next.js et déploiement.",
               path: "/portfolio/projects/epistudio",
               image: "/epistudios/indexepi.png",
               keywords: ["Next.js", "React", "Tailwind CSS", "Node.js", "site vitrine"],
               liveUrl: "https://epistudio.fr",
          },
          images: [
               {
                    src: "/epistudios/indexepi.png",
                    alt: "Page d'accueil",
                    width: 1000,
                    height: 1000,
               },
          ],
          features: [
               {
                    title: "Parcours UI/UX optimisée",
                    description:
                         "Le site est est optimisé pour les besoins de l'association: elle avait besoin qu'un visiteur comprenne de suite la nature de l'association. Le design épuré et stylisé du site permet de se démarquer, tandis-ce que le formulaire de recrutement, géré par SMTP, permet d'optimiser les candidatures. Un client peut ainsi prendre commande facilement sans pénaliser le parcours UI/UX d'un potentiel candidat.",
               },
          ],
          technologies: {
               description:
                    "Front-end en React avec Next.JS, backend en Node.JS utilisant le protocole SMTP sécurisé pour l'envoi de données. Animations en CSS (Tailwind).",
               tags: ["Tailwind CSS", "Next.Js", "Node.JS", "SMTP"],
          },
          link: { label: "Visitez le site web", url: "https://epistudio.fr" },
     },
     // FlyingTodo
     {
          slug: "flyingtodo",
          type: "Software",
          scale: "Projet Personnel",
          title: "FLYINGTODO",
          description:
               "Notion a trop de features, on s'y perd. J'ai créé une application simple pour organiser mes projets et ma journée.",
          heroDescription:
               "Logiciel de gestion de projet avec Todo List intégrée, avec un focus sur la simplicité. Projet réalisé par Gaël Tournier.",
          tags: ["ELECTRON", "JAVASCRIPT", "DEPLOIEMENT"],
          metadata: {
               metadataBase: new URL("https://gaeltournier.dev/"),
               title: "Application web todolist desktop | Gaël Tournier, développeur freelance à Toulouse",
               description:
                    "Découvrez FlyingTodo, un logiciel Electron de gestion de projet avec Todo List intégrée. Focus sur la simplicité et l'efficacité.",
               alternates: { canonical: "/portfolio/projects/flyingtodo" },
               openGraph: {
                    title: "WebApp Todolist desktop | Gaël Tournier.",
                    url: "/portfolio/projects/flyingtodo",
                    description:
                         "Découvrez FlyingTodo, un logiciel Electron de gestion de projet avec Todo List intégrée!",
                    type: "website",
                    locale: "fr_FR",
                    siteName: "Gaël Tournier",
                    images: [{ url: "/flyingtodoscreen.png", width: 1200, height: 630 }],
               },
               twitter: { card: "summary_large_image" },
          },
          structuredData: {
               type: "SoftwareApplication",
               name: "FlyingTodo",
               description:
                    "logiciel Electron de gestion de projet avec Todo List intégrée. Focus sur la simplicité et l'efficacité.",
               path: "/portfolio/projects/flyingtodo",
               image: "/flyingtodoscreen.png",
               keywords: ["Electron", "Javascript", "CSS", "Node.js", "Application"],
               liveUrl: "https://github.com/FlyingCow31/FlyingToDo",
          },
          images: [
               {
                    src: "/flyingtodoscreen.png",
                    alt: "Page d'accueil de l'application FlyingTodo",
                    width: 840,
                    height: 840,
               },
          ],
          icon: {
               src: "/iconflyingtodovraie-6.png",
               alt: "Icône de l'application FlyingTodo",
               width: 256,
               height: 256,
          },
          features: [
               {
                    title: "La simplicité avant tout",
                    description:
                         "La feature principale est la simplicité: le but de cette application est d'avoir le moins de friction possible entre l'ouverture et la création de TODO. Stockage en local grâce à une DB orientée web. Intégration de la prise de note, ainsi que d'outils tels que les tags pour organiser ses tâches et ses projets plus efficacement.",
               },
          ],
          technologies: {
               description:
                    "Interface en Raw JS/HTML/CSS; Electron pour un build simple et accessible sur windows; Dexie.JS pour une DB orientée Web, simple à découvrir et fiable.",
               tags: ["ELECTRON", "JAVASCRIPT", "DEXIE.JS"],
          },
          link: { label: "Découvrez le Projet", url: "https://github.com/FlyingCow31/FlyingToDo" },
     },
     // StylHome
     {
          slug: "stylhome",
          type: "Site Web",
          scale: "Projet Client",
          title: "STYL'HOME",
          description: "Site internet pour une entreprise de peinture en batiment.",
          heroDescription:
               "Site internet pour une entreprise de peinture en batiment au design premium et moderne. Projet réalisé par Gaël Tournier.",
          tags: ["NEXT.JS", "DESIGN", "SEO"],
          metadata: {
               metadataBase: new URL("https://gaeltournier.dev"),
               title: "Site pour un peintre en batiment | Gaël Tournier, développeur à Toulouse",
               description: "Découvre un site moderne et épuré mais qui garde son propre charme face aux autres sites.",
               alternates: { canonical: "/portfolio/projects/stylhome" },
               openGraph: {
                    title: "Site Peintre en Batiment | Gaël Tournier.",
                    description:
                         "Découvre un site moderne et épuré mais qui garde son propre charme face aux autres sites.",
                    url: "/portfolio/projects/stylhome",
                    type: "website",
                    locale: "fr_FR",
                    siteName: "Gaël Tournier",
                    images: [{ url: "/stylhome/stylhomeindex.png", width: 1200, height: 630 }],
               },
               twitter: { card: "summary_large_image" },
          },
          structuredData: {
               type: "WebSite",
               name: "StylHome",
               description: "Site web pour une entreprise de peinture en batiment. Design moderne et premium.",
               path: "/portfolio/projects/stylhome",
               image: "/stylhome/stylhomeindex.png",
               keywords: ["Site Web", "Typescript", "Next.Js", "SEO", "Design"],
               liveUrl: "https://stylhome.fr",
          },
          images: [
               {
                    src: "/stylhome/stylhomeindex.png",
                    alt: "Page d'accueil du site Stylhome",
                    width: 840,
                    height: 840,
               },
               {
                    src: "/stylhome/stylhomegalerie.png",
                    alt: "Galerie du site Stylhome",
                    width: 840,
                    height: 840,
               },
               {
                    src: "/stylhome/stylhomecontact.png",
                    alt: "Page de contact du site Stylhome",
                    width: 840,
                    height: 840,
               },
          ],
          icon: {
               src: "/stylhome/logostylhome-cropped.webp",
               alt: "Logo du site web Stylhome",
               width: 334,
               height: 334,
          },
          features: [
               {
                    title: "Design moderne mais parlant",
                    description:
                         "Avec ce site, j'ai voulu créer un design moderne et premium, puisque c'est la ligne éditoriale de mon client, mais sans faire un site comme les autres. J'ai donc adopté une typographique manuscrite avec des couleurs proche du beige, du bleu royal et d'un beige/marron. Ce design colle avec la focalisation sur la finition du client. ",
               },
          ],
          technologies: {
               description:
                    "Design d'abord créé sur Figma puis codé avec React sur Next.Js. API en Typescript utilisant un serveur SMTP pour l'envoi de mail, ce qui réduit les coûts de mon client. Optimisation SEO ciblée à Lille et alentours.",
               tags: ["SEO", "Typescript", "Design"],
          },
          link: { label: "Découvrez le Projet", url: "https://stylhome.fr" },
     },
] satisfies ProjectData[]
