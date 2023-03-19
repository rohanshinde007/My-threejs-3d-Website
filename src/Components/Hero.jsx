import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Media from 'react-media';

import { HashLink as Link } from 'react-router-hash-link';


const Section = styled.div`
  height: 100vh;
  /* width: 1400px; */
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    height: 199vh;
    scroll-snap-align: none;
  }

`;

const Container = styled.div`
  height: 100%;
  /* scroll-snap-align: center; */
  /* width: 1400px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    /* height: 150vh; */
    flex-direction: column-reverse;
    align-items: center;
    justify-content:center;
  }

`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 8vh;
  @media only screen and (max-width: 1200px) {
    flex: 1;
    margin-left: 0;
    align-items: center;
    
    /* justify-content: none; */
  }

 
`;

const Title = styled.h1`
  font-size: 5.5vh;
  @media only screen and (max-width: 1200px) {
    text-align: center;
    font-size: 30px;
  }

`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.52vh;
`;

const Line = styled.img`
  height: 0.21vh;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 2.5vh;
  color: lightgray;
  @media only screen and (max-width:1200px) {
    padding: 2.6vh;
    font-size:2vh;
    text-align: center;
    margin: 0.6vh;
  }


`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 15vh;
  padding: 1.2vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width:1200px) {
    flex: 1;
    width: 95%;
  }

`;

const Img = styled.img`
  width: 45vh;
  height: 45vh;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width:1200px) {
    width: 45vh;
    height: 45vh;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="H">
      <Navbar />
      <Container>
        <Left>
          <Title>GFeature: Powering Your Online Growth with Website Development and Digital Marketing</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
           
Transforming your online vision into reality with our expertise in web development and digital marketing!
          </Desc>
         <Link to={'#S'}> <Button>Learn More</Button></Link>
        </Left>
        <Right>


          <Media queries={{ small: { maxWidth: 768 } }}>
    {matches =>
      matches.small ? (
        <Canvas>
        <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.7}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
      ) : (
        <Canvas>
        <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
      )
    }
      </Media>



          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;