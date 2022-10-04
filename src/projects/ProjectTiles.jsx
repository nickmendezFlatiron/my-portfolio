import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const ProjectTiles = ({image, project, setProject}) => {
  return (
      <Col xs={{span: 4}} md={{span: 4}} onClick={()=>setProject(project)}>
        <Card className="text-black bg-card border border-4 border-dark rounded-3">
          <Card.Img className="p-2" variant="top"  src={image} />
        </Card>
      </Col>
  )
}

export default ProjectTiles