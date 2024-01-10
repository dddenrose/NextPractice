/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  babel: {
    presets: ["next/babel"],
    plugins: [["styled-components", { ssr: true }]],
  },
};

module.exports = nextConfig;
