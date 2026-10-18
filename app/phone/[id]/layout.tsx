import type React from "react"
import { notFound } from "next/navigation"
import { getPhoneById } from "@/lib/phone-data"
import { pageMeta } from "@/lib/seo"

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
  if (!getPhoneById(params.id)) notFound()
  return children
}
