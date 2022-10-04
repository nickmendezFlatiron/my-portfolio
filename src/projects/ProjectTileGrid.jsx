import {React, useContext} from 'react'
import ProjectContext from './ProjectContext'
import ProjectTiles from './ProjectTiles';
import Row from 'react-bootstrap/Row';

import floodLogo from '../assets/flood-mail/logo.png'
import extracktLogo from '../assets/extrackt/logo.png'

const ProjectTileGrid = ({setProject}) => {
  const [floodMail, extrackt] = useContext(ProjectContext)
  return (
    <Row  md={2} className="g-4 justify-content-around">
      <ProjectTiles setProject={setProject} image={extracktLogo} project={extrackt}/>
      <ProjectTiles setProject={setProject} image={floodLogo} project={floodMail}/>
    </Row>
  )
}

export default ProjectTileGrid