"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle } from "lucide-react"
import { GalacticSpinner } from "@/components/LoadingAnimations"

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    track: "",
    experience: "",
    motivation: "",
    resume: null as File | null,
  })

  const tracks = ["AI & Machine Learning", "VLSI Design", "Embedded Systems", "3D Design & CAD"]

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"]
  const branches = [
    "Computer Science Engineering",
    "Electronics & Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Information Technology",
    "Other",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }))
    } else {
      alert("Please upload a PDF file only")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Application Submitted Successfully!</h2>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in Tech Edumatic Solutions. We'll review your application and get back to you
          within 48 hours.
        </p>
        <div className="bg-gray-700 rounded-lg p-4 text-left max-w-md mx-auto border border-gray-600">
          <h3 className="font-semibold text-white mb-2">Next Steps:</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Application review (24-48 hours)</li>
            <li>• Technical interview (if selected)</li>
            <li>• Program orientation</li>
            <li>• Internship begins</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-gray-300">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-300">
            Email Address *
          </Label>
          <Input
            id="email"
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
          <Label htmlFor="phone" className="text-gray-300">
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="college" className="text-gray-300">
            College/University *
          </Label>
          <Input
            id="college"
            type="text"
            required
            value={formData.college}
            onChange={(e) => handleInputChange("college", e.target.value)}
            placeholder="Your college name"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Academic Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="year" className="text-gray-300">
            Current Year *
          </Label>
          <Select onValueChange={(value) => handleInputChange("year", value)}>
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select your current year" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600">
              {years.map((year) => (
                <SelectItem key={year} value={year} className="text-white hover:bg-gray-600">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="branch" className="text-gray-300">
            Branch/Stream *
          </Label>
          <Select onValueChange={(value) => handleInputChange("branch", value)}>
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select your branch" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600">
              {branches.map((branch) => (
                <SelectItem key={branch} value={branch} className="text-white hover:bg-gray-600">
                  {branch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Program Selection */}
      <div>
        <Label htmlFor="track" className="text-gray-300">
          Preferred Internship Track *
        </Label>
        <Select onValueChange={(value) => handleInputChange("track", value)}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Choose your preferred track" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            {tracks.map((track) => (
              <SelectItem key={track} value={track} className="text-white hover:bg-gray-600">
                {track}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Experience */}
      <div>
        <Label htmlFor="experience" className="text-gray-300">
          Relevant Experience (Optional)
        </Label>
        <Textarea
          id="experience"
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
          placeholder="Describe any relevant projects, courses, or experience..."
          rows={3}
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      {/* Motivation */}
      <div>
        <Label htmlFor="motivation" className="text-gray-300">
          Why do you want to join this program? *
        </Label>
        <Textarea
          id="motivation"
          required
          value={formData.motivation}
          onChange={(e) => handleInputChange("motivation", e.target.value)}
          placeholder="Tell us about your goals and what you hope to achieve..."
          rows={4}
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      {/* Resume Upload */}
      <div>
        <Label htmlFor="resume" className="text-gray-300">
          Resume Upload *
        </Label>
        <div className="mt-2">
          <label
            htmlFor="resume"
            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-red-400 transition-colors bg-gray-700"
          >
            <div className="text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">
                {formData.resume ? formData.resume.name : "Click to upload your resume (PDF only)"}
              </p>
              <p className="text-xs text-gray-400 mt-1">Max file size: 5MB</p>
            </div>
            <input id="resume" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" required />
          </label>
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start space-x-2">
        <input type="checkbox" id="terms" required className="mt-1" />
        <Label htmlFor="terms" className="text-sm text-gray-300">
          I agree to the Terms of Service and Privacy Policy. I consent to being contacted by Tech Edumatic Solutions
          regarding my application.
        </Label>
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full text-lg py-3" size="lg">
        {isSubmitting ? (
          <>
            <GalacticSpinner size="sm" className="mr-2" />
            Submitting Application...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you acknowledge that all information provided is accurate and complete to the best of
        your knowledge.
      </p>
    </form>
  )
}
