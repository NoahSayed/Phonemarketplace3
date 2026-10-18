import { Resend } from "resend"

// Where leads go if RECIPIENT_EMAIL is not set in Vercel.
const DEFAULT_RECIPIENT = "itsselloldphone@gmail.com"

type Lead = Record<string, unknown>

export type SendResult =
  | { ok: true; via: "resend"; id?: string }
  | { ok: false; reasons: string[] }

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

const yesNo = (v: unknown) => (v ? "✅ Yes" : "❌ No")

export function leadSubject(b: Lead) {
  const brand = b.brand || b.phoneBrand || ""
  const model = b.deviceName || b.phoneModel || b.brandModel || "phone"
  return `New Phone Inquiry - ${brand} ${model}`.replace(/\s+/g, " ").trim()
}

export function leadHtml(b: Lead) {
  const row = (label: string, value: unknown) =>
    value === undefined || value === null || value === "" ? "" : `<p><b>${label}:</b> ${esc(value)}</p>`
  const issues = Array.isArray(b.issues) ? b.issues.join(", ") : b.issues
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📱 New Phone Selling Inquiry - Contreat.in</h2>
      <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">👤 Customer</h3>
        ${row("Name", b.name)}${row("Phone", b.phone)}${row("Email", b.email)}${row("Pincode", b.pincode)}
      </div>
      <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">📋 Device</h3>
        ${row("Brand", b.brand || b.phoneBrand)}${row("Model", b.deviceName || b.phoneModel || b.brandModel)}
        ${row("Device ID", b.deviceId)}${row("Base Price (₹)", b.basePrice)}${row("Quoted Price (₹)", b.quotedPrice)}
        ${row("Storage", b.storage)}${row("RAM", b.ram)}${row("Condition", b.condition)}
        ${row("Battery Health", b.batteryHealth)}${row("Purchase Date", b.purchaseDate)}
      </div>
      ${issues ? `<div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;"><h3 style="margin-top: 0;">⚠️ Issues</h3><p>${esc(issues)}</p></div>` : ""}
      <div style="background: #fefce8; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">📦 Accessories</h3>
        <p><b>Original Box:</b> ${yesNo(b.originalBox)}</p>
        <p><b>Original Bill:</b> ${yesNo(b.originalBill)}</p>
        <p><b>Original Charger:</b> ${yesNo(b.originalCharger)}</p>
        <p><b>Original Earphones:</b> ${yesNo(b.originalEarphones)}</p>
      </div>
      ${b.message ? `<div style="background: #faf5ff; padding: 15px; border-radius: 8px; margin: 15px 0;"><h3 style="margin-top: 0;">💬 Message</h3><p>${esc(b.message)}</p></div>` : ""}
      <hr style="margin: 20px 0; border: none; height: 1px; background: #e5e7eb;">
      <div style="text-align: center; color: #6b7280; font-size: 12px;">
        <p>Form: ${esc(b.formType || b.type || "General Inquiry")} · Page: ${esc(b.page || "")}</p>
        <p>Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    </div>`
}

// Plain key/value copy of the lead, for logs.
function leadFields(b: Lead) {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(b)) {
    if (v === undefined || v === null || v === "") continue
    out[k] = Array.isArray(v) ? v.join(", ") : typeof v === "boolean" ? (v ? "Yes" : "No") : String(v)
  }
  return out
}

async function viaResend(b: Lead, to: string): Promise<{ id?: string; error?: string }> {
  if (!process.env.RESEND_API_KEY) return { error: "resend:missing_api_key" }
  const resend = new Resend(process.env.RESEND_API_KEY)
  // The Resend SDK does not throw on API errors; it returns { data, error }.
  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL || "Contreat Leads <onboarding@resend.dev>",
    to,
    replyTo: typeof b.email === "string" && b.email.includes("@") ? b.email : undefined,
    subject: leadSubject(b),
    html: leadHtml(b),
  })
  if (error || !data?.id) {
    console.error("[lead] Resend error:", error)
    // Hide addresses before the reason is returned to the browser.
    const msg = String(error?.message || "").replace(/[^\s()<>]+@[^\s()<>]+/g, "***").slice(0, 160)
    return { error: `resend:${error?.name || "no_id"}${msg ? `: ${msg}` : ""}` }
  }
  return { id: data.id }
}

export async function sendLead(b: Lead): Promise<SendResult> {
  const to = process.env.RECIPIENT_EMAIL || DEFAULT_RECIPIENT
  console.log("[lead] submission:", JSON.stringify(leadFields(b)))
  const r = await viaResend(b, to)
  if (r.id) return { ok: true, via: "resend", id: r.id }
  return { ok: false, reasons: [r.error!] }
}
