import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'

export default function Contact() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='Contact Us' BGImage='bg-three' />

      <ContactInfo />

      <ContactForm />
    </>
  )
}
