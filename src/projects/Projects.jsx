import {React,useState, useContext} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTileGrid from './ProjectTileGrid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import ProjectContext from './ProjectContext'

const Projects = () => {
  const [floodMail , extrackt] = useContext(ProjectContext)
  const [project , setProject] = useState(extrackt)
  
  
  return (
    <>
      <Row className=" text-blk text-start align-items-top">   
        <Col className='mx-2'>
        <h1 className=' align-text-top text-blk' id="projects">Projects</h1>
        <p className='fs-4'>Here are my most notable applications I've made.</p>
        <ProjectTileGrid setProject={setProject}/>
        </Col>
        <ProjectsCard  project={project}/>
      </Row>
    </>
  )
}

export default Projects