import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import AboutContent from '../components/About/AboutContent'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import Team from '../components/Common/Team'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

export default function About() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='About Us' BGImage='bg-one' />

      <AboutContent />

      <FunFactsTwo />

      {/* <Team /> */}

      <CtaAreaTwo />
    </>
  )
}
