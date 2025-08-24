// Function to get images for each URL path
function getImagesForPath(path) {
  const images = [];
  
  // Homepage images
  if (path === '/') {
    images.push({
      loc: 'https://selloldphone.com/images/hero/sell-phone-banner.jpg',
      caption: 'Sell old phone online for instant cash - Best mobile buyback platform in India',
      title: 'Sell Old Phone Online India'
    });
    images.push({
      loc: 'https://selloldphone.com/images/hero/mobile-calculator.jpg',
      caption: 'Mobile resale value calculator - Get instant quote for your used phone',
      title: 'Mobile Resale Value Calculator'
    });
  }

  // Brand pages
  if (path.startsWith('/brand/')) {
    const brandImages = {
      apple: {
        logo: 'https://selloldphone.com/images/brands/apple-logo.jpg',
        banner: 'https://selloldphone.com/images/brands/sell-used-iphone.jpg'
      },
      samsung: {
        logo: 'https://selloldphone.com/images/brands/samsung-logo.jpg',
        banner: 'https://selloldphone.com/images/brands/sell-used-samsung.jpg'
      },
      google: {
        logo: 'https://selloldphone.com/images/brands/google-pixel-logo.jpg',
        banner: 'https://selloldphone.com/images/brands/sell-used-pixel.jpg'
      }
    };

    const brand = path.split('/')[2];
    if (brandImages[brand]) {
      images.push({
        loc: brandImages[brand].logo,
        caption: `Sell your old ${brand} phone at best price`,
        title: `${brand.charAt(0).toUpperCase() + brand.slice(1)} Phone Resale`
      });
      images.push({
        loc: brandImages[brand].banner,
        caption: `Sell used ${brand} phones with instant cash payment`,
        title: `Sell Used ${brand.charAt(0).toUpperCase() + brand.slice(1)}`
      });
    }
  }

  // Blog pages
  if (path.startsWith('/blog/')) {
    const blogImages = {
      'sell-old-phone-online-india': {
        banner: 'https://selloldphone.com/images/blog/sell-phone-online-banner.jpg',
        content: 'https://selloldphone.com/images/blog/phone-price-comparison.jpg'
      },
      'best-phones-to-sell-2024': {
        banner: 'https://selloldphone.com/images/blog/best-phones-2024.jpg',
        content: 'https://selloldphone.com/images/blog/phone-resale-value-chart.jpg'
      },
      'mobile-buyback-india-guide': {
        banner: 'https://selloldphone.com/images/blog/mobile-buyback-process.jpg',
        content: 'https://selloldphone.com/images/blog/instant-cash-phones.jpg'
      }
    };

    const blogSlug = path.split('/')[2];
    if (blogImages[blogSlug]) {
      images.push({
        loc: blogImages[blogSlug].banner,
        caption: `Complete guide for ${blogSlug.replace(/-/g, ' ')}`,
        title: blogSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      });
      images.push({
        loc: blogImages[blogSlug].content,
        caption: `Detailed information about ${blogSlug.replace(/-/g, ' ')}`,
        title: `${blogSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Guide`
      });
    }
  }

  return images;
}

module.exports = { getImagesForPath };
