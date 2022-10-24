import React from 'react'
import Link from 'next/link'

import NavbarTwo from '../../components/Layouts/NavbarTwo'
import PageBanner from '../../components/Common/PageBanner'
import CtaAreaTwo from '../../components/Common/CtaAreaTwo'
import { projects } from '../../data/projects'

export default function Portfolio() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle='Featured Projects' BGImage='bg-three' />

      <div className='case-studies-area ptb-100 bg-fcfbfb'>
        <div className='container'>
          <div className='row justify-content-center'>
            {projects.map(({ id, imgUrl, category, title }) => (
              <div key={id} className='col-lg-4 col-sm-6'>
                <div className='work-card'>
                  <img src={imgUrl} alt='image' />
                  <div className='content'>
                    <span>
                      <Link href={`/portfolio/${id}`}>
                        <a>{category}</a>
                      </Link>
                    </span>
                    <h3>
                      <Link href={`/portfolio/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <Link href={`/portfolio/${id}`}>
                      <a className='custom-btn'>View Details</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaAreaTwo />
    </>
  )
}
