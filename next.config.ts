import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR enabled for Netlify serverless functions
  // This allows API routes with server-side caching
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
