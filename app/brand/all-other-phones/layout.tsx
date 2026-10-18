import type React from "react"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/brand/all-other-phones",
  "Sell Any Other Phone – OnePlus, Vivo, Oppo, Xiaomi & More",
  "Sell your OnePlus, Vivo, Oppo, Xiaomi, Realme or any other phone online. Get a quote, free pickup and instant cash.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
