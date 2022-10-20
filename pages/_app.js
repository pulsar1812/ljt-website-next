import React from 'react'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import 'animate.css'
import '../styles/all.min.css'
import '../styles/icofont.min.css'
import '../styles/pe-icon-7-stroke.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-image-lightbox/style.css'
import 'swiper/css'
import 'swiper/css/bundle'
// Global Style
import '../styles/style.css'
import '../styles/responsive.css'

import Head from 'next/head'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Shared/GoTop'

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>LJT Technology Limited</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
      <GoTop />
    </>
  )
}
