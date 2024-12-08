'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Noise } from 'noisejs'

export default function AnimatedBackground() {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.material.uniforms.time.value = t
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1, 200, 200]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
        }}
        vertexShader={`
          uniform float time;
          varying vec2 vUv;

          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

          float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1 = step(x0.yx, x0.xy);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1.xy;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m * m; m = m * m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0 * a0 + h * h );
            vec3 g = m * (a0 * vec3(x0.x, x12.x, x12.z) + h * vec3(x0.y, x12.y, x12.w));
            return 130.0 * dot(m, g);
          }

          void main() {
            vUv = uv;
            vec3 pos = position;
            float noiseFreq = 3.5;
            float noiseAmp = 0.15;
            vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);
            pos.z += snoise(noisePos.xy) * noiseAmp;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;

          void main() {
            vec3 color1 = vec3(0.1, 0.4, 0.8);
            vec3 color2 = vec3(0.7, 0.0, 0.8);
            float noise = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time) * 0.5 + 0.5;
            vec3 color = mix(color1, color2, noise);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  )
}
