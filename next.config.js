// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.com',
      },
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/predictions/:id',
        destination: '/api/predictions/replicate?id=:id',
      },
    ]
  },
};

module.exports = nextConfig;
