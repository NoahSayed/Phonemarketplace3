"use client"
import { useState } from "react"
import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const phone = {
  id: "buy-iphone-15",
  name: "iPhone 15",
  image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
  price: 45000,
  battery: "95%",
}

export default function BuyPhone() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    setIsSubmitting(true)
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setShowSuccess(true)
      setFormData({ name: "", email: "", phone: "", address: "", message: "" })

      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon to complete your purchase.",
        variant: "default",
      })

      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon to complete your purchase.",
        variant: "default",
      })
      setShowSuccess(true)
      setFormData({ name: "", email: "", phone: "", address: "", message: "" })
      setTimeout(() => setShowSuccess(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Phone Info */}
          <div className="space-y-8">
            <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={phone.image || "/placeholder.svg"}
                alt={phone.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{phone.name}</h1>
            <div className="text-4xl font-bold text-green-600 mb-2">₹{phone.price.toLocaleString()}</div>
            <div className="text-lg text-gray-700 mb-2">
              Battery Health: <span className="font-semibold">{phone.battery}</span>
            </div>
            <div className="bg-green-100 text-green-700 rounded-lg p-4 text-base">
              We hand-pick this second-hand phone, check it on the spot, make sure there are no problems, add our commission of ₹500 for our service , and
              sell it.
            </div>
          </div>
          {/* Buy Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact us </h2>
            {showSuccess && (
              <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl animate-bounce-in">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Order Submitted Successfully!</h3>
                  <p className="text-green-700 font-medium">We will contact you soon to complete your purchase.</p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
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
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-green-500 rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
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
              <div>
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-green-500 rounded-lg"
                  placeholder="Enter your delivery address"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-green-500 rounded-lg"
                  placeholder="Any special instructions?"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Buy Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
