/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing settings - kept exactly as they are
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Phone photos are hot-linked from these sites. Next/Image resizes them,
    // converts them to WebP and serves them from contreat.in (no third-party cookies).
    remotePatterns: [
      'fdn2.gsmarena.com',
      'm.media-amazon.com',
      'images-eu.ssl-images-amazon.com',
      'images-cdn.ubuy.co.in',
      's3bg.cashify.in',
      'fonezone.me',
      'cashsecond.s3.ap-south-1.amazonaws.com',
      'www.neolight.in',
      'mobitez.in',
      'i.gadgets360cdn.com',
      'cdsassets.apple.com',
    ].map((hostname) => ({ protocol: 'https', hostname })),
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 2678400, // 31 days; the source photos never change
  },

  // SEO Performance optimizations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  // SEO Headers for better rankings
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      }
    ]
  },

  // Only essential redirects for your actual URLs - no empty pages
  async redirects() {
    return [
      // Only redirect the most common search terms to your real pages
      {
        source: '/sell-iphone',
        destination: '/brand/apple',
        permanent: true,
      },
      {
        source: '/sell-samsung',
        destination: '/brand/samsung',
        permanent: true,
      },
      {
        source: '/sell-google-phone',
        destination: '/brand/google',
        permanent: true,
      },
      {
        source: '/sell-pixel',
        destination: '/brand/google',
        permanent: true,
      },
      // Specific phone model redirects to your actual phone pages
      {
        source: '/sell-iphone-16',
        destination: '/phone/used-iphone-16',
        permanent: true,
      },
      {
        source: '/sell-iphone-13',
        destination: '/phone/used-iphone-13',
        permanent: true,
      },
      {
        source: '/sell-pixel-9-pro',
        destination: '/phone/used-pixel-9-pro',
        permanent: true,
      },
      {
        source: '/sell-galaxy-s23',
        destination: '/phone/used-galaxy-s23',
        permanent: true,
      },
      // Old/other phones catch-all
      {
        source: '/sell-old-phone',
        destination: '/brand/all-other-phones',
        permanent: true,
      },
      {
        source: '/sell-other-phones',
        destination: '/brand/all-other-phones',
        permanent: true,
      },
    ]
  },

  // Clean URLs matching your exact structure
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      },
      {
        source: '/robots.txt',
        destination: '/api/robots'
      },
    ]
  },

  // SEO Environment variables
  env: {
    SITE_URL: 'https://contreat.in',
    SITE_NAME: 'Contreat - Sell Old Phone | Best Price for Second Hand Phones',
    SITE_DESCRIPTION: 'Sell your old phone to Contreat.in and get the best price instantly. We buy second hand phones, used smartphones with free pickup across India. Get cash for your old mobile phone today!',
    SITE_KEYWORDS: 'sell old phone, sell second hand phone, sell used mobile, sell iPhone, sell Samsung, sell Google Pixel, phone buyer India, cash for phone, used iPhone 16, used iPhone 13, used Pixel 9 Pro, used Galaxy S23',
  },

  // No trailing slashes for consistent URLs
  trailingSlash: false,
}

export default nextConfig