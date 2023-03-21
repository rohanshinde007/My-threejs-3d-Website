import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Media from 'react-media';


import { PresentationControls } from '@react-three/drei'
import Level from './BigIntro/Level'
import Sudo from './BigIntro/Sudo'
import Camera from './BigIntro/Camera'
import Cactus from './BigIntro/Cactus'
import Icon from './BigIntro/Icon'
import Pyramid from './BigIntro/Pyramid'
import { HashLink as Link } from "react-router-hash-link";




const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    scroll-snap-align: none;
    height: 110vh;
  
  }
`;

const Container = styled.div`
  height: 100vh;
  width:100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 1200px) {
    flex: 1;
  }
`;

const Title = styled.h1`
   font-size: 4.5vh;
  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width:1200px) {
    align-items: center;
    flex: 1;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 2vh;
  color: lightgray;

  @media only screen and (max-width:1200px) {
    padding: 20px;
    font-size:2vh;
    text-align: center;
    margin: 0.6vh;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;




const Who = () => {

  return (
    <Section id="S">
      <Container>
        <Left>


          <Media queries={{ medium: { maxWidth: 599 } }}>
            {matches =>
              matches.medium ? (

                <Canvas flat dpr={[1, 2]} camera={{ fov: 32, position: [0, 0, 7] }}>
                  <ambientLight />
                  <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, -Math.PI / 4, 0]}
                    polar={[0, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <group position-y={-1.0} dispose={null}>
                      <Level />
                      <Sudo />
                      <Camera />
                      <Cactus />
                      <Icon />
                      <Pyramid />
                    </group>
                  </PresentationControls>
                </Canvas>



              ) : (

                <Canvas flat dpr={[1, 2]} camera={{ fov: 32, position: [0, 0, 7] }}>
                  <ambientLight />
                  <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, -Math.PI / 4, 0]}
                    polar={[0, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <group position-y={-1.0} dispose={null}>
                      <Level />
                      <Sudo />
                      <Camera />
                      <Cactus />
                      <Icon />
                      <Pyramid />
                    </group>
                  </PresentationControls>
                </Canvas>

              )
            }
          </Media>


        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            Welcome to our website! We are a team of experts specializing in website development, game development, and digital marketing. Our team is composed of talented designers, developers, and marketers who are passionate about delivering high-quality services to our clients. <br /> <br />

          </Desc>
          <Link to={'#W'}><Button>See our works</Button></Link>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;