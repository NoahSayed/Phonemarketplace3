import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/blog",
  "Phone Insights & Comparisons – Blog",
  "Guides, phone reviews and comparisons to help you sell your old phone for the best price in India.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
