/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "src/assets/styles/function.scss";
      @import "src/assets/styles/media.scss";
    `,
  },
};

export default nextConfig;
