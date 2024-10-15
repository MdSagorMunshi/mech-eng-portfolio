'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion'

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

export const LoadingSpinner = () => {
  const gearOneControls = useAnimation()
  const gearTwoControls = useAnimation()
  const gearThreeControls = useAnimation()
  const pistonControls = useAnimation()

  useEffect(() => {
    gearOneControls.start({
      rotate: 360,
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    })
    gearTwoControls.start({
      rotate: -360,
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    })
    gearThreeControls.start({
      rotate: 360,
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    })
    pistonControls.start({
      y: [0, 20, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
    })
  }, [gearOneControls, gearTwoControls, gearThreeControls, pistonControls])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative w-64 h-64">
        <motion.svg
          className="absolute top-0 left-0"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          animate={gearOneControls}
        >
          <path
            d="M60,10 L65,0 L75,0 L80,10 L90,5 L100,15 L95,25 L105,30 L105,40 L95,45 L100,55 L90,65 L80,60 L75,70 L65,70 L60,60 L50,65 L40,55 L45,45 L35,40 L35,30 L45,25 L40,15 L50,5 L60,10 Z"
            fill="#4A5568"
          />
          <circle cx="60" cy="35" r="25" fill="#2D3748" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-0 right-0"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          animate={gearTwoControls}
        >
          <path
            d="M50,8 L54,0 L62,0 L66,8 L74,4 L82,12 L78,20 L86,24 L86,32 L78,36 L82,44 L74,52 L66,48 L62,56 L54,56 L50,48 L42,52 L34,44 L38,36 L30,32 L30,24 L38,20 L34,12 L42,4 L50,8 Z"
            fill="#718096"
          />
          <circle cx="50" cy="28" r="20" fill="#4A5568" />
        </motion.svg>
        <motion.svg
          className="absolute top-0 right-0"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          animate={gearThreeControls}
        >
          <path
            d="M40,6 L43,0 L49,0 L52,6 L58,3 L64,9 L61,15 L67,18 L67,24 L61,27 L64,33 L58,39 L52,36 L49,42 L43,42 L40,36 L34,39 L28,33 L31,27 L25,24 L25,18 L31,15 L28,9 L34,3 L40,6 Z"
            fill="#A0AEC0"
          />
          <circle cx="40" cy="21" r="15" fill="#718096" />
        </motion.svg>
        <motion.svg
          className="absolute left-1/2 bottom-0"
          width="40"
          height="80"
          viewBox="0 0 40 80"
          animate={pistonControls}
        >
          <rect x="10" y="0" width="20" height="60" fill="#2D3748" />
          <circle cx="20" cy="70" r="10" fill="#4A5568" />
        </motion.svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold"></span>
        </div>
      </div>
    </div>
  )
}
