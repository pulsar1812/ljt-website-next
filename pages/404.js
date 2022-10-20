import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import ErrorContent from '../components/Error/ErrorContent'

export default function Error() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='404 Error' BGImage='bg-three' />

      <ErrorContent />
    </>
  )
}
