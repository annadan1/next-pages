/** @type {import('next').NextConfig} */

const isProduction = process.env.ENVIRONMENT === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(isProduction
    ? {
        basePath: '/next-pages',
      }
    : {}),
  env: {
    MAIN_URL: process.env.MAIN_URL,
    DOMAIN: process.env.DOMAIN,
  },
  sassOptions: {
    additionalData: `
      @import "src/assets/styles/function.scss";
      @import "src/assets/styles/media.scss";
    `,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: process.env.DOMAIN,
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
