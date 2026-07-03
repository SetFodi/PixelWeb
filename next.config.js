/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only the site's own domain is allowed through the image optimizer.
    // All next/image sources are local (/images/*); a wildcard host would let
    // the optimizer proxy arbitrary remote hosts, which we don't need.
    remotePatterns: [
      { protocol: 'https', hostname: 'pixelweb.ge' },
      { protocol: 'https', hostname: 'www.pixelweb.ge' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pixelweb.ge',
          },
        ],
        destination: 'https://pixelweb.ge/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

