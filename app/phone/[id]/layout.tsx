import type React from "react"
import { notFound } from "next/navigation"
import { getPhoneById, phoneData } from "@/lib/phone-data"
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo"

// Build every phone page at deploy time (served from the CDN); other ids 404.
export const dynamicParams = false
export function generateStaticParams() {
  return phoneData.map((phone) => ({ id: phone.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const phone = getPhoneById(params.id)
  if (!phone) return {}
  return pageMeta(
    `/phone/${phone.id}`,
    `Sell Used ${phone.name} Online – Best Price in India`,
    `Sell your used ${phone.name} on Contreat. Get an instant price quote based on condition, free doorstep pickup and instant payment.`,
  )
}

// The page itself is a client component; this server layout makes unknown
// phone ids return a real 404 instead of a "Phone not found" page with status 200.
export default function PhoneLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const phone = getPhoneById(params.id)
  if (!phone) notFound()
  const brandPath = `/brand/${phone.brand.toLowerCase()}`
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `Sell ${phone.brand}`, path: brandPath },
    { name: `Sell Used ${phone.name}`, path: `/phone/${phone.id}` },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
