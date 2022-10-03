import React, {useCallback} from 'react'
import Particles from "react-particles";
import {particlesConfig} from './particle-config'
import { loadFull } from "tsparticles";

const ParticleBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
   <Particles 
   options={particlesConfig} 
   id="tsparticles"
   init={particlesInit}
   />
  )
}

export default ParticleBG