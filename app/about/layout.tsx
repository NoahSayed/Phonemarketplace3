import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/about",
  "About Contreat – Trusted Old Phone Buyer in India",
  "Learn about Contreat, India's mobile buyback platform: instant quotes, free doorstep pickup and instant payment for your old phone.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
