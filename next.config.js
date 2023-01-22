/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "www.cpokemon.com"],
  },
};

module.exports = nextConfig;
