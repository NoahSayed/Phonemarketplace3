import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "iphone-16-pro-vs-samsung-s25-ultra",
    title: "iPhone 16 Pro vs Samsung Galaxy S25 Ultra: Complete Comparison 2024",
    excerpt:
      "Detailed comparison of Apple's iPhone 16 Pro and Samsung's Galaxy S25 Ultra. Camera quality, performance, battery life, and value for money analyzed.",
    date: "2024-12-15",
    author: "Tech Expert",
    category: "Comparisons",
    keywords: ["iPhone 16 Pro", "Samsung S25 Ultra", "phone comparison", "best smartphone 2024"],
    readTime: "8 min read",
  },
  {
    id: "sell-old-phone-online-india",
    title: "Sell Old Phone Online India: Best Places for Mobile Buyback 2024",
    excerpt:
      "Complete guide to sell used mobile for cash in India. Compare top mobile buyback platforms, get maximum value for your old smartphone, and sell phone online safely.",
    date: "2024-12-18",
    author: "India Mobile Expert",
    category: "Selling Tips",
    keywords: ["sell old phone online", "sell used mobile for cash", "mobile buyback", "sell phone online India"],
    readTime: "7 min read",
  },
  {
    id: "samsung-galaxy-s24-ultra-features",
    title: "Samsung Galaxy S24 Ultra: All Features and Specifications Explained",
    excerpt:
      "Complete guide to Samsung Galaxy S24 Ultra features including S Pen functionality, camera capabilities, AI features, and performance benchmarks.",
    date: "2024-12-10",
    author: "Mobile Reviewer",
    category: "Reviews",
    keywords: ["Samsung S24 Ultra", "Galaxy features", "S Pen", "smartphone review"],
    readTime: "6 min read",
  },
  {
    id: "best-phones-to-sell-2024",
    title: "Best Phones to Sell in 2024: Maximum Resale Value Guide",
    excerpt:
      "Which smartphones hold their value best? Complete guide to selling your old phone for maximum profit including iPhone, Samsung, and Google Pixel models.",
    date: "2024-12-08",
    author: "Resale Expert",
    category: "Selling Tips",
    keywords: ["sell phone", "phone resale value", "best phones to sell", "smartphone trade-in"],
    readTime: "5 min read",
  },
  {
    id: "mobile-buyback-india-guide",
    title: "Mobile Buyback India: How to Sell Used Mobile for Cash Online",
    excerpt:
      "Step-by-step guide to mobile buyback in India. Learn how to sell old phone online, compare prices, and get instant cash for your used smartphone safely.",
    date: "2024-12-12",
    author: "Buyback Specialist",
    category: "Selling Tips",
    keywords: ["mobile buyback", "sell used mobile for cash", "sell old phone online", "phone buyback India"],
    readTime: "6 min read",
  },
  {
    id: "iphone-15-vs-iphone-16-comparison",
    title: "iPhone 15 vs iPhone 16: Should You Upgrade?",
    excerpt:
      "Comprehensive comparison between iPhone 15 and iPhone 16 series. New features, performance improvements, and whether the upgrade is worth it.",
    date: "2024-12-05",
    author: "Apple Specialist",
    category: "Comparisons",
    keywords: ["iPhone 15", "iPhone 16", "iPhone upgrade", "Apple comparison"],
    readTime: "7 min read",
  },
  {
    id: "google-pixel-9-pro-review",
    title: "Google Pixel 9 Pro: AI Photography and Performance Review",
    excerpt:
      "In-depth review of Google Pixel 9 Pro focusing on AI-powered photography, Magic Eraser, computational photography, and overall performance.",
    date: "2024-12-02",
    author: "Photography Expert",
    category: "Reviews",
    keywords: ["Google Pixel 9 Pro", "AI photography", "Pixel camera", "smartphone photography"],
    readTime: "9 min read",
  },
  {
    id: "samsung-galaxy-z-fold-6-features",
    title: "Samsung Galaxy Z Fold 6: Foldable Phone Revolution",
    excerpt:
      "Complete guide to Samsung Galaxy Z Fold 6 features, multitasking capabilities, durability improvements, and why foldable phones are the future.",
    date: "2024-11-28",
    author: "Foldable Expert",
    category: "Innovation",
    keywords: ["Samsung Z Fold 6", "foldable phone", "Galaxy Fold", "multitasking phone"],
    readTime: "6 min read",
  },
]

const categories = ["All", "Comparisons", "Reviews", "Selling Tips", "Innovation"]

const popularKeywords = [
  "sell old phone online",
  "sell used mobile for cash",
  "mobile buyback",
  "sell phone online India",
  "phone buyback India",
  "cash for old mobile",
  "iPhone 16 Pro",
  "Samsung S25 Ultra",
  "Samsung S24 Ultra",
  "Google Pixel 9 Pro",
  "iPhone 15 vs iPhone 16",
  "Galaxy Z Fold 6",
  "best phone 2024",
  "sell old phone",
  "phone comparison",
  "smartphone review",
  "phone resale value",
  "trade in phone",
  "iPhone camera quality",
  "Samsung features",
  "Pixel photography",
  "phone upgrade guide",
  "best smartphone camera",
  "phone battery life",
  "Android vs iOS",
  "foldable phones",
  "old mobile exchange",
  "smartphone buyback India",
  "sell mobile online cash",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Sell Old Phone Blog - Mobile Buyback Tips & Reviews",
            description: "Expert guides on selling old phones online, mobile buyback tips, and smartphone comparisons",
            url: "https://selloldphone.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Sell Old Phone",
              logo: {
                "@type": "ImageObject",
                url: "https://selloldphone.com/logo.png",
              },
            },
          }),
        }}
      />

      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Blog</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phone Insights & Comparisons</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Expert reviews, comparisons, and selling guides for smartphones
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 2).map((keyword) => (
                      <span key={keyword} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Keywords Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Phone Topics</h2>
            <p className="text-lg text-gray-600">Trending searches and comparisons in the smartphone world</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularKeywords.map((keyword) => (
              <button
                key={keyword}
                className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 rounded-full transition-colors text-sm font-medium"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for better SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to sell old phone online for cash?</h3>
              <p className="text-gray-600">
                Visit our mobile buyback platform, select your phone brand and model, get an instant quote, and schedule
                free pickup for immediate payment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which is the best site to sell used mobile?</h3>
              <p className="text-gray-600">
                Sell Old Phone offers the best prices for used mobiles in India with instant quotes, free pickup, and
                guaranteed payments for all smartphone brands.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does mobile buyback work?</h3>
              <p className="text-gray-600">
                Our mobile buyback process is simple: get instant quote online, schedule free pickup, device
                verification, and receive immediate payment via bank transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sell Old Phone Online India - Get Cash Today!</h2>
          <p className="text-xl mb-8 text-green-100">
            Best mobile buyback platform in India. Sell used mobile for cash with instant quotes and free pickup
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sell Phone Online Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
