import type { NextConfig } from "next";

//config
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "4qmsniikf1.ufs.sh"
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
