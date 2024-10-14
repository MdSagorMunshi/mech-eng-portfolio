'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  )
}

export const LiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%">
            <stop offset="0" stopColor="#F3F4F6"/>
            <stop offset="1" stopColor="#E5E7EB"/>
          </linearGradient>
          <pattern id="b" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle fill="#4B5563" cx="12" cy="12" r="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#a)"/>
        <rect width="100%" height="100%" fill="url(#b)" fillOpacity="0.1"/>
      </svg>
    </div>
  )
}

export const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
)