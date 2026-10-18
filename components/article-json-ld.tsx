import { blogPosts } from "@/lib/blog-posts"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo"

// Article + breadcrumb structured data for a blog post (nothing if the slug is unknown).
export function ArticleJsonLd({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.id === slug)
  if (!post) return null
  const data = [
    articleJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.id}` },
    ]),
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
