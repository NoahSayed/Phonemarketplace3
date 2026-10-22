"use client"
import { useEffect, useRef } from "react"
import { AD_CLIENT, AD_SLOTS, type AdPlacement } from "@/lib/ads"

type Props = { placement: AdPlacement; className?: string }

const FORMAT: Record<AdPlacement, { format: string; layout?: string }> = {
  top: { format: "horizontal" },
  bottom: { format: "auto" },
  inArticle: { format: "fluid", layout: "in-article" },
}

// One AdSense unit. The box keeps its height while the ad loads (no layout shift) and
// hides itself when Google has no ad to show. adsbygoogle.js loads late (see
// site-analytics.tsx); push() queues the ad until it does.
export function AdSlot({ placement, className = "" }: Props) {
  const slot = AD_SLOTS[placement]
  const ref = useRef<HTMLModElement>(null)

  useEffect(() => {
    const ins = ref.current
    if (!slot || !ins || ins.getAttribute("data-adsbygoogle-status")) return
    try {
      const w = window as unknown as { adsbygoogle: unknown[] }
      ;(w.adsbygoogle = w.adsbygoogle || []).push({})
    } catch {
      // An ad blocker or a double push in dev; the box just stays empty.
    }
  }, [slot])

  if (!slot) return null
  const f = FORMAT[placement]
  return (
    <aside aria-label="Advertisement" className={`ad-slot ad-slot-${placement} ${className}`}>
      <span className="ad-label">Advertisement</span>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", textAlign: placement === "inArticle" ? "center" : undefined }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={f.format}
        data-ad-layout={f.layout}
        data-full-width-responsive="true"
      />
    </aside>
  )
}
