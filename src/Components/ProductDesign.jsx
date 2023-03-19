import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DigitalM from './DigitalM'

const ProductDesign = () => {
  return (
    <>
      <Canvas camera={{ fov: 80, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <DigitalM/>
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ProductDesign;