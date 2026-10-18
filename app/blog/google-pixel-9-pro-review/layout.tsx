import type React from "react"
import { pageMeta } from "@/lib/seo"
import { ArticleJsonLd } from "@/components/article-json-ld"

export const metadata = pageMeta(
  "/blog/google-pixel-9-pro-review",
  "Google Pixel 9 Pro Review: AI Photography Powerhouse",
  "Our Google Pixel 9 Pro review: camera, AI features, performance, battery and resale value.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd slug="google-pixel-9-pro-review" />
      {children}
    </>
  )
}
