
import './App.css';
import Hero from './Components/Hero';
import Who from './Components/Who';
import Works from './Components/Works';
import Contact from '../src/Components/Contact/Contact';
import Lastpage from '../src/Components/Lastpage/Lastpage'

import styled from 'styled-components';

import { BrowserRouter } from "react-router-dom";
import Projects from './Components/Projects/Projects';





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
    <Projects/>
    <Contact/>
    <Lastpage/>

    </Container>
    </BrowserRouter>
  );
}

export default App;
