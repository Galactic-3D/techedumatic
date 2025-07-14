import { Award, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Tech Edumatic Solutions</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're dedicated to bridging the gap between academic learning and industry requirements by providing
            practical, skill-based training programs for engineering students.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-900 rounded-2xl p-8 border border-red-800">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower engineering students with practical skills and industry-relevant experience through
              comprehensive internship programs, ensuring they are job-ready and confident in their chosen field.
            </p>
          </div>

          <div className="bg-orange-900 rounded-2xl p-8 border border-orange-800">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the leading platform for engineering skill development, creating a generation of technically
              proficient and industry-ready engineers who drive innovation and technological advancement.
            </p>
          </div>
        </div>

        {/* Galactic 3D Partnership */}
        <div className="bg-gradient-to-r from-red-600 via-black to-orange-600 rounded-2xl p-12 text-white mb-20 border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center border-2 border-red-400">
                <Award className="w-10 h-10 text-red-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Galactic 3D Certification Partnership</h2>
            <p className="text-lg opacity-90 mb-6">
              We're proud to partner with Galactic 3D (Advanced Engineering Certification) to provide
              industry-recognized certifications. Galactic 3D is a leading certification body that validates technical
              skills and knowledge in advanced engineering domains including AI, robotics, and next-generation
              technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Certified Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-80">Industry Recognition</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm opacity-80">Employer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Mentors</h3>
              <p className="text-gray-300">Learn from industry professionals with 10+ years of experience</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
              <p className="text-gray-300">Galactic 3D certified programs recognized by top engineering companies</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Practical Focus</h3>
              <p className="text-gray-300">Hands-on projects and real-world applications in every program</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Career Support</h3>
              <p className="text-gray-300">Job placement assistance and career guidance throughout your journey</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-800 rounded-2xl p-12 mb-20 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-gray-300">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-gray-300">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Student Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">Join our community of successful engineering professionals</p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/apply">Apply for Internship</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
