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
