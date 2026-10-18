"use client"
import { useEffect } from "react"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GA_ID, track } from "@/lib/analytics"

// Tracks clicks on email / phone / WhatsApp links anywhere on the site.
function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
      if (!a?.href) return
      const href = a.href
      if (href.startsWith("mailto:")) track("contact_click", { method: "email" })
      else if (href.startsWith("tel:")) track("contact_click", { method: "phone" })
      else if (/wa\.me|whatsapp/i.test(href)) track("contact_click", { method: "whatsapp" })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
  return null
}

export function SiteAnalytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      <Analytics />
      <SpeedInsights />
      <ContactClickTracker />
    </>
  )
}
