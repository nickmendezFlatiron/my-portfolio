import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'



const ProjectTiles = ({image, project, setProject}) => {
  return (
      <Col xs={{span: 3}} md={{span: 4}} onClick={()=>setProject(project)} className="mb-4">
        <Card className="bg-card border border-4 border-dark rounded-3">
          <Card.Img className="p-2" variant="top"  src={image} />
        </Card>
      </Col>
  )
}

export default ProjectTiles