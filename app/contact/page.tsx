import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our programs? We're here to help you choose the right internship track for your career
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">info@techedumatic.com</p>
                  <p className="text-gray-300">admissions@techedumatic.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300">
                    Tech Edumatic Solutions
                    <br />
                    123 Innovation Hub
                    <br />
                    Electronic City, Bangalore - 560100
                    <br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  📋{" "}
                  <a href="/apply" className="text-red-400 hover:underline">
                    Apply for Internship
                  </a>
                </p>
                <p className="text-gray-300">
                  📚{" "}
                  <a href="/programs" className="text-red-400 hover:underline">
                    View All Programs
                  </a>
                </p>
                <p className="text-gray-300">
                  🏢{" "}
                  <a href="/about" className="text-red-400 hover:underline">
                    About Galactic 3D Certification
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">How long are the internship programs?</h3>
              <p className="text-gray-300">
                Program duration varies from 6-12 weeks depending on the track. AI/ML is 12 weeks, VLSI is 10 weeks,
                Embedded Systems is 8 weeks, and 3D Design & CAD is 6 weeks.
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">What is Galactic 3D Certification?</h3>
              <p className="text-gray-300">
                Galactic 3D (Advanced Engineering Certification) is an industry-recognized certification that validates
                your technical skills and is accepted by leading engineering companies.
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Do you provide job placement assistance?</h3>
              <p className="text-gray-300">
                Yes, we provide comprehensive career support including resume building, interview preparation, and
                connections with our partner companies.
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Can I switch tracks during the program?</h3>
              <p className="text-gray-300">
                Track changes are possible within the first week of the program, subject to availability and after
                consultation with our academic team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
