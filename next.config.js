/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '/next-pages',
  output: 'export',
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
    remotePatterns: [
      {
        hostname: process.env.DOMAIN,
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
