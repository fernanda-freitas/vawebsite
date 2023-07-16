/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = ''

if (isGithubActions) {
  basePath = "/vawebsite"
}

console.log(process.env.GITHUB_ACTIONS)
console.log(process.env)

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: { unoptimized: true },
}
  
const withVideos = require('next-videos')
module.exports = withVideos(nextConfig);