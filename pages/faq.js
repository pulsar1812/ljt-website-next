import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import FaqContent from '../components/Faq/FaqContent'
import FaqForm from '../components/Faq/FaqForm'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'

export default function Faq() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='Frequently Asked Questions' BGImage='bg-one' />

      <FaqContent />

      <div className='pb-100'>
        <FaqForm />
      </div>

      <CtaAreaTwo />
    </>
  )
}
