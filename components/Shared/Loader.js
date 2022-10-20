import React from 'react'

export default function Loader() {
  return (
    <>
      <div
        className={`preloader ${
          this.props.loading ? '' : 'preloader-deactivate'
        }`}
      >
        <div className='spinner'></div>
      </div>
    </>
  )
}
