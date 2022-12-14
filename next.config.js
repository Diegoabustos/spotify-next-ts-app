/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
  swcMinify: true,
  images: {
    domains:  ["i.scdn.co"]
  }
}

module.exports = nextConfig
