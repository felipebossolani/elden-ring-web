import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eldenring.fanapis.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/elden-ring-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/elden-ring-web/' : '',
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
};

export default nextConfig;
