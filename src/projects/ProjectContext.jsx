import {React, createContext} from 'react';

import collection from '../assets/extrackt/collection.png'
import crate from '../assets/extrackt/crate.png'
import main from '../assets/extrackt/main.png'
import preview from '../assets/extrackt/preview.png'

import account from '../assets/flood-mail/account.png'
import home from '../assets/flood-mail/home.png'
import inbox from '../assets/flood-mail/inbox.png'
import thread from '../assets/flood-mail/thread.png'

export const floodMail = {
  title: "Flood Mail",
  underHeading: "A Game Theory Based Messaging Platform",
  description: "Every user has complete control over their conversations and data. Flood mail requires no personal information to signup. When a message or conversation is deleted by a flood user , it is deleted forever. For both users involved in the conversation. Delete your account , and all associated data is deleted as well. " ,
  images:[account, home, inbox, thread],
  technologies: ["React", "JavaScript", "Ruby", "Ruby on Rails", "HTML", "CSS/SCSS", "PostgreSQL", "Bootstrap", "Adobe CC"],
  links: {
    github: "https://github.com/nickmendezFlatiron/flood-mail",
    website: 'https://flood-mail.herokuapp.com'
  }
}
export const extrackt = {
  title: "Extrackt",
  underHeading: "A Marketplace for Royalty-Free, Commercially Licensed Audio Samples",
  description: "Extrackt is an audio sample marketplace. Members buy and sell sounds to incorporate into their own songs and recordings. The marketplace , called The Crate, is user curated. Anyone is allowed to contribute their own samples to the marketplace.",
  images:[main, crate, collection, preview],
  technologies: ["React", "JavaScript", "Ruby", "Ruby on Rails", "HTML", "CSS/SCSS", "PostgreSQL", "Bootstrap", "AWS", "Adobe CC"],
  links: {
    github: "https://github.com/nickmendezFlatiron/extrackt",
    website: "https://extrackt.onrender.com/"
  }
}
const ProjectContext = createContext({floodMail, extrackt})

export default ProjectContext