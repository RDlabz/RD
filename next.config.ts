import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      }
    ];
  },
  // Optional: ensure consistent URLs
  trailingSlash: true,
};

export default nextConfig;