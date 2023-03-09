'use client'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Atom from './Atom'

function ContainerAtom () {
  return (
    <Canvas className='h-full w-full' camera={{ position: [0, 0, 10] }}>
      <Suspense fallback={null}>
        <Atom />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  )
}

export default ContainerAtom
