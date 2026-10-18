"use client"
import { track as vercelTrack } from "@vercel/analytics"

// Google Analytics 4 measurement ID (public, safe to commit). NEXT_PUBLIC_GA_ID in
// Vercel overrides it.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-1SD5D4FFM8"

type Params = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Sends one event to GA4 and Vercel Web Analytics. Never throws.
export function track(event: string, params: Params = {}) {
  const clean: Record<string, string | number | boolean> = {}
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== "") clean[k] = v
  try {
    window.gtag?.("event", event, clean)
  } catch {}
  try {
    vercelTrack(event, clean)
  } catch {}
}

// Standard lead event. GA4 reports "generate_lead" as a key event.
export function trackLead(form: string, p: { brand?: unknown; model?: unknown; value?: unknown } = {}) {
  const value = Number(p.value)
  track("generate_lead", {
    form,
    brand: p.brand ? String(p.brand) : undefined,
    model: p.model ? String(p.model) : undefined,
    value: Number.isFinite(value) && value > 0 ? value : undefined,
    currency: Number.isFinite(value) && value > 0 ? "INR" : undefined,
  })
}

export function trackFormError(form: string, reason: string) {
  track("form_error", { form, reason: reason.slice(0, 100) })
}
