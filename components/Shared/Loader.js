import React from 'react'

export default function Loader({ loading }) {
  return (
    <>
      <div className={`preloader ${loading ? '' : 'preloader-deactivate'}`}>
        <div className='spinner'></div>
      </div>
    </>
  )
}
