'use client'

import { useState, useEffect } from 'react'
import 'react-vertical-timeline-component/style.min.css'

// Glitch text effect component
export default function GlitchText({ text }) {
    const [glitchedText, setGlitchedText] = useState(text)
  
    useEffect(() => {
      const glitchInterval = setInterval(() => {
        const glitched = text
          .split('')
          .map((char) => (Math.random() > 0.9 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char))
          .join('')
        setGlitchedText(glitched)
      }, 50)
  
      const resetInterval = setInterval(() => {
        setGlitchedText(text)
      }, 200)
  
      return () => {
        clearInterval(glitchInterval)
        clearInterval(resetInterval)
      }
    }, [text])
  
    return <span className="font-mono">{glitchedText}</span>
  }

