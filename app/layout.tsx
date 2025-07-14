import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Edumatic Solutions - Engineering Internships & Training",
  description:
    "Skill-based training and internship programs for engineering students in AI/ML, VLSI Design, Embedded Systems, and 3D Design & CAD.",
  keywords: "engineering internships, AI training, VLSI design, embedded systems, 3D CAD, EOS certification",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
