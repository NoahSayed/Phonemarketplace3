import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { pageMeta } from "@/lib/seo"

const blogContent = {
  "iphone-16-pro-vs-samsung-s25-ultra": {
    title: "iPhone 16 Pro vs Samsung Galaxy S25 Ultra: Complete Comparison 2024",
    date: "2024-12-15",
    author: "Tech Expert",
    category: "Comparisons",
    readTime: "8 min read",
    content: `
      <h2>Performance and Processing Power</h2>
      <p>The iPhone 16 Pro features Apple's latest A18 Pro chip, delivering exceptional performance for both everyday tasks and demanding applications. Meanwhile, the Samsung Galaxy S25 Ultra is powered by the Snapdragon 8 Gen 3 processor, offering competitive performance with superior multitasking capabilities.</p>
      
      <h2>Camera Systems Compared</h2>
      <p>Both phones excel in photography, but with different approaches. The iPhone 16 Pro's camera system focuses on computational photography and video recording, while the Samsung S25 Ultra offers more manual controls and zoom capabilities with its periscope telephoto lens.</p>
      
      <h2>Display Quality and Design</h2>
      <p>The Samsung S25 Ultra features a larger 6.8-inch Dynamic AMOLED display with S Pen support, while the iPhone 16 Pro offers a 6.3-inch Super Retina XDR display with ProMotion technology. Both provide excellent color accuracy and brightness.</p>
      
      <h2>Battery Life and Charging</h2>
      <p>Samsung takes the lead in battery capacity and charging speed, while iPhone 16 Pro offers more consistent battery optimization through iOS integration.</p>
      
      <h2>Value for Money</h2>
      <p>Consider your ecosystem preference, usage patterns, and budget when choosing between these flagship devices. Both offer premium experiences with different strengths.</p>
    `,
  },
  "samsung-galaxy-s24-ultra-features": {
    title: "Samsung Galaxy S24 Ultra: All Features and Specifications Explained",
    date: "2024-12-10",
    author: "Mobile Reviewer",
    category: "Reviews",
    readTime: "6 min read",
    content: `
      <h2>S Pen Integration and Productivity</h2>
      <p>The Galaxy S24 Ultra's S Pen offers precision input for note-taking, drawing, and navigation. With improved latency and pressure sensitivity, it's perfect for professionals and creatives.</p>
      
      <h2>Camera Capabilities</h2>
      <p>Featuring a 200MP main sensor, the S24 Ultra delivers exceptional photo quality with advanced zoom capabilities up to 100x Space Zoom. The camera system includes AI-enhanced features for better low-light performance.</p>
      
      <h2>AI Features and Smart Functions</h2>
      <p>Samsung's Galaxy AI brings intelligent features like real-time translation, photo editing assistance, and smart suggestions to enhance your daily smartphone experience.</p>
      
      <h2>Performance and Gaming</h2>
      <p>With the Snapdragon 8 Gen 3 processor and up to 12GB RAM, the S24 Ultra handles demanding games and multitasking with ease. The vapor cooling system ensures sustained performance.</p>
      
      <h2>Build Quality and Durability</h2>
      <p>The titanium frame and Gorilla Glass Victus 2 provide premium feel and protection. IP68 water resistance ensures durability in various conditions.</p>
    `,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogContent[params.slug as keyof typeof blogContent]
  if (!post) return {}
  return pageMeta(`/blog/${params.slug}`, post.title, post.title)
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogContent[params.slug as keyof typeof blogContent]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {post.category}
              </span>
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Related Articles CTA */}
          <div className="mt-12 p-8 bg-green-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Sell Your Phone?</h3>
            <p className="text-gray-600 mb-6">
              Get the best price for your smartphone with our expert evaluation and instant quotes.
            </p>
            <Link
              href="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Quote Now
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
