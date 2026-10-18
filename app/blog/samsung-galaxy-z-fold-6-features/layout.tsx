import type React from "react"
import { pageMeta } from "@/lib/seo"
import { ArticleJsonLd } from "@/components/article-json-ld"

export const metadata = pageMeta(
  "/blog/samsung-galaxy-z-fold-6-features",
  "Samsung Galaxy Z Fold 6: Features and Innovations",
  "Samsung Galaxy Z Fold 6 features explained: display, hinge, cameras, performance and resale value.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd slug="samsung-galaxy-z-fold-6-features" />
      {children}
    </>
  )
}
