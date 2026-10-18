"use client"
import type React from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import { trackLead, trackFormError } from "@/lib/analytics"
import { postLead } from "@/lib/submit-lead"

export default function AllOtherPhonesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">📱</div>
            <div>
              <h1 className="text-5xl font-bold mb-4">All Other Phones</h1>
              <p className="text-xl text-white/90">Sell any phone model - we buy all brands and models</p>
              <p className="text-white/80 mt-2">Get instant quotes for any smartphone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Resale Value Calculator Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Resale Value Calculator</h2>
              <p className="text-lg text-gray-600">
                Get an instant quote for your phone! We buy all brands including OnePlus, Xiaomi, Vivo, Oppo, Realme,
                and more.
              </p>
            </div>

            <SellPhoneForm />
          </div>

          {/* Popular Brands Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">We Buy All Phone Brands</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "OnePlus",
                "Xiaomi",
                "Vivo",
                "Oppo",
                "Realme",
                "Nothing",
                "Motorola",
                "Nokia",
                "Honor",
                "Huawei",
                "Sony",
                "Asus",
              ].map((brand) => (
                <div key={brand} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function SellPhoneForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    phoneBrand: "",
    phoneModel: "",
    storage: "",
    ram: "",
    condition: "",
    issues: [] as string[],
    pincode: "",
    originalBox: false,
    originalCharger: false,
    originalEarphones: false,
    purchaseDate: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      console.log("[v0] Submitting form with data:", formData)

      const response = await postLead("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "mobile_resale_calculator",
          formType: "other-phones-calculator",
          page: window.location.pathname,
          ...formData,
          issues: formData.issues.join(", "),
        }),
      })

      console.log("[v0] Response status:", response.status)

      const result = await response.json()
      console.log("[v0] Response data:", result)

      if (response.ok && result.success) {
        trackLead("other-phones-calculator", { brand: formData.phoneBrand, model: formData.phoneModel })
        setSubmitted(true)
        setFormData({
          name: "",
          phone: "",
          phoneBrand: "",
          phoneModel: "",
          storage: "",
          ram: "",
          condition: "",
          issues: [],
          pincode: "",
          originalBox: false,
          originalCharger: false,
          originalEarphones: false,
          purchaseDate: "",
          message: "",
        })
      } else {
        setError(result.message || "Failed to submit form. Please try again.")
        trackFormError("other-phones-calculator", String(result.message || response.status))
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setError("Network error. Please check your connection and try again.")
      trackFormError("other-phones-calculator", "network")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleIssueChange = (issue: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      issues: checked ? [...prev.issues, issue] : prev.issues.filter((i) => i !== issue),
    }))
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-700" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Quote Request Submitted!</h3>
        <p className="text-gray-600">We'll contact you within 2 hours with the best resale value for your phone.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="oq-full-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            id="oq-full-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="oq-phone-number" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            id="oq-phone-number"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Phone Details */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="oq-phone-brand" className="block text-sm font-medium text-gray-700 mb-2">Phone Brand *</label>
            <select
            id="oq-phone-brand"
              required
              value={formData.phoneBrand}
              onChange={(e) => setFormData((prev) => ({ ...prev, phoneBrand: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Google">Google</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Vivo">Vivo</option>
              <option value="Oppo">Oppo</option>
              <option value="Realme">Realme</option>
              <option value="Nothing">Nothing</option>
              <option value="Motorola">Motorola</option>
              <option value="Nokia">Nokia</option>
              <option value="Honor">Honor</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="oq-phone-model" className="block text-sm font-medium text-gray-700 mb-2">Phone Model *</label>
            <input
            id="oq-phone-model"
              type="text"
              required
              placeholder="e.g., iPhone 15 Pro, Galaxy S24, OnePlus 12"
              value={formData.phoneModel}
              onChange={(e) => setFormData((prev) => ({ ...prev, phoneModel: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label htmlFor="oq-storage" className="block text-sm font-medium text-gray-700 mb-2">Storage *</label>
            <select
            id="oq-storage"
              required
              value={formData.storage}
              onChange={(e) => setFormData((prev) => ({ ...prev, storage: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Storage</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              <option value="1TB">1TB</option>
            </select>
          </div>
          <div>
            <label htmlFor="oq-ram" className="block text-sm font-medium text-gray-700 mb-2">RAM</label>
            <select
            id="oq-ram"
              value={formData.ram}
              onChange={(e) => setFormData((prev) => ({ ...prev, ram: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select RAM</option>
              <option value="3GB">3GB</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
            </select>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="oq-overall-condition" className="block text-sm font-medium text-gray-700 mb-2">Overall Condition *</label>
            <select
            id="oq-overall-condition"
              required
              value={formData.condition}
              onChange={(e) => setFormData((prev) => ({ ...prev, condition: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Condition</option>
              <option value="Like New">Like New (No scratches)</option>
              <option value="Excellent">Excellent (Minor scratches)</option>
              <option value="Good">Good (Visible wear)</option>
              <option value="Fair">Fair (Heavy wear)</option>
              <option value="Poor">Poor (Damaged)</option>
            </select>
          </div>
          <div>
            <label htmlFor="oq-purchase-date" className="block text-sm font-medium text-gray-700 mb-2">Purchase Date</label>
            <input
            id="oq-purchase-date"
              type="month"
              value={formData.purchaseDate}
              onChange={(e) => setFormData((prev) => ({ ...prev, purchaseDate: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Issues */}
      <div className="border-t pt-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Phone Issues (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Screen Crack/Damage",
            "Battery Drains Fast",
            "Camera Not Working",
            "Speaker Issues",
            "Charging Port Problem",
            "Water Damage",
            "Button Not Working",
            "Software Issues",
            "Touch Not Responsive",
            "Overheating",
            "Network Issues",
            "No Issues - Perfect",
          ].map((issue) => (
            <label key={issue} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.issues.includes(issue)}
                onChange={(e) => handleIssueChange(issue, e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{issue}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location & Accessories */}
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="oq-pincode" className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
            <input
            id="oq-pincode"
              type="text"
              required
              placeholder="Enter your pincode for pickup"
              value={formData.pincode}
              onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Original Accessories Available</label>
            <div className="space-y-2">
              {[
                { key: "originalBox", label: "Original Box & Bill" },
                { key: "originalCharger", label: "Original Charger" },
                { key: "originalEarphones", label: "Original Earphones" },
              ].map((item) => (
                <label key={item.key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData[item.key as keyof typeof formData] as boolean}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="oq-additional-details" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
        <textarea
            id="oq-additional-details"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Any additional information about your phone condition, special features, or questions..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg"
      >
        {isSubmitting ? "Calculating Value..." : "Get Instant Quote - Sell Old Phone for Cash"}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Get the best mobile resale value in India. We offer instant cash for old phones with free doorstep pickup.
      </p>
    </form>
  )
}
