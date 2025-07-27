import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import HeroBanner from '../components/HeroBanner'

const AboutPage = () => {
  return (
    <section className='w-full min-h-screen bg-slate-100'>
      <HeroBanner
        title="About Me"
        breadcrumb="Home / About"
      />
      <About />
      <Skills />
    </section>
  )
}

export default AboutPage