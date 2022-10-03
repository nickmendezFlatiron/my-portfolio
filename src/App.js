import Navigation from './Navigation';
import ParticleBG from './particles/ParticleBG';
import About from './About';
import Projects from "./projects/Projects"

import Container from 'react-bootstrap/Container'

import './styles/app.scss';
import './styles/App.css';



function App() {
  return (
   <>
    <Navigation />
    <Container>
      <About />
      <Projects />
      
    </Container>

    <ParticleBG />
   </>
  );
}

export default App;
