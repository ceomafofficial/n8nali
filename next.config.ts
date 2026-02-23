import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  eslint: {
    // Next.js 15.1.0 does not support ESLint 9 flat config during build.
    // Run `npx eslint .` separately for linting.
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
