import { type NextRequest, NextResponse } from "next/server"
import { sendLead } from "@/lib/lead-mail"

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 })
  }

  const phone = String(body.phone ?? "").replace(/\D/g, "")
  if (!String(body.name ?? "").trim() || phone.length < 10) {
    return NextResponse.json(
      { success: false, message: "Please enter your name and a valid 10-digit phone number." },
      { status: 400 },
    )
  }

  const result = await sendLead(body)
  if (!result.ok) {
    console.error("[lead] all channels failed:", result.reasons)
    return NextResponse.json(
      { success: false, message: "We couldn't send your request. Please try again or email us.", reasons: result.reasons },
      { status: 502 },
    )
  }

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully! We'll contact you soon.",
    via: result.via,
    emailId: result.via === "resend" ? result.id : undefined,
  })
}
