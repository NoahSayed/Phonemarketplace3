import { ImageResponse } from "next/og"

// Share preview for WhatsApp, Facebook, X, LinkedIn. Applies to every page.
export const alt = "Contreat – Sell your old phone online for instant cash"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const runtime = "edge"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 55%, #eff6ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#15803d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 26, height: 42, border: "5px solid white", borderRadius: 7 }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#111827" }}>contreat.in</div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>Sell Your Old Phone</div>
        <div style={{ fontSize: 76, fontWeight: 800, color: "#15803d", lineHeight: 1.1 }}>for Instant Cash</div>
        <div style={{ fontSize: 34, color: "#4b5563", marginTop: 36 }}>
          iPhone · Samsung · Pixel · all brands — instant quote, free pickup
        </div>
      </div>
    ),
    size,
  )
}
