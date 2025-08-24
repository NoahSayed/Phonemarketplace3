const { getImagesForPath } = require('./lib/sitemap-helpers');
const { getLastModified } = require('./lib/lastmod-dates');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://selloldphone.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    // Get images and lastmod date in parallel for performance
    const [pageImages, pageLastMod] = await Promise.all([
      getImagesForPath(path),
      getLastModified(path)
    ]);

    // Custom transform function to set different priorities and changefreq based on path
    const priorityMap = {
      '/': 1.0,
      '/about': 0.8,
      '/contact': 0.7,
      '/buy-phone': 0.9,
      '/blog': 0.8,
    };

    // Set different priorities for different sections
    const priority = 
      path.startsWith('/brand/apple') ? 0.9 :
      path.startsWith('/brand/samsung') ? 0.9 :
      path.startsWith('/brand/google') ? 0.9 :
      path.startsWith('/brand/') ? 0.8 :
      path.startsWith('/blog/') ? 0.7 :
      priorityMap[path] || 0.5;

    // Set different change frequencies based on content type
    const changefreq = 
      path === '/' ? 'daily' :
      path.startsWith('/brand/') ? 'weekly' :
      path.startsWith('/blog/') ? 'monthly' :
      path.includes('privacy') || path.includes('terms') ? 'yearly' :
      'weekly';

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: pageLastMod.toISOString(),
      alternateRefs: [],
      images: pageImages
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    
    // Add additional dynamic paths here
    const phones = [
      { brand: 'apple', models: ['iphone-16', 'iphone-15', 'iphone-14', 'iphone-13', 'iphone-12'] },
      { brand: 'samsung', models: ['galaxy-s25', 'galaxy-s24', 'galaxy-s23', 'galaxy-s22'] },
      { brand: 'google', models: ['pixel-9', 'pixel-8', 'pixel-7', 'pixel-6'] }
    ];

    phones.forEach(({ brand, models }) => {
      models.forEach((model) => {
        result.push({
          loc: `/brand/${brand}/${model}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: getLastModified(`/brand/${brand}/${model}`).toISOString()
        });
      });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private', '/admin', '/dashboard']
      }
    ],
    additionalSitemaps: [
      'https://selloldphone.com/server-sitemap.xml',
    ]
  },
  sitemapSize: 5000,
}
