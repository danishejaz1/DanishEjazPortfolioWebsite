import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// One rocky/gas planet with optional ring, slowly spinning and bobbing.
function Planet({ position, size, color, emissive, ring, speed = 0.15, bob = 0.4 }) {
  const meshRef = useRef(null)
  const groupRef = useRef(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * speed
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + offset) * bob
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} roughness={0.6} metalness={0.1} />
      </mesh>
      {ring && (
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          <meshBasicMaterial color={ring} side={2} transparent opacity={0.35} />
        </mesh>
      )}
    </group>
  )
}

export default function Planets() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#7dd3fc" />

      <Planet position={[-16, 9, -32]} size={2} color="#a5b4fc" emissive="#4c1d95" ring="#c7d2fe" speed={0.08} />
      <Planet position={[17, -10, -40]} size={2.8} color="#fbbf24" emissive="#78350f" speed={0.05} bob={0.6} />
      <Planet position={[-13, -8, -16]} size={0.7} color="#7dd3fc" emissive="#0c4a6e" speed={0.2} bob={0.3} />
      <Planet position={[15, 4, -20]} size={0.55} color="#34d399" emissive="#065f46" speed={0.25} bob={0.25} />
      <Planet position={[0, -13, -42]} size={3.4} color="#1c2130" emissive="#1e293b" speed={0.03} bob={0.4} />
    </>
  )
}
