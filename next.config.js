/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [{
      source: "/shop/:id",
      destination: "/productDetails"
    }]
  }
}

module.exports = nextConfig
