import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Robo from "./Robo"


const GameDevelopment = () => {
  return (
    <>
    <Canvas camera={{ fov: 80, position: [0, 0, 8] }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
      <Robo/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  </>
  )
}

export default GameDevelopment
