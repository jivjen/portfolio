'use client'

import React, { useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import 'react-vertical-timeline-component/style.min.css'

export default function FuturisticObject() {
    const meshRef = useRef()
  
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
        meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.3
      }
    })
  
    return (
      <group>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            wireframe={true}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    )
  }