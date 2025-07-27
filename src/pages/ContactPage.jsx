import React from 'react'
import ContactMe from '../components/ContactMe'
import HeroBanner from '../components/HeroBanner'

const ContactPage = () => {
  return (
    <section>
      <HeroBanner
        title="Contact Us"
        breadcrumb="Home / Contact Us"
      />
      <ContactMe />
    </section>
  )
}

export default ContactPage