import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "iucn.org",
    }],
    // domains: ["iucn.org"],  this is also correct
  },
};

export default nextConfig;
