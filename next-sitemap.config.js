// next-sitemap.config.js
const fs = require('fs');
const path = require('path');

// Dynamic pages (/phone/[id], /brand/[brand]) are not found by next-sitemap on its own.
function dynamicPaths() {
  const src = fs.readFileSync(path.join(__dirname, 'lib', 'phone-data.ts'), 'utf8');
  const ids = [...new Set([...src.matchAll(/id:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]))];
  const brands = ['apple', 'samsung', 'google'];
  return [
    ...brands.map((b) => `/brand/${b}`),
    ...ids.map((id) => `/phone/${id}`),
  ];
}

module.exports = {
  additionalPaths: async (config) =>
    Promise.all(dynamicPaths().map((p) => config.transform(config, p))),
  siteUrl: 'https://www.contreat.in',
  generateRobotsTxt: true,
  // No lastmod: a build-time "now" on every page tells Google nothing and makes
  // it ignore the field. Blog posts keep their real publish dates in Article data.
  autoLastmod: false,
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1.0 : path.startsWith('/brand/') ? 0.9 : 0.8,
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};

// Alternative approach if you're getting lastmod from external source:
// module.exports = {
//   siteUrl: 'https://your-domain.com',
//   generateRobotsTxt: true,
//   transform: async (config, path) => {
//     let lastmod = new Date().toISOString(); // Default
    
//     try {
//       // If pageLastMod comes from database/API
//       const pageLastMod = await getPageLastModifiedDate(path);
      
//       if (pageLastMod) {
//         // Convert string to Date if needed
//         const date = new Date(pageLastMod);
//         if (!isNaN(date.getTime())) {
//           lastmod = date.toISOString();
//         }
//       }
//     } catch (error) {
//       console.warn(`Could not get lastmod for ${path}:`, error);
//     }
    
//     return {
//       loc: path,
//       lastmod,
//       changefreq: 'daily',
//       priority: path === '/' ? 1.0 : 0.8,
//     };
//   },
// };