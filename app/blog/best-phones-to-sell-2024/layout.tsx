import type React from "react"
import { pageMeta } from "@/lib/seo"
import { ArticleJsonLd } from "@/components/article-json-ld"

export const metadata = pageMeta(
  "/blog/best-phones-to-sell-2024",
  "Best Phones to Sell in 2024 – Resale Value Guide",
  "Which phones hold their resale value best? See the best phones to sell in 2024 and how to get the highest price.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd slug="best-phones-to-sell-2024" />
      {children}
    </>
  )
}
