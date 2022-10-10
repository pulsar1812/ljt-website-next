import React, { Component } from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import WorksStyleOne from '../components/Portfolio/WorksStyleOne'
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

class Portfolio extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle='Our Portfolio' BGImage='bg-three' />

        <WorksStyleOne />

        <WorksStyleTwo />

        <CtaAreaTwo />
      </>
    )
  }
}

export default Portfolio
