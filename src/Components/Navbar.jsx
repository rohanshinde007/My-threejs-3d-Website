import React from 'react'
import styled from 'styled-components';

import { HashLink as Link } from 'react-router-hash-link';



const Section = styled.div`
display: flex;
justify-content: center;
scroll-snap-align: center;


@media only screen and (max-width: 830px) {
    width: 100%;
    scroll-snap-align: none;
  }


  @media only screen and (max-width: 1360px) {
    width: 90%;
    scroll-snap-align: none;
  }


`;

const Container = styled.div`
 width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 830px) {
    width: 100%;
    padding: 10px;
  }

  @media only screen and (max-width: 1260px) {

    width: 100%;
  }

`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 1360px) {

   gap: 5vh;
  }

`;

const Logo = styled.img`
height: 70px;


@media only screen and (max-width: 1360px) {
    height:7vh;
  }

`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;


  @media only screen and (max-width: 830px) {
    display: none;
  }
  @media only screen and (max-width: 1360px) {
   gap: 20px;
  }
`;

const ListItem = styled.li`
 cursor: pointer;
 text-decoration: none;
 color: white;
 :hover{
  color: red;
 }
 
 
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./Img/logo.png" />
          <List>
            <Link style={{ textDecoration: 'none' }} to={"#H"} smooth> <ListItem>Home</ListItem></Link>
            <Link style={{ textDecoration: 'none' }} to={"#S"} smooth>   <ListItem> Studio </ListItem></Link>
            <Link style={{ textDecoration: 'none' }} to={"#W"} smooth>    <ListItem> Works </ListItem></Link>
            <Link style={{ textDecoration: 'none' }} to={"#C"} smooth>   <ListItem> Contact us</ListItem></Link>
          </List>

        </Links>

        <Icons>
          <Link to={"#C"}><Button>Bye Now</Button> </Link>

        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
