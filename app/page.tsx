"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Award, Users, BookOpen, Zap } from "lucide-react"
import TrackCard from "@/components/TrackCard"
import { Button } from "@/components/ui/button"
import { TrackCardsLoader } from "@/components/LoadingAnimations"

const internshipTracks = [
  {
    title: "AI & Machine Learning",
    description:
      "Master artificial intelligence and machine learning concepts with hands-on projects in Python, TensorFlow, and real-world applications.",
    icon: "🤖",
    duration: "12 weeks",
    tools: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
  },
  {
    title: "VLSI Design",
    description:
      "Learn Very Large Scale Integration design principles, digital circuit design, and semiconductor technology fundamentals.",
    icon: "🔬",
    duration: "10 weeks",
    tools: ["Cadence", "Synopsys", "Verilog", "SPICE"],
  },
  {
    title: "Embedded Systems",
    description:
      "Develop expertise in microcontrollers, IoT devices, and real-time systems programming with practical hardware projects.",
    icon: "⚡",
    duration: "8 weeks",
    tools: ["Arduino", "Raspberry Pi", "C/C++", "FreeRTOS"],
  },
  {
    title: "3D Design & CAD",
    description:
      "Master 3D modeling, product design, and computer-aided design using industry-standard software and engineering principles.",
    icon: "🎨",
    duration: "6 weeks",
    tools: ["SolidWorks", "AutoCAD", "Fusion 360", "Blender"],
  },
]

const whyUsPoints = [
  {
    icon: <Award className="w-6 h-6 text-red-400" />,
    title: "Galactic 3D Certification",
    description: "Industry-recognized certification upon completion",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-400" />,
    title: "Expert Mentorship",
    description: "Learn from industry professionals and experienced engineers",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-red-300" />,
    title: "Hands-on Projects",
    description: "Build real-world projects for your portfolio",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-300" />,
    title: "Career Support",
    description: "Job placement assistance and career guidance",
  },
]

export default function Home() {
  const [isLoadingTracks, setIsLoadingTracks] = useState(true)

  useEffect(() => {
    // Simulate loading tracks data
    const timer = setTimeout(() => {
      setIsLoadingTracks(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-red-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Launch Your Engineering Career with
              <span className="text-red-400"> Tech Edumatic</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Skill-based training and internship programs designed for engineering students. Get hands-on experience
              with industry-standard tools and earn Galactic 3D Certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Tracks Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Track</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized internship programs designed to give you practical experience in cutting-edge technologies
            </p>
          </div>

          {isLoadingTracks ? (
            <TrackCardsLoader />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {internshipTracks.map((track, index) => (
                <TrackCard key={index} track={track} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Tech Edumatic?</h2>
            <p className="text-xl text-gray-300">We're committed to your success in the engineering field</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galactic 3D Certification Highlight */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-black to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center border-2 border-red-400">
                <Award className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Galactic 3D Certified Programs</h2>
            <p className="text-xl mb-8 opacity-90">
              All our internship programs are certified by Galactic 3D (Advanced Engineering Certification), ensuring
              industry recognition and career advancement opportunities in cutting-edge technology fields.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 border border-gray-700"
            >
              <Link href="/about">Learn More About Galactic 3D</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of engineering students who have launched their careers with Tech Edumatic Solutions.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/apply">
                Apply for Internship <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
