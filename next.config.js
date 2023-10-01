/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   }

  //   return config
  // },
  images: {
    domains: ['images.pexels.com', 'www.pexels.com'],
  },

}

module.exports = nextConfig

