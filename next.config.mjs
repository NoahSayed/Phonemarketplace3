import { readFileSync } from 'node:fs'

// Every image host used in lib/phone-data.ts, so adding a phone never needs a config change.
const imageHosts = [
  ...new Set(
    [...readFileSync(new URL('./lib/phone-data.ts', import.meta.url), 'utf8').matchAll(/https:\/\/([^/"']+)\//g)].map((m) => m[1]),
  ),
]

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
    // Phone photos are hot-linked from other sites. Next/Image resizes them,
    // converts them to WebP and serves them from contreat.in (no third-party cookies).
    remotePatterns: imageHosts.map((hostname) => ({ protocol: 'https', hostname })),
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
        source: '/blog/best-phones-to-sell-2024',
        destination: '/blog/best-phones-to-sell',
        permanent: true,
      },
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