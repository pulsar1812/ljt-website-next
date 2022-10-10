import React, { Component } from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import PortfolioDetailsContent from '../components/Portfolio/PortfolioDetailsContent'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

class PortfolioDetails extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle='UX for Mobile Apps' BGImage='bg-two' />

        <PortfolioDetailsContent />

        <CtaAreaTwo />
      </>
    )
  }
}

export default PortfolioDetails
