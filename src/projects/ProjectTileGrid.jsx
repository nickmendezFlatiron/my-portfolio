import {React, useContext} from 'react'
import ProjectContext from './ProjectContext'
import ProjectTiles from './ProjectTiles';
import Row from 'react-bootstrap/Row';

import floodLogo from '../assets/flood-mail/logo.png'
import extracktLogo from '../assets/extrackt/logo.png'

const ProjectTileGrid = ({setProject}) => {
  const [floodMail, extrackt] = useContext(ProjectContext)
  return (
    <Row  md={2} className=" pt-2 mt-md-4 justify-content-center justify-content-md-start">
      <ProjectTiles setProject={setProject} image={extracktLogo} project={extrackt}/>
      <ProjectTiles setProject={setProject} image={floodLogo} project={floodMail}/>
    </Row>
  )
}

export default ProjectTileGrid