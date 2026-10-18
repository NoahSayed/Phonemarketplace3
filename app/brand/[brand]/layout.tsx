import type React from "react"
import { notFound } from "next/navigation"

const BRANDS = ["apple", "samsung", "google"]

// Unknown brands return a real 404 (the page is a client component).
export default function BrandLayout({ children, params }: { children: React.ReactNode; params: { brand: string } }) {
  if (!BRANDS.includes(params.brand)) notFound()
  return children
}
