import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/blog/mobile-buyback-india-guide",
  "Complete Mobile Buyback Guide India",
  "How mobile buyback works in India: getting a quote, preparing your phone, pickup and payment.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
