// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const withVideos = require('next-videos')

// module.exports = withVideos()

/** @type {import('next').NextConfig} */

const repo = 'vawebsite'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: { unoptimized: true },
}
  
const withVideos = require('next-videos')

module.exports = withVideos(nextConfig);
  