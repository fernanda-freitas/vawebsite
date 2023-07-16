/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = ''

if (isGithubActions) {
  basePath = "/vawebsite"
}

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: { unoptimized: true },
}
  
const withVideos = require('next-videos')
module.exports = withVideos(nextConfig);