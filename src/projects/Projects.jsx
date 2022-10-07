import {React,useState, useContext} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTileGrid from './ProjectTileGrid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import ProjectContext from './ProjectContext'

const Projects = () => {
  const [extrackt] = useContext(ProjectContext)
  const [project , setProject] = useState(extrackt)
  
  
  return (
    <>
      <div className='pt-md-0 mt-md-0 mt-5 pt-5' id="projects"></div>
      <Row className="align-items-top pt-lg-5" >   
        <ProjectsCard  project={project}/>
        <Col className='mx-2 order-md-first' >
          <div className="d-none d-lg-block">
            <h1 className='text-top text-blk title text-center text-md-start'>Projects</h1>
            <span className='fs-3 align-bottom'>Here are my most notable applications I've created. 
            <strong className='fs-4 text-light'> Click on a project for more information.</strong>
            </span>
          </div>
          <ProjectTileGrid setProject={setProject}/>
        </Col>
      </Row>
    </>
  )
}

export default Projects