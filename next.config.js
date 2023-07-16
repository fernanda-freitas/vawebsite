/** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false
// const repo = 'vawebsite'
// let basePath = ''

// if (isGithubActions) {
//   basePath = `/${repo}`
// }
// const nextConfig = {
//   output: 'export',
//   basePath: basePath,
//   images: { unoptimized: true },
// }
  
// const withVideos = require('next-videos')
// module.exports = withVideos(nextConfig);


const isGithubActions = process.env.GITHUB_ACTIONS || false

const repo = 'vawebsite'
let basePath = ''

if (isGithubActions) {
  basePath = `/${repo}`
}
const assetPrefix = isGithubActions ? `/${repo}/` : ``

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: { unoptimized: true },
}
  
const withVideos = require('next-videos')
module.exports = withVideos(nextConfig);