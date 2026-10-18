"use client"

// Backup inbox for leads when the server email (Resend) fails.
const BACKUP_EMAIL = "itsselloldphone@gmail.com"

// Same signature as fetch(). Posts the lead to our API; if the server could not
// email it, the browser sends it to FormSubmit so the lead is not lost.
// FormSubmit needs a one-time "Activate Form" click in the backup inbox.
export async function postLead(url: string, init: RequestInit): Promise<Response> {
  let res: Response | null = null
  try {
    res = await fetch(url, init)
    if (res.ok) return res
    if (res.status === 400) return res // validation message for the user
  } catch {}

  try {
    const lead = JSON.parse(String(init.body || "{}")) as Record<string, unknown>
    const fields: Record<string, string> = {}
    for (const [k, v] of Object.entries(lead)) {
      if (v === undefined || v === null || v === "") continue
      fields[k] = Array.isArray(v) ? v.join(", ") : typeof v === "boolean" ? (v ? "Yes" : "No") : String(v)
    }
    const model = fields.deviceName || fields.phoneModel || fields.brandModel || "phone"
    const backup = await fetch(`https://formsubmit.co/ajax/${BACKUP_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New Phone Inquiry (backup) - ${fields.brand || fields.phoneBrand || ""} ${model}`,
        _template: "table",
        _captcha: "false",
        ...fields,
      }),
    })
    const json = await backup.json().catch(() => ({}))
    if (backup.ok && String((json as { success?: unknown }).success) === "true") {
      return new Response(JSON.stringify({ success: true, via: "formsubmit" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }
  } catch {}

  return (
    res ??
    new Response(JSON.stringify({ success: false, message: "Network error. Please try again." }), { status: 502 })
  )
}
