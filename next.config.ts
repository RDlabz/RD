import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
        {
            source: '/',
            destination: '/en/',
            permanent: true,
        },
        {
            source: '/:lang(en)',
            destination: '/:lang/',
            permanent: false,
        },
    ]
  }
};

export default nextConfig;
