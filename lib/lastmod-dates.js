// Map of static pages with their last modified dates
const staticPageDates = {
  '/': '2025-08-23', // Homepage - update when major changes happen
  '/about': '2025-08-23',
  '/contact': '2025-08-23',
  '/buy-phone': '2025-08-23',
  '/privacy-policy': '2025-08-23',
  '/terms-of-service': '2025-08-23',
  '/refund-policy': '2025-08-23'
};

// Map of blog posts with their publish/update dates
const blogPostDates = {
  '/blog/sell-old-phone-online-india': '2025-08-23',
  '/blog/best-phones-to-sell': '2025-08-23',
  '/blog/mobile-buyback-india-guide': '2025-08-23',
  '/blog/samsung-galaxy-z-fold-6-features': '2025-08-15',
  '/blog/google-pixel-9-pro-review': '2025-08-10',
  '/blog/iphone-15-vs-iphone-16-comparison': '2025-08-20'
};

// Phone model release dates
const phoneReleaseDates = {
  'iphone-16': '2025-09-15', // Future release
  'iphone-15': '2024-09-12',
  'iphone-14': '2023-09-07',
  'iphone-13': '2022-09-14',
  'iphone-12': '2021-10-13',
  'galaxy-s25': '2025-02-01', // Future release
  'galaxy-s24': '2024-01-17',
  'galaxy-s23': '2023-02-01',
  'galaxy-s22': '2022-02-09',
  'pixel-9': '2025-10-15', // Future release
  'pixel-8': '2024-10-04',
  'pixel-7': '2023-10-06',
  'pixel-6': '2022-10-19'
};

function getLastModified(path) {
  // Static pages
  if (staticPageDates[path]) {
    return staticPageDates[path];
  }

  // Blog posts
  if (blogPostDates[path]) {
    return blogPostDates[path];
  }

  // Brand listing pages
  if (path === '/brand/apple' || path === '/brand/samsung' || path === '/brand/google') {
    return '2025-08-23'; // Update when new phones are added
  }

  // Phone model pages
  if (path.startsWith('/brand/')) {
    const segments = path.split('/');
    if (segments.length === 4) { // e.g., /brand/apple/iphone-15
      const model = segments[3];
      if (phoneReleaseDates[model]) {
        return phoneReleaseDates[model];
      }
    }
  }

  // Default fallback for other pages
  return '2025-01-01';
}

module.exports = { getLastModified };
