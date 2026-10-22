// AdSense ad units. Each slot id comes from AdSense → Ads → By ad unit.
// A placement with an empty slot id shows nothing.
export const AD_CLIENT = "ca-pub-9902910443810636"

export type AdPlacement = "top" | "bottom" | "inArticle"

export const AD_SLOTS: Record<AdPlacement, string> = {
  // Banner under the menu bar, every page (display, horizontal)
  top: process.env.NEXT_PUBLIC_AD_SLOT_TOP || "",
  // Above the footer, every page (display, responsive)
  bottom: process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM || "",
  // Between paragraphs of blog posts (in-article)
  inArticle: process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || "",
}

/** Splits article HTML into three parts: after the 2nd paragraph and about halfway. */
export function splitForAds(html: string): string[] {
  const ends: number[] = []
  const re = /<\/p>/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(html))) ends.push(m.index + m[0].length)
  if (ends.length < 4) return [html]
  const first = ends[1]
  const middle = ends[Math.max(2, Math.floor(ends.length / 2))]
  if (middle <= first || middle >= html.length) return [html.slice(0, first), html.slice(first)]
  return [html.slice(0, first), html.slice(first, middle), html.slice(middle)]
}
