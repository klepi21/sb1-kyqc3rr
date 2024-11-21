/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/ElrondNetwork/assets/**',
      }
    ]
  },
  transpilePackages: ['lucide-react'],
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  }
}

module.exports = nextConfig