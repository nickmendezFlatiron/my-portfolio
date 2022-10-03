import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar 
      bg="*" 
      variant="light" 
      className="justify-content-end"
      fixed="top"
    >
      <Container >
        <Navbar.Brand href="#home">Nicholas Mendez</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
  )
}

export default Navigation