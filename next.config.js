/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  output: isProd ? 'export' : 'standalone',
  assetPrefix: isProd ? '/food-roulette' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
