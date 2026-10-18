import type React from "react"
import { notFound } from "next/navigation"
import { getPhoneById } from "@/lib/phone-data"

// The page itself is a client component; this server layout makes unknown
// phone ids return a real 404 instead of a "Phone not found" page with status 200.
export default function PhoneLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  if (!getPhoneById(params.id)) notFound()
  return children
}
