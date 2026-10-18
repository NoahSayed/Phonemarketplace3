import type React from "react"
import { ArticleJsonLd } from "@/components/article-json-ld"

export default function BlogPostLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  return (
    <>
      <ArticleJsonLd slug={params.slug} />
      {children}
    </>
  )
}
