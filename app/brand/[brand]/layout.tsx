import type React from "react"
import { notFound } from "next/navigation"
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo"

const BRANDS: Record<string, string> = { apple: "iPhones", samsung: "Samsung Galaxy Phones", google: "Google Pixel Phones" }

// Build the brand pages at deploy time (served from the CDN); other brands 404.
export const dynamicParams = false
export function generateStaticParams() {
  return Object.keys(BRANDS).map((brand) => ({ brand }))
}

export function generateMetadata({ params }: { params: { brand: string } }) {
  const name = BRANDS[params.brand]
  if (!name) return {}
  return pageMeta(
    `/brand/${params.brand}`,
    `Sell Used ${name} Online – Best Price`,
    `Sell your old ${name} on Contreat. Choose your model, get an instant quote, free pickup and instant cash.`,
  )
}

// Unknown brands return a real 404 (the page is a client component).
export default function BrandLayout({ children, params }: { children: React.ReactNode; params: { brand: string } }) {
  const name = BRANDS[params.brand]
  if (!name) notFound()
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `Sell ${name}`, path: `/brand/${params.brand}` },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
