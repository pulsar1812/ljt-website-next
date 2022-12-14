import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MainBanner() {
  return (
    <>
      <div className='main-banner main-banner2 item-bg1'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='main-banner-content'>
                    <h1>We're a full-range digital agency.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <Link href='/contact'>
                      <a className='btn btn-primary'>Get Started</a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div
                    className='banner-animation-image2'
                    data-aos='fade-up'
                    data-aos-duration='1200'
                    data-aos-delay='100'
                  >
                    <img
                      src='/images/banner-img3.png'
                      className='main-pic'
                      alt='image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
