import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import res from './assets/nicholas-mendez-resume.pdf'
const Contact = () => {

  const resume = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-warning me-lg-1" viewBox="0 0 16 16">
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                </svg>
  const github = <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" className="text-warning me-lg-1" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
  const email = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" className="text-warning me-lg-1" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
  const linkedIn =  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-warning me-lg-1" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
  const blog =  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-warning me-lg-1"  viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                </svg>

  return (
    <Container id="contact" className="pt-5">
      <hr/>
      <Row className="text-center pt-5">
          <h1 className="text-top text-blk title text-center">Contact Me.</h1>
          <span className='fs-3 align-bottom'>Have a Project Proposal or Career Opportunity?<strong className="text-light"> Let's talk more.</strong></span>     
      </Row>
      <Row className="my-4" >
        <Col className="d-flex justify-content-center text-light align-items-center" >
          <Button 
            variant='dark' 
            rel="noopener noreferrer" 
            href="mailto:mendez.nicholasr@gmail.com"  
            className="icon mx-3 align-baseline "
            target="_blank"
          >
          {email} Email
          </Button>
          <Button 
            variant='dark' 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/mendez-nicholas"  
            className="icon mx-3 align-baseline"
            target="_blank"
          >
           {linkedIn} LinkedIn
          </Button>
          <Button 
            variant='dark' 
            rel="noopener noreferrer" 
            href={res}
            className="icon mx-3 align-baseline"
            target="_blank"
            download
          >
            {resume} Resume
          </Button>
          <Button 
            variant='dark' 
            rel="noopener noreferrer" 
            href="https://github.com/nickmendezFlatiron/"  
            className="icon mx-3 align-baseline"
            target="_blank"
          >
           {github} GitHub
          </Button>
          <Button 
            variant='dark' 
            rel="noopener noreferrer" 
            href="https://dev.to/nickmendez"
            className="icon mx-3 align-baseline"
            target="_blank"
          >
            {blog} Blog
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact