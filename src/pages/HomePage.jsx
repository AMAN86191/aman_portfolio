import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectsSlider from '../components/ProjectsSlider'
import ContactMe from '../components/ContactMe'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <About bg="bg-[#0f172a]" />
        <Skills />
        <ProjectsSlider />
        <ContactMe />
    </div>
  )
}

export default HomePage