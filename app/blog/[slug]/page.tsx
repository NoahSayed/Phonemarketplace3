import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { pageMeta } from "@/lib/seo"
import { blogPosts } from "@/lib/blog-posts"
import { blogArticles } from "@/lib/blog-articles"

const blogContent = blogArticles

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Pre-render every post (fast, and listed in the sitemap); other slugs 404.
export const dynamicParams = false
export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogContent[params.slug as keyof typeof blogContent]
  if (!post) return {}
  const excerpt = blogPosts.find((p) => p.id === params.slug)?.excerpt
  return pageMeta(`/blog/${params.slug}`, post.title, excerpt || post.title)
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
          <Link href="/blog" className="inline-flex items-center text-green-700 hover:text-green-800 mb-8">
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
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="article-body max-w-none text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* More guides */}
          <nav aria-label="More guides" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More selling guides</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blogPosts
                .filter((p) => p.id !== params.slug)
                .slice(0, 4)
                .map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/blog/${p.id}`}
                      className="block h-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800 hover:border-green-700 hover:text-green-700 transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Related Articles CTA */}
          <div className="mt-12 p-8 bg-green-50 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Sell Your Phone?</h2>
            <p className="text-gray-600 mb-6">
              Get the best price for your smartphone with our expert evaluation and instant quotes.
            </p>
            <Link
              href="/"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
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
