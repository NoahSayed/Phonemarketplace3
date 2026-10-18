import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/contact",
  "Contact Us",
  "Contact Contreat to sell your old phone. Email itsselloldphone@gmail.com for quotes, pickup and payment questions.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
