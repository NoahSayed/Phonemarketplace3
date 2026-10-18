"use client"
import { useParams } from "next/navigation"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getBrandPhones } from "@/lib/phone-data"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { trackLead, trackFormError } from "@/lib/analytics"
import { postLead } from "@/lib/submit-lead"

export default function BrandPage() {
  const params = useParams()
  const brand = params.brand as string
  const brandName = (brand?.charAt(0).toUpperCase() + brand?.slice(1)) as "Apple" | "Samsung" | "Google"

  const [searchQuery, setSearchQuery] = useState("")
  const allPhones = getBrandPhones(brandName)
  
  // Filter phones based on search query
  const phones = allPhones.filter(phone => 
    phone.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const brandInfo = {
    Apple: {
      logo: "🍎",
      description: "Premium iPhones with cutting-edge technology",
      color: "from-gray-900 to-gray-700",
    },
    Samsung: {
      logo: "📱",
      description: "Innovation meets performance in Galaxy series",
      color: "from-blue-600 to-blue-800",
    },
    Google: {
      logo: "🔍",
      description: "Pure Android experience with Pixel smartphones",
      color: "from-green-500 to-green-700",
    },
  }

  const currentBrand = brandInfo[brandName]

  if (!currentBrand) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className={`bg-gradient-to-br ${currentBrand.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center overflow-hidden">
              {phones[0] && (
                <Image
                  src={phones[0].image || "/placeholder.svg"}
                  alt=""
                  width={80}
                  height={80}
                  sizes="80px"
                  priority
                  unoptimized={!phones[0].image}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{brandName}</h1>
              <p className="text-xl text-white/90">{currentBrand.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600">{allPhones.length} models available</p>
            <div className="relative w-full max-w-xl">
              <Input
                type="search"
                aria-label="Search phones"
                placeholder="Search phones..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600">
                Found {phones.length} {phones.length === 1 ? 'model' : 'models'} matching "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Phone Grid */}
      <section className="py-12">
        <div className="max-w-[90%] mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {phones.map((phone, i) => (
              <Link key={phone.id} href={`/phone/${phone.id}`} className="block max-w-[280px] mx-auto w-full">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={phone.image || "/placeholder.svg"}
                      alt={phone.name}
                      width={256}
                      height={256}
                      sizes="(max-width: 640px) 45vw, 256px"
                      priority={i < 4}
                      unoptimized={!phone.image}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="p-2 sm:p-4">
                    <h2 className="text-xs sm:text-base font-semibold text-gray-900 mb-1 truncate">{phone.name}</h2>

                    <div className="space-y-1 mb-2 text-[10px] sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Storage:</span>
                        <span className="text-gray-900 font-medium">{phone.specs.storage.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">RAM:</span>
                        <span className="text-gray-900 font-medium">{phone.specs.ram.join(", ")}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-xl font-bold text-green-700">₹{phone.basePrice.toLocaleString()}</span>
                      <div className="flex items-center text-yellow-500">
                        <span className="text-sm sm:text-base">★</span>
                        <span className="ml-1 text-gray-700 text-xs sm:text-sm">4.5</span>
                      </div>
                    </div>

                    <span className="flex w-full items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold py-2 text-xs sm:text-sm rounded-lg transition-colors duration-200">
                      Sell Your Phone
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {["Apple", "Google", "Samsung"].includes(brandName) && (
            <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">All Other Phones</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Don't see your phone model? Fill out the form below and we'll give you a quote for any phone!
              </p>

              <SellPhoneForm />
            </div>
          )}

          {phones.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No phones available</h3>
              <p className="text-gray-600">Check back soon for new arrivals!</p>
            </div>
          )}
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
    email: "",
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
      const response = await postLead("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "sell_phone",
          formType: "brand-quote",
          page: window.location.pathname,
          ...formData,
          issues: formData.issues.join(", "),
        }),
      })
      const result = await response.json().catch(() => ({}))

      if (response.ok && result.success) {
        trackLead("brand-quote", { brand: formData.phoneBrand, model: formData.phoneModel })
        setSubmitted(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
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
          message: "",
        })
      } else {
        setError(result.message || "Failed to submit form. Please try again.")
        trackFormError("brand-quote", String(result.message || response.status))
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Network error. Please check your connection and try again.")
      trackFormError("brand-quote", "network")
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
        <p className="text-gray-600">We'll contact you within 24 hours with a quote for your phone.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="bq-name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
          <input
            id="bq-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="bq-phone-number" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            id="bq-phone-number"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bq-email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
        <input
            id="bq-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="bq-phone-brand" className="block text-sm font-medium text-gray-700 mb-2">Phone Brand *</label>
          <select
            id="bq-phone-brand"
            required
            value={formData.phoneBrand}
            onChange={(e) => setFormData((prev) => ({ ...prev, phoneBrand: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
            <option value="OnePlus">OnePlus</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="bq-phone-model" className="block text-sm font-medium text-gray-700 mb-2">Phone Model *</label>
          <input
            id="bq-phone-model"
            type="text"
            required
            placeholder="e.g., iPhone 14 Pro, Galaxy S23"
            value={formData.phoneModel}
            onChange={(e) => setFormData((prev) => ({ ...prev, phoneModel: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="bq-storage" className="block text-sm font-medium text-gray-700 mb-2">Storage *</label>
          <select
            id="bq-storage"
            required
            value={formData.storage}
            onChange={(e) => setFormData((prev) => ({ ...prev, storage: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Storage</option>
            <option value="64GB">64GB</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
            <option value="1TB">1TB</option>
          </select>
        </div>
        <div>
          <label htmlFor="bq-ram" className="block text-sm font-medium text-gray-700 mb-2">RAM</label>
          <select
            id="bq-ram"
            value={formData.ram}
            onChange={(e) => setFormData((prev) => ({ ...prev, ram: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select RAM</option>
            <option value="4GB">4GB</option>
            <option value="6GB">6GB</option>
            <option value="8GB">8GB</option>
            <option value="12GB">12GB</option>
            <option value="16GB">16GB</option>
          </select>
        </div>
        <div>
          <label htmlFor="bq-condition" className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
          <select
            id="bq-condition"
            required
            value={formData.condition}
            onChange={(e) => setFormData((prev) => ({ ...prev, condition: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Condition</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Phone Issues (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Screen Crack",
            "Battery Issue",
            "Camera Problem",
            "Speaker Issue",
            "Charging Port",
            "Water Damage",
            "Button Problem",
            "Software Issue",
            "No Issues",
          ].map((issue) => (
            <label key={issue} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.issues.includes(issue)}
                onChange={(e) => handleIssueChange(issue, e.target.checked)}
                className="w-4 h-4 text-green-700 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">{issue}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="bq-pincode" className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
        <input
            id="bq-pincode"
          type="text"
          required
          placeholder="Enter your pincode"
          value={formData.pincode}
          onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Original Accessories</label>
        <div className="space-y-2">
          {[
            { key: "originalBox", label: "Original Box" },
            { key: "originalCharger", label: "Original Charger" },
            { key: "originalEarphones", label: "Original Earphones" },
          ].map((item) => (
            <label key={item.key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData[item.key as keyof typeof formData] as boolean}
                onChange={(e) => setFormData((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                className="w-4 h-4 text-green-700 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="bq-other-issues-or-any-additional-inform" className="block text-sm font-medium text-gray-700 mb-2">Other Issues Or Any Additional Information</label>
        <textarea
            id="bq-other-issues-or-any-additional-inform"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Any additional details about your phone..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-700 hover:bg-green-800 text-white py-4 text-lg font-semibold rounded-lg"
      >
        {isSubmitting ? "Submitting..." : "Get Quote for My Phone"}
      </Button>
    </form>
  )
}