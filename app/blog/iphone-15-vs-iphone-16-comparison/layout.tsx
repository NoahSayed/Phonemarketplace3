import type React from "react"
import { pageMeta } from "@/lib/seo"
import { ArticleJsonLd } from "@/components/article-json-ld"

export const metadata = pageMeta(
  "/blog/iphone-15-vs-iphone-16-comparison",
  "iPhone 15 vs iPhone 16: Complete Comparison",
  "iPhone 15 vs iPhone 16 compared: design, camera, chip, battery and which one to buy or sell.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd slug="iphone-15-vs-iphone-16-comparison" />
      {children}
    </>
  )
}
