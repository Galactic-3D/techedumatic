"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  GalacticSpinner,
  OrbitLoader,
  DotPulseLoader,
  WaveLoader,
  ParticleLoader,
  PageLoader,
  SkeletonCard,
  LoadingButton,
  FormLoadingOverlay,
  LoadingText,
  ProgressLoader,
} from "@/components/LoadingAnimations"

export default function LoadingDemo() {
  const [showPageLoader, setShowPageLoader] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleButtonClick = () => {
    setButtonLoading(true)
    setTimeout(() => setButtonLoading(false), 3000)
  }

  const handleFormSubmit = () => {
    setFormLoading(true)
    setTimeout(() => setFormLoading(false), 2000)
  }

  const handleProgressDemo = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Loading Animations Demo</h1>
          <p className="text-xl text-gray-300">Custom dark theme loading animations for Tech Edumatic Solutions</p>
        </div>

        {/* Spinner Animations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Spinner Animations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Galactic Spinner</h3>
              <div className="flex justify-center mb-4">
                <GalacticSpinner size="lg" />
              </div>
              <p className="text-gray-400 text-sm">Red/Orange rotating spinner</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Orbit Loader</h3>
              <div className="flex justify-center mb-4">
                <OrbitLoader />
              </div>
              <p className="text-gray-400 text-sm">Orbiting particles</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Dot Pulse</h3>
              <div className="flex justify-center mb-4">
                <DotPulseLoader />
              </div>
              <p className="text-gray-400 text-sm">Pulsing dots sequence</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Wave Loader</h3>
              <div className="flex justify-center mb-4">
                <WaveLoader />
              </div>
              <p className="text-gray-400 text-sm">Wave animation bars</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Particle Loader</h3>
              <div className="flex justify-center mb-4">
                <ParticleLoader />
              </div>
              <p className="text-gray-400 text-sm">Floating particles</p>
            </div>
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Interactive Loading States</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Loading Button</h3>
              <LoadingButton
                isLoading={buttonLoading}
                onClick={handleButtonClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                loadingText="Processing..."
              >
                Click to Load
              </LoadingButton>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Page Loader</h3>
              <Button
                onClick={() => {
                  setShowPageLoader(true)
                  setTimeout(() => setShowPageLoader(false), 3000)
                }}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                Show Page Loader
              </Button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative">
              <h3 className="text-white font-semibold mb-4">Form Loading</h3>
              <Button onClick={handleFormSubmit} className="w-full bg-red-600 hover:bg-red-700">
                Submit Form
              </Button>
              <FormLoadingOverlay isLoading={formLoading} message="Submitting form..." />
            </div>
          </div>
        </section>

        {/* Progress and Text Animations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Progress & Text Animations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Progress Loader</h3>
              <ProgressLoader progress={progress} className="mb-4" />
              <p className="text-gray-300 text-sm mb-4">Progress: {progress}%</p>
              <Button onClick={handleProgressDemo} className="bg-red-600 hover:bg-red-700">
                Start Progress Demo
              </Button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-white font-semibold mb-4">Loading Text</h3>
              <div className="text-lg text-white">
                <LoadingText text="Welcome to Tech Edumatic Solutions!" />
              </div>
            </div>
          </div>
        </section>

        {/* Skeleton Loading */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Skeleton Loading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Single Skeleton Card</h3>
              <SkeletonCard />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Track Cards Loader</h3>
              <div className="grid grid-cols-2 gap-4">
                <SkeletonCard />
                <SkeletonCard />
              </div>
            </div>
          </div>
        </section>
      </div>

      <PageLoader isLoading={showPageLoader} />
    </div>
  )
}
