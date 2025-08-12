import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectsSlider from '../components/ProjectsSlider'
import ContactMe from '../components/ContactMe'
import ProjectShowPage from './ProjectShowPage'

const HomePage = () => {
  return (
    <>
        <Hero />  
        <About bg="bg-[#0f172a]" />
        <Skills />
        {/* <ProjectsSlider /> */}
         <ProjectShowPage />
        {/* <ContactMe /> */}
    </>
  )
}

export default HomePage