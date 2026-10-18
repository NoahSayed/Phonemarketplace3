import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/blog/google-pixel-9-pro-review",
  "Google Pixel 9 Pro Review: AI Photography Powerhouse",
  "Our Google Pixel 9 Pro review: camera, AI features, performance, battery and resale value.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
