// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const withVideos = require('next-videos')

// module.exports = withVideos()

/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/vawebsite',
}
  
const withVideos = require('next-videos')

module.exports = withVideos(nextConfig);
  