import type { Metadata } from "next"

// Per-page title, description and canonical URL. Without this every page
// inherits the root layout's canonical (the home page), and Google treats
// all pages as duplicates of the home page.
export function pageMeta(path: string, title: string, description: string, absoluteTitle = false): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Contreat",
      url: path,
      title,
      description,
      // Set explicitly: pages with their own openGraph lose the inherited app/opengraph-image.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contreat – Sell your old phone online" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  }
}

const SITE = "https://www.contreat.in"

// BreadcrumbList structured data: Google shows the trail in search results.
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: SITE + item.path,
    })),
  }
}

// Article structured data for a blog post listed in lib/blog-posts.ts.
export function articleJsonLd(post: { id: string; title: string; excerpt?: string; date: string }) {
  const org = { "@type": "Organization", name: "Contreat", url: SITE }
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: org,
    publisher: { ...org, logo: { "@type": "ImageObject", url: `${SITE}/android-chrome-512x512.png` } },
    image: `${SITE}/opengraph-image`,
    mainEntityOfPage: `${SITE}/blog/${post.id}`,
  }
}
