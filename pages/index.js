import React from 'react'
import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomePages/DefaultHomeTwo/MainBanner'
import Services from '../components/HomePages/DefaultHomeTwo/Services'
import About from '../components/HomePages/DefaultHomeTwo/About'
import OurWorks from '../components/HomePages/DefaultHomeTwo/OurWorks'
import CtaArea from '../components/Common/CtaArea'
import Partner from '../components/Common/Partner'
import WorkProcess from '../components/HomePages/DefaultHomeTwo/WorkProcess'

export default function DefaultHome2() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      {/* <OurWorks /> */}

      <WorkProcess />

      <Partner />

      <CtaArea />
    </>
  )
}
