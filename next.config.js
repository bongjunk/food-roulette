/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: '/food-roulette',
};

module.exports = nextConfig;
