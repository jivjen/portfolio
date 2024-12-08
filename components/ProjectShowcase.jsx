'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import GlitchText from "./GlitchText";
import HolographicCard from './HolographicCard';

const projects = [
    {
      title: "AI-Powered Inventory Management",
      description: "Revolutionizing retail with cutting-edge image recognition.",
      techStack: ["Python", "TensorFlow", "OpenCV", "React Native"]
    },
    {
      title: "Quantum-Inspired Optimization Engine",
      description: "Solving complex problems with quantum computing principles.",
      techStack: ["Q#", "Python", "Azure Quantum", "D-Wave Ocean"]
    },
    {
      title: "Blockchain-Based Supply Chain",
      description: "Ensuring transparency and traceability in global logistics.",
      techStack: ["Solidity", "Ethereum", "Web3.js", "React"]
    }
  ]

// Project showcase component
export default function ProjectShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const constraintsRef = useRef(null)
  
    return (
      <motion.div ref={constraintsRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          className="flex"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-full p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HolographicCard>
                <h3 className="text-2xl font-bold mb-2">
                  <GlitchText text={project.title} />
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    )
  }
