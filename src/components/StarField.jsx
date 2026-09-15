import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

// Slowly drifting star layers to give the background depth and motion.
function DriftingStars() {
  const groupRef = useRef(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.008
    groupRef.current.rotation.x += delta * 0.002
  })

  return (
    <group ref={groupRef}>
      <Stars radius={80} depth={50} count={3500} factor={4} saturation={0} fade speed={1} />
      <Stars radius={120} depth={80} count={1500} factor={6} saturation={0} fade speed={0.6} />
    </group>
  )
}

export default function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <DriftingStars />
      </Canvas>
      {/* Nebula glow overlays for atmosphere */}
      <div className="absolute -top-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-nebula-purple/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-nebula-blue/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[25rem] w-[25rem] rounded-full bg-nebula-pink/10 blur-[140px]" />
    </div>
  )
}
