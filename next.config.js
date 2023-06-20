/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  output: isProd ? 'export' : 'standalone',
  assetPrefix: isProd ? 'https://bongjunk.github.io/food-roulette' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
