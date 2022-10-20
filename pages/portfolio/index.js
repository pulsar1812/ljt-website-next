import React from 'react'
import NavbarTwo from '../../components/Layouts/NavbarTwo'
import PageBanner from '../../components/Common/PageBanner'
import WorksStyleTwo from '../../components/Portfolio/WorksStyleTwo'
import CtaAreaTwo from '../../components/Common/CtaAreaTwo'

export default function Portfolio() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='Our Portfolio' BGImage='bg-three' />

      <WorksStyleTwo />

      <CtaAreaTwo />
    </>
  )
}
