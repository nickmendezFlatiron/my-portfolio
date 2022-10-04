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
    <div>
      <div className="d-lg-none">
        <h1 className='text-top text-blk title text-center text-md-start' id="projects">Projects</h1>
      </div>
      <Row className=" align-items-top">   
        <ProjectsCard  project={project}/>
        <Col className='mx-2 order-md-first'>
          <div className="d-none d-lg-block">
            <h1 className='text-top text-blk title text-center text-md-start' id="projects">Projects</h1>
            <span className='fs-3 align-bottom'>Here are my most notable applications I've made. 
            <strong className='fs-4 text-light'> Click on a project for more info.</strong>
            </span>
          </div>
          <ProjectTileGrid setProject={setProject}/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Projects