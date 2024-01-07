/** @type {import('next').NextConfig} */
const nextConfig = {
  esmExternals: false,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
