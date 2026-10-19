import type React from "react"
import { Toaster } from "@/components/ui/toaster"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta(
  "/contact",
  "Contact Contreat – Sell Your Old Phone",
  "Contact Contreat to sell your old phone. Email itsselloldphone@gmail.com for quotes, pickup and payment questions.",
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
