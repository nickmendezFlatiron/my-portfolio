import Navigation from './Navigation';
import ParticleBG from './particles/ParticleBG';
import About from './About';
import Projects from "./projects/Projects"
import Skills from './skills/Skills';
import Contact from './Contact';
import ProjectContext,{floodMail, extrackt}  from './projects/ProjectContext'

import Container from 'react-bootstrap/Container'

import './styles/app.scss';
import './styles/App.css';



function App() {
   
  return (
   <>
    <Navigation />
    <ProjectContext.Provider value={[floodMail, extrackt]}>
      <Container className="px-5 px-md-0">
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </Container>
      <ParticleBG />
    </ProjectContext.Provider>
   </>
  );
}

export default App;
