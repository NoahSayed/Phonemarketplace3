import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Form submission received:", body)
    console.log("[v0] Using hardcoded Resend API key")

    const emailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "noah786sayed@gmail.com",
      subject: `New Phone Inquiry - ${body.brand || body.phoneBrand} ${body.deviceName || body.phoneModel}`,
      html: `
        <h2>New Phone Selling Inquiry</h2>
        
        <h3>Device Information</h3>
        <p><b>Device ID:</b> ${body.deviceId}</p>
        <p><b>Device Name:</b> ${body.deviceName || body.phoneModel}</p>
        <p><b>Brand:</b> ${body.brand || body.phoneBrand}</p>
        <p><b>Base Price:</b> ₹${body.basePrice || "Not specified"}</p>
        
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        
        <h3>Phone Specifications</h3>
        <p><b>Storage:</b> ${body.storage}</p>
        <p><b>RAM:</b> ${body.ram}</p>
        <p><b>Condition:</b> ${body.condition || "Not specified"}</p>
        <p><b>Battery Health:</b> ${body.batteryHealth || "Not specified"}</p>
        <p><b>Purchase Date:</b> ${body.purchaseDate || "Not specified"}</p>
        
        <h3>Issues & Problems</h3>
        <p>${body.issues || "No issues reported"}</p>
        
        <h3>Location & Accessories</h3>
        <p><b>Pincode:</b> ${body.pincode}</p>
        <p><b>Original Box:</b> ${body.originalBox ? "Yes" : "No"}</p>
        <p><b>Original Bill:</b> ${body.originalBill ? "Yes" : "No"}</p>
        <p><b>Original Charger:</b> ${body.originalCharger ? "Yes" : "No"}</p>
        <p><b>Original Earphones:</b> ${body.originalEarphones ? "Yes" : "No"}</p>
        
        <h3>Additional Details</h3>
        <p>${body.message || "No additional details"}</p>
        
        <hr>
        <p><small>Form Type: ${body.formType || "General Inquiry"}</small></p>
      `,
    })

    console.log("[v0] Email sent successfully, result:", emailResult)
    console.log("[v0] Email ID:", emailResult.data?.id)
    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    console.error("[v0] Error details:", error instanceof Error ? error.message : "Unknown error")
    if (error instanceof Error) {
      console.error("[v0] Error stack:", error.stack)
    }
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again.",
      },
      { status: 500 },
    )
  }
}
