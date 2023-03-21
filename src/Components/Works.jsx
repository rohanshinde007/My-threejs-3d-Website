import React, { useState } from "react";
import styled from "styled-components";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Game from "./GameDevelopment";

const data = [
  "Web Design",
  "Digital Marketing",
  "Game Development",
];


const Main = styled.div`

`;
const Section = styled.div`
  height: 105vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 1200px) {
    scroll-snap-align: none;
    height: 120vh;
  
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.7;

  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width:1200px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap:20px;
    justify-content: center;
    align-items: center;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 1200px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <>
      <Main>
        <Section id="W">
          <Container>
            <Left>
              <List>
                {data.map((item) => (
                  <ListItem key={item} text={item} onClick={() => setWork(item)}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Left>
            <Right>

              {work === "Web Design" ? (
                <WebDesign />
              ) : work === "Digital Marketing" ? (
                <ProductDesign />
              ) : (
                <Game />
              )}



            </Right>
          </Container>

        </Section>
      </Main>
    </>

  );
};

export default Works;