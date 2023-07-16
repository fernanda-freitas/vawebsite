/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = 'vawebsite'
let basePath = ''

if (isGithubActions) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}
const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: { unoptimized: true },
}
  
const withVideos = require('next-videos')
module.exports = withVideos(nextConfig);