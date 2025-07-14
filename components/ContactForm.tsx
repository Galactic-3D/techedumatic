"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { GalacticSpinner } from "@/components/LoadingAnimations"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const subjects = [
    "General Inquiry",
    "Program Information",
    "Application Status",
    "Technical Support",
    "Partnership Opportunities",
    "Other",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-name" className="text-gray-300">
            Name *
          </Label>
          <Input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Your full name"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="contact-email" className="text-gray-300">
            Email *
          </Label>
          <Input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your.email@example.com"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-phone" className="text-gray-300">
            Phone
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="contact-subject" className="text-gray-300">
            Subject *
          </Label>
          <Select onValueChange={(value) => handleInputChange("subject", value)}>
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600">
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject} className="text-white hover:bg-gray-600">
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message" className="text-gray-300">
          Message *
        </Label>
        <Textarea
          id="contact-message"
          required
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="How can we help you?"
          rows={5}
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? (
          <>
            <GalacticSpinner size="sm" className="mr-2" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
