"use client"
import { useParams } from "next/navigation"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Shield, Battery, Camera, Monitor, HardDrive, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { getPhoneById } from "@/lib/phone-data"
import { deductionGroups, quotePrice, totalDeductionPercent, describeCondition } from "@/lib/price-formula"
import { useToast } from "@/hooks/use-toast"
import { trackLead, trackFormError } from "@/lib/analytics"
import { postLead } from "@/lib/submit-lead"

import { RelatedPhones } from "@/components/related-phones"
import { PhoneFaqSection } from "@/components/phone-faq-section"

export default function PhoneDetailPage() {
  const params = useParams()
  const { toast } = useToast()
  const phone = getPhoneById(params.id as string)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issues: "",
    pincode: "",
    storage: "",
    ram: "",
    originalBox: false,
    originalBill: false,
    originalCharger: false,
  })
  const [selectedDeductions, setSelectedDeductions] = useState<string[]>([])
  const [pincodeError, setPincodeError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  if (!phone) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Phone not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
    if (name === "pincode") {
      setPincodeError("")
    }
  }

  const handleStorageChange = (value: string) => {
    setFormData({
      ...formData,
      storage: value,
    })
  }

  const handleRamChange = (value: string) => {
    setFormData({
      ...formData,
      ram: value,
    })
  }

  const toggleDeduction = (groupId: string, optionId: string) => {
    const group = deductionGroups.find((g) => g.id === groupId)
    setSelectedDeductions((prev) => {
      if (prev.includes(optionId)) return prev.filter((id) => id !== optionId)
      if (group?.single) {
        const groupIds = group.options.map((o) => o.id)
        return [...prev.filter((id) => !groupIds.includes(id)), optionId]
      }
      return [...prev, optionId]
    })
  }

  const quoteInput = {
    selected: selectedDeductions,
    hasBox: formData.originalBox,
    hasCharger: formData.originalCharger,
  }
  const quotedPrice = quotePrice(phone.basePrice, quoteInput)
  const deductionPercent = totalDeductionPercent(quoteInput)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      })
      return
    }
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      setPincodeError("Please enter a valid 6-digit pincode.")
      return
    }

    if (!formData.storage) {
      setPincodeError("Please select a storage option.")
      return
    }

    if (!formData.ram) {
      setPincodeError("Please select a RAM option.")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Submitting phone detail form with data:", {
        ...formData,
        deviceName: phone.name,
        deviceId: phone.id,
        brand: phone.brand,
        basePrice: phone.basePrice,
      })

      const response = await postLead("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          deviceName: phone.name,
          deviceId: phone.id,
          brand: phone.brand,
          basePrice: phone.basePrice,
          quotedPrice,
          condition: describeCondition(quoteInput),
          formType: "phone-detail",
          page: window.location.pathname,
        }),
      })

      console.log("[v0] Response status:", response.status)
      const result = await response.json()
      console.log("[v0] Response data:", result.message)

      if (response.ok && result.success) {
        trackLead("phone-detail", { brand: phone.brand, model: phone.name, value: quotedPrice })
        setShowSuccess(true)
        setFormData({
          name: "",
          phone: "",
          issues: "",
          pincode: "",
          storage: "",
          ram: "",
          originalBox: false,
          originalBill: false,
          originalCharger: false,
        })
        setSelectedDeductions([])

        toast({
          title: "Message sent successfully!",
          description: "We'll connect with you shortly to discuss your phone.",
          variant: "default",
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        throw new Error(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      trackFormError("phone-detail", error instanceof Error ? error.message : "unknown")
      toast({
        title: "Error submitting form",
        description:
          error instanceof Error && error.message.startsWith("Please")
            ? error.message
            : "Please try again, or email us at itsselloldphone@gmail.com.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const specIcons = {
    ram: <Zap className="h-5 w-5" />,
    storage: <HardDrive className="h-5 w-5" />,
    camera: <Camera className="h-5 w-5" />,
    battery: <Battery className="h-5 w-5" />,
    display: <Monitor className="h-5 w-5" />,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={`/brand/${phone.brand.toLowerCase()}`}
          className="inline-flex items-center text-gray-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to {phone.brand}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Phone Image and Basic Info */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src={phone.image || "/placeholder.svg"}
                alt={phone.name}
                width={512}
                height={512}
                sizes="(max-width: 1024px) 90vw, 512px"
                priority
                unoptimized={!phone.image}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{phone.name}</h1>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">4.5</span>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-500">Get up to</p>
              <p className="text-4xl font-bold text-green-700 mb-4">₹{phone.basePrice.toLocaleString()}</p>

              <div className="flex items-center space-x-2 text-green-700">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Certified Second Hand</span>
              </div>
            </div>
          </div>

          {/* Specifications and Form */}
          <div className="space-y-8">
            {/* Specifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  {specIcons.ram}
                  <div>
                    <p className="font-medium text-gray-900">RAM</p>
                    <p className="text-gray-600">{phone.specs.ram.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {specIcons.storage}
                  <div>
                    <p className="font-medium text-gray-900">Storage</p>
                    <p className="text-gray-600">{phone.specs.storage.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {specIcons.camera}
                  <div>
                    <p className="font-medium text-gray-900">Camera</p>
                    <p className="text-gray-600">{phone.specs.camera}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {specIcons.battery}
                  <div>
                    <p className="font-medium text-gray-900">Battery</p>
                    <p className="text-gray-600">{phone.specs.battery}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:col-span-2">
                  {specIcons.display}
                  <div>
                    <p className="font-medium text-gray-900">Display</p>
                    <p className="text-gray-600">{phone.specs.display}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Out Your Phone's Price!</h2>

              {showSuccess && (
                <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl animate-bounce-in">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Submitted Successfully!</h3>
                    <p className="text-green-700 font-medium">We'll connect with you shortly to discuss your phone.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <span className="block text-gray-500 text-sm">Device Name</span>
                      <span className="block text-lg font-bold text-gray-900">{phone.name}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-sm">Device ID</span>
                      <span className="block text-base font-mono text-green-700">{phone.id}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="storage" className="text-base font-semibold">
                      Storage Option *
                    </Label>
                    <Select value={formData.storage} onValueChange={handleStorageChange}>
                      <SelectTrigger id="storage" className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg">
                        <SelectValue placeholder="Select storage option" />
                      </SelectTrigger>
                      <SelectContent>
                        {phone.specs.storage.map((storage) => (
                          <SelectItem key={storage} value={storage}>
                            {storage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="ram" className="text-base font-semibold">
                      RAM Option *
                    </Label>
                    <Select value={formData.ram} onValueChange={handleRamChange}>
                      <SelectTrigger id="ram" className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg">
                        <SelectValue placeholder="Select RAM option" />
                      </SelectTrigger>
                      <SelectContent>
                        {phone.specs.ram.map((ram) => (
                          <SelectItem key={ram} value={ram}>
                            {ram}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <Label htmlFor="issues" className="text-base font-semibold">
                        Issues with your phone (optional)
                      </Label>
                      <Textarea
                        id="issues"
                        name="issues"
                        value={formData.issues}
                        onChange={handleInputChange}
                        className="mt-2 border-2 border-gray-200 focus:border-green-500 rounded-lg"
                        placeholder="Describe any issues or damage..."
                        rows={4}
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="pincode" className="text-base font-semibold">
                        Pincode *
                      </Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg"
                        placeholder="Enter your pincode"
                        maxLength={6}
                        minLength={6}
                        pattern="\d{6}"
                      />
                      <div className="text-sm text-gray-500 mt-1">Pincode is required.</div>
                      {pincodeError && <div className="text-sm text-red-600 mt-1">{pincodeError}</div>}
                    </div>
                  </div>

                  {deductionGroups.map((group) => (
                    <div key={group.id} className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{group.hint}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {group.options.map((option) => {
                          const active = selectedDeductions.includes(option.id)
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => toggleDeduction(group.id, option.id)}
                              className={`p-3 text-left text-sm font-medium rounded-lg border-2 transition-colors ${
                                active
                                  ? "border-green-700 bg-green-50 text-green-800"
                                  : "border-gray-200 bg-white text-gray-900 hover:border-green-500"
                              }`}
                            >
                              {option.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Original Accessories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="originalBox"
                          checked={formData.originalBox}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-green-700 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">Original Box</span>
                          <p className="text-sm text-gray-500">Device packaging</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="originalBill"
                          checked={formData.originalBill}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-green-700 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">Original Bill</span>
                          <p className="text-sm text-gray-500">Purchase receipt</p>
                        </div>
                      </label>

                      <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="originalCharger"
                          checked={formData.originalCharger}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-green-700 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">Original Charger</span>
                          <p className="text-sm text-gray-500">Power adapter & cable</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-green-50 border-2 border-green-200 text-center">
                    <p className="text-sm font-medium text-green-800">Your phone's price</p>
                    <p className="text-4xl font-bold text-green-700">₹{quotedPrice.toLocaleString("en-IN")}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {deductionPercent > 0
                        ? `₹${phone.basePrice.toLocaleString("en-IN")} less ${deductionPercent}% for condition and accessories`
                        : "Best price: perfect condition with box and charger"}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Sell Your Phone"}
                  </Button>
                </div>
                <div className="mt-8 p-4 bg-gray-100 rounded-xl text-xs text-gray-600 border border-gray-200">
                  <strong>Privacy Policy:</strong> We respect your privacy. Your information will only be used to
                  process your inquiry
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <PhoneFaqSection phone={phone} />
      <RelatedPhones phone={phone} />
      <Footer />
    </div>
  )
}
