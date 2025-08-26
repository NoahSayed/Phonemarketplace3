import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with environment variable
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY not found in environment variables")
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      )
    }

    // Check if recipient email is configured
    if (!process.env.RECIPIENT_EMAIL) {
      console.error("[v0] RECIPIENT_EMAIL not found in environment variables")
      return NextResponse.json(
        { success: false, message: "Recipient email not configured" },
        { status: 500 }
      )
    }

    const body = await request.json()
    
    console.log("[v0] Form submission received:", body)
    console.log("[v0] Using environment variable for Resend API key")
    
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Phone Inquiry - ${body.brand || body.phoneBrand} ${body.deviceName || body.phoneModel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            📱 New Phone Selling Inquiry - Contreat.in
          </h2>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">📋 Device Information</h3>
            <p><b>Device ID:</b> ${body.deviceId}</p>
            <p><b>Device Name:</b> ${body.deviceName || body.phoneModel}</p>
            <p><b>Brand:</b> ${body.brand || body.phoneBrand}</p>
            <p><b>Base Price:</b> ₹${body.basePrice || "Not specified"}</p>
          </div>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">👤 Customer Information</h3>
            <p><b>Name:</b> ${body.name}</p>
            <p><b>Phone:</b> ${body.phone}</p>
            <p><b>Pincode:</b> ${body.pincode}</p>
          </div>
          
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">⚙️ Device Specifications</h3>
            <p><b>Storage:</b> ${body.storage}</p>
            <p><b>RAM:</b> ${body.ram}</p>
            <p><b>Condition:</b> ${body.condition || "Not specified"}</p>
            <p><b>Battery Health:</b> ${body.batteryHealth || "Not specified"}</p>
            <p><b>Purchase Date:</b> ${body.purchaseDate || "Not specified"}</p>
          </div>
          
          ${body.issues ? `
          <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">⚠️ Issues & Problems</h3>
            <p>${body.issues}</p>
          </div>
          ` : ''}
          
          <div style="background: #fefce8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">📦 Accessories Included</h3>
            <p><b>Original Box:</b> ${body.originalBox ? "✅ Yes" : "❌ No"}</p>
            <p><b>Original Bill:</b> ${body.originalBill ? "✅ Yes" : "❌ No"}</p>
            <p><b>Original Charger:</b> ${body.originalCharger ? "✅ Yes" : "❌ No"}</p>
            <p><b>Original Earphones:</b> ${body.originalEarphones ? "✅ Yes" : "❌ No"}</p>
          </div>
          
          ${body.message ? `
          <div style="background: #faf5ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">💬 Additional Details</h3>
            <p>${body.message}</p>
          </div>
          ` : ''}
          
          <hr style="margin: 20px 0; border: none; height: 1px; background: #e5e7eb;">
          
          <div style="text-align: center; color: #6b7280; font-size: 12px;">
            <p>📧 Form Type: ${body.formType || "General Inquiry"}</p>
            <p>🕒 Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>🌐 Source: Contreat.in Phone Selling Form</p>
          </div>
        </div>
      `,
    })
    
    console.log("[v0] Email sent successfully, result:", emailResult)
    console.log("[v0] Email ID:", emailResult.data?.id)
    
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully! We'll contact you soon.",
      emailId: emailResult.data?.id 
    })
    
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
        error: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
      },
      { status: 500 }
    )
  }
}