import type { NextConfig } from "next"

const nextConfig: NextConfig = {
     async redirects() {
          return [
               {
                    source: "/portfolio/pannel",
                    destination: "/portfolio/case-study/webdevpanel",
                    permanent: true,
               },
               {
                    source: "/portfolio/panelgestionentreprise",
                    destination: "/portfolio/case-study/webdevpanel",
                    permanent: true,
               },
               {
                    source: "/portfolio/epistudios",
                    destination: "/portfolio/projects/epistudio",
                    permanent: true,
               },
               {
                    source: "/portfolio/epistudio",
                    destination: "/portfolio/projects/epistudio",
                    permanent: true,
               },
               {
                    source: "/portfolio/case-study/epistudio",
                    destination: "/portfolio/projects/epistudio",
                    permanent: true,
               },
               {
                    source: "/portfolio/flyingtodo",
                    destination: "/portfolio/projects/flyingtodo",
                    permanent: true,
               },
               {
                    source: "/portfolio/projects/panelgestionentreprise",
                    destination: "/portfolio/case-study/webdevpanel",
                    permanent: true,
               },
          ]
     },
}

export default nextConfig
