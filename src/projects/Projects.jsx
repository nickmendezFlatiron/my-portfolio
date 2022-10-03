import React from 'react'
import ProjectsCard from './ProjectsCard'
import Row from 'react-bootstrap/Row'

const Projects = () => {
  const floodMail = {
    title: "Flood Mail",
    underHeading: "A game theory based messaging platform",
    description: "Flood Mail is a game theory based messaging app. Every user has complete control over their conversations and data. Flood mail requires no personal information to signup. When a message or conversation is deleted by a flood user , it is deleted forever. For both users involved in the conversation. Delete your account , and all associated data is deleted as well. Extrackt is an audio sample marketplace , where members can download royalty-free , commercially licensed audio sample files. The marketplace, called The Crate, is user curated. Anyone is allowed to contribute their own samples to the marketplace." ,
    images:[],
    technologies: []
  }
  const extrackt = {
    title: "Extrackt",
    underHeading: "A user-curated  marketplace for royalty-free , commercially licensed audio samples",
    description: "Extrackt is an audio sample marketplace , where members can download royalty-free , commercially licensed audio sample files. The marketplace , called The Crate, is user curated. Anyone is allowed to contribute their own samples to the marketplace.",
    images:[],
    technologies: []
  }
  return (
    <Row>

      <h1 className='text-center' id="projects">PROJECTS</h1>
    </Row>
  )
}

export default Projects