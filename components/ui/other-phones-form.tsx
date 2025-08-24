"use client"
import { useState } from "react"
import { Input } from "./input"
import { Label } from "./label"
import { Button } from "./button"
import { useToast } from "@/hooks/use-toast"

export function OtherPhonesForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brandModel: "",
    condition: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("/api/contact2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "other-phones",
        }),
      })

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          brandModel: "",
          condition: "",
        })

        toast({
          title: "Message sent successfully!",
          description: "We'll connect with you shortly to discuss your phone.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sell Any Other Phone</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <Label htmlFor="brandModel">Phone Brand and Model *</Label>
          <Input
            id="brandModel"
            value={formData.brandModel}
            onChange={(e) => setFormData(prev => ({ ...prev, brandModel: e.target.value }))}
            placeholder="e.g., OnePlus 9 Pro"
            required
          />
        </div>

        <div>
          <Label htmlFor="condition">Phone Condition</Label>
          <Input
            id="condition"
            value={formData.condition}
            onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
            placeholder="Describe your phone's condition"
          />
        </div>

        <Button type="submit" className="w-full">Submit Details</Button>
      </form>
    </div>
  )
}
