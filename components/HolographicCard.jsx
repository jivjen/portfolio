'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

// Holographic card component
export default function HolographicCard({ children }) {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
  
    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setRotateX((y / rect.height - 0.5) * 20)
      setRotateY((x / rect.width - 0.5) * 20)
    }
  
    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
    }
  
    return (
      <motion.div
        ref={cardRef}
        className="relative bg-opacity-10 bg-white backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 opacity-30" />
        <div className="relative z-10 p-6">{children}</div>
      </motion.div>
    )
  };
  
  