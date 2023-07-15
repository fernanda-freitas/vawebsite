// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const withVideos = require('next-videos')

// module.exports = withVideos()

/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/github-pages',
}
  
const withVideos = require('next-videos')

module.exports = withVideos(nextConfig);
  