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
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    },
  }
}
