import React from 'react'
import Image from 'next/image'

export default function ProjectItem({ project }) {
  const { detailedImgUrl, category, title, description, client, techStack } =
    project

  console.log(category)

  return (
    <>
      <div className='portfolio-details ptb-100'>
        <div className='container'>
          <div className='pd-preview-img'>
            <img src={detailedImgUrl} alt='Project Image' />
          </div>

          <div className='service-details-info'>
            <div className='single-info-box'>
              <h4>Client</h4>
              <span>{client}</span>
            </div>

            <div className='single-info-box'>
              <h4>Category</h4>
              <span>{category}</span>
            </div>

            <div className='single-info-box'>
              <h4>Tech Stack</h4>
              <span>{techStack}</span>
            </div>
          </div>

          <div className='portfolio-desc style-2'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
