
import './App.css';
import Hero from './Components/Hero';
import Who from './Components/Who';
import Works from './Components/Works';
import Contact from '../src/Components/Contact/Contact';

import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from "react-router-dom";





const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`; 
function App() {
  return (
    <BrowserRouter>
     <Container>

    <Hero/>
    <Who/>
    <Works/>
    <Contact/>

    </Container>
    </BrowserRouter>
  );
}

export default App;
