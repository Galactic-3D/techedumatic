"use client"

import type React from "react"

import { useEffect, useState } from "react"

// Galactic Spinner Component
export function GalacticSpinner({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  }

  return <div className={`galactic-spinner ${sizeClasses[size]} ${className}`} />
}

// Orbit Loader Component
export function OrbitLoader({ className = "" }: { className?: string }) {
  return <div className={`orbit-loader ${className}`} />
}

// Dot Pulse Loader
export function DotPulseLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`dot-pulse ${className}`}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  )
}

// Wave Loader
export function WaveLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`wave-loader ${className}`}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  )
}

// Particle Loader
export function ParticleLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`particle-loader ${className}`}>
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
    </div>
  )
}

// Page Loading Overlay
export function PageLoader({ isLoading, children }: { isLoading: boolean; children?: React.ReactNode }) {
  const [shouldRender, setShouldRender] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true)
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <div className={`page-loader ${!isLoading ? "fade-out" : ""}`}>
      <div className="text-center">
        <div className="mb-8">
          <ParticleLoader />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TE</span>
          </div>
          <span className="text-2xl font-bold text-white">Tech Edumatic</span>
        </div>
        <p className="text-gray-300 mb-6">Loading your engineering journey...</p>
        <WaveLoader />
        {children}
      </div>
    </div>
  )
}

// Skeleton Card Loader
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`skeleton-card ${className}`}>
      <div className="skeleton skeleton-title w-3/4" />
      <div className="skeleton skeleton-text w-full" />
      <div className="skeleton skeleton-text w-5/6" />
      <div className="skeleton skeleton-text w-4/6" />
      <div className="skeleton skeleton-button w-1/2" />
    </div>
  )
}

// Loading Button Component
export function LoadingButton({
  isLoading,
  children,
  loadingText = "Loading...",
  className = "",
  ...props
}: {
  isLoading: boolean
  children: React.ReactNode
  loadingText?: string
  className?: string
  [key: string]: any
}) {
  return (
    <button
      className={`relative ${className} ${isLoading ? "cursor-not-allowed opacity-75" : ""}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <GalacticSpinner size="sm" className="mr-2" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  )
}

// Form Loading Overlay
export function FormLoadingOverlay({ isLoading, message = "Processing..." }: { isLoading: boolean; message?: string }) {
  if (!isLoading) return null

  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center rounded-lg z-10">
      <div className="text-center">
        <OrbitLoader className="mb-4" />
        <p className="text-white font-medium">{message}</p>
      </div>
    </div>
  )
}

// Track Cards Loading State
export function TrackCardsLoader() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}

// Text Loading Animation
export function LoadingText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-red-400">|</span>
    </span>
  )
}

// Progress Bar Loader
export function ProgressLoader({ progress, className = "" }: { progress: number; className?: string }) {
  return (
    <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`}>
      <div
        className="bg-gradient-to-r from-red-600 to-orange-600 h-2 rounded-full transition-all duration-300 pulse-glow"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  )
}
