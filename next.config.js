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

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: { unoptimized: true },
}
  
const withVideos = require('next-videos')
module.exports = withVideos(nextConfig);