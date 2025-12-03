import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable SSR/ISR on Netlify
  // This allows server-side caching to work properly
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
