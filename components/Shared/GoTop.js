import React, { useState, useEffect } from 'react'

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility()
    })
  }, [])

  return (
    <>
      <div className='scroll-to-top'>
        {isVisible && <i className='pe-7s-angle-up' onClick={scrollToTop}></i>}
      </div>
    </>
  )
}
