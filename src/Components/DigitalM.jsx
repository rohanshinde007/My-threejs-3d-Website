
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/DigitalM-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5.28}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Garis} position={[-0.05, 0, 0]} scale={[0.01, 0.5, 0.02]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Black} position={[0, -0.08, 0]} rotation={[-Math.PI, 0, 0]} scale={[-0.07, 0.07, 0.07]} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Kanvas} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.76]} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Graphic} position={[-0.04, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.3} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/DigitalM-transformed.glb')
