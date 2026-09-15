import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Shared gradient texture: solid at the head, fading to transparent at the tail.
let sharedTailTexture = null
function getTailTexture() {
  if (sharedTailTexture) return sharedTailTexture
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 8
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 128, 0)
  gradient.addColorStop(0, 'rgba(255,255,255,0)')
  gradient.addColorStop(1, 'rgba(255,255,255,1)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 8)
  sharedTailTexture = new THREE.CanvasTexture(canvas)
  return sharedTailTexture
}

// A single streak that travels across the sky, then resets after a random pause.
function ShootingStar({ cycle, travelDuration, offset, color, length, width }) {
  const groupRef = useRef(null)
  const tailRef = useRef(null)
  const texture = useMemo(() => getTailTexture(), [])

  const [start, end] = useMemo(() => {
    const y = 6 + Math.random() * 10
    const x = -20 - Math.random() * 8
    const spread = 22 + Math.random() * 12
    const drop = 6 + Math.random() * 8
    const z = -12 - Math.random() * 22
    return [new THREE.Vector3(x, y, z), new THREE.Vector3(x + spread, y - drop, z)]
  }, [])

  const direction = useMemo(() => end.clone().sub(start).normalize(), [start, end])
  const angle = Math.atan2(direction.y, direction.x)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = (state.clock.elapsedTime + offset) % cycle
    if (t < travelDuration) {
      const progress = t / travelDuration
      groupRef.current.position.lerpVectors(start, end, progress)
      groupRef.current.visible = true
      // Fade in quickly, fade out near the end of the flight.
      const fade = progress < 0.15 ? progress / 0.15 : progress > 0.8 ? (1 - progress) / 0.2 : 1
      if (tailRef.current) tailRef.current.material.opacity = fade
    } else {
      groupRef.current.visible = false
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, angle]}>
      <mesh ref={tailRef} position={[-length / 2, 0, 0]}>
        <planeGeometry args={[length, width]} />
        <meshBasicMaterial map={texture} color={color} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh>
        <sphereGeometry args={[width * 0.6, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

export default function ShootingStars() {
  const stars = useMemo(
    () => [
      { cycle: 7, travelDuration: 1.1, offset: 0, color: '#e0f2fe', length: 4, width: 0.09 },
      { cycle: 10, travelDuration: 0.9, offset: 3.5, color: '#fef3c7', length: 3.2, width: 0.07 },
      { cycle: 13, travelDuration: 1.3, offset: 7, color: '#e0f2fe', length: 4.6, width: 0.1 },
    ],
    [],
  )

  return (
    <>
      {stars.map((star, i) => (
        <ShootingStar key={i} {...star} />
      ))}
    </>
  )
}
