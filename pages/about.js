import React, { Component } from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import AboutContent from '../components/About/AboutContent'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import Team from '../components/Common/Team'
// import Feedback from '../components/Common/Feedback'
// import Partner from '../components/Common/Partner'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

class About extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle='About Us' BGImage='bg-one' />

        <AboutContent />

        <FunFactsTwo />

        <Team />

        {/* <Feedback /> */}

        {/* <Partner /> */}

        <CtaAreaTwo />
      </>
    )
  }
}

export default About
