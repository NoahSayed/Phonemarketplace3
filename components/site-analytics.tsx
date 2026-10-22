"use client"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GA_ID, track } from "@/lib/analytics"
import { AD_CLIENT } from "@/lib/ads"

const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`

function addScript(src: string) {
  const s = document.createElement("script")
  s.src = src
  s.async = true
  document.head.appendChild(s)
}

// Google tag + AdSense are ~240 KB of script that block the main thread on phones.
// The gtag() stub queues the page view and any events at once; the real scripts
// load on the first scroll/tap/key press, or after 6 s if the visitor does nothing.
function DeferredGoogleScripts() {
  useEffect(() => {
    const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void }
    if (GA_ID && !w.gtag) {
      w.dataLayer = w.dataLayer || []
      w.gtag = function gtag() {
        // gtag.js expects the arguments object, not an array
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments)
      }
      w.gtag("js", new Date())
      w.gtag("config", GA_ID)
    }

    let loaded = false
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const
    const load = () => {
      if (loaded) return
      loaded = true
      events.forEach((e) => window.removeEventListener(e, load))
      clearTimeout(timer)
      if (GA_ID) addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
      addScript(ADSENSE_SRC)
    }
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))
    const timer = setTimeout(load, 6000)
    return () => {
      events.forEach((e) => window.removeEventListener(e, load))
      clearTimeout(timer)
    }
  }, [])
  return null
}

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
      <DeferredGoogleScripts />
      <Analytics />
      <SpeedInsights />
      <ContactClickTracker />
    </>
  )
}
