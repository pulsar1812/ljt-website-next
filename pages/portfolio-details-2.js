import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import PortfolioDetailsContent2 from '../components/Portfolio/PortfolioDetailsContent2'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

export default function PortfolioDetails2() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='UX for Mobile Apps' BGImage='bg-two' />

      <PortfolioDetailsContent2 />

      <CtaAreaTwo />
    </>
  )
}
