import type { NextConfig } from "next"

const nextConfig: NextConfig = {
     async redirects() {
          return [{ source: "/portfolio/pannel", destination: "/portfolio/panelgestionentreprise", permanent: true }]
     },
}

export default nextConfig
