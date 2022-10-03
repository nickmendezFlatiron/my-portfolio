import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const About = () => {
  return (
    <Row className= "mx-5 pt-3 mt-5 content align-items-md-end">
      <Col md>
        <h1 className='' id='name'>NICHOLAS MENDEZ</h1>
        <h2>Full Stack Developer</h2>
      </Col>
      <Col className='text-md-center'>
        <p >
          Hello, my Name is Nicholas Mendez
        </p>
      </Col>
    </Row>
  )
}

export default About