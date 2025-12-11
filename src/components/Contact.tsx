"use client"

import { useEffect, useState } from "react"
import { ConsultationForm } from "./ConsultationForm"

export function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-gray-100 min-h-[50vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">

    </section>
  )
}

function PixelGrid({ mounted }: { mounted: boolean }) {
  const pixels = Array.from({ length: 120 }, (_, i) => ({
    delay: Math.random() * 2,
    opacity: 0.1 + Math.random() * 0.4,
    size: 8 + Math.floor(Math.random() * 24),
  }))

  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-2 p-8">
      {pixels.map((pixel, i) => (
        <div
          key={i}
          className={`bg-white rounded-sm transition-all duration-1000 ${mounted ? "scale-100" : "scale-0"}`}
          style={{
            opacity: pixel.opacity,
            transitionDelay: `${pixel.delay}s`,
            width: pixel.size,
            height: pixel.size,
          }}
        />
      ))}
    </div>
  )
}

function CornerDecoration() {
  const colors = ["bg-chutney-red", "bg-chutney-orange", "bg-chutney-yellow", "bg-chutney-light-orange"]
  const grid = Array.from({ length: 36 }, (_, i) => ({
    color: colors[i % colors.length],
    visible: Math.random() > 0.35,
  }))

  return (
    <div className="grid grid-cols-6 gap-1 p-4">
      {grid.map((cell, i) => (
        <div
          key={i}
          className={`w-4 h-4 lg:w-6 lg:h-6 rounded-sm transition-all duration-500 hover:scale-110 ${cell.visible ? cell.color : "bg-white/10"
            }`}
          style={{ transitionDelay: `${i * 20}ms` }}
        />
      ))}
    </div>
  )
}
