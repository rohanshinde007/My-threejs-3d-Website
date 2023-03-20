import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Mac from "./Mac";



const WebDesign = () => {
  return (
    <>
      <Canvas camera={{ fov: 80, position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default WebDesign;