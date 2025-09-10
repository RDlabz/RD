import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const config: NextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public', // service worker output
  register: true,
  skipWaiting: true,
})(config);
