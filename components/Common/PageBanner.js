import React from 'react'

export default function PageBanner({ pageTitle, BGImage }) {
  return (
    <>
      <div className={`page-title-area ${BGImage}`}>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
