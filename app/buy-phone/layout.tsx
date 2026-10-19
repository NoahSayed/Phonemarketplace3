import type React from "react"
import { Toaster } from "@/components/ui/toaster"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/buy-phone",
  "Buy Second Hand Phones",
  "Buy quality-checked second hand iPhone, Samsung and Pixel phones at great prices from Contreat.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
