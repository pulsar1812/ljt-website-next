import React, { useState, useEffect } from 'react'
import Link from '../../utils/ActiveLink'
import Image from 'next/image'

export default function NavbarTwo() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  }, [])

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <div id='navbar' className='navbar-area navbar-style-2'>
        <nav className='navbar navbar-expand-md navbar-light'>
          <div className='container-fluid'>
            <Link href='/'>
              <a className='navbar-brand'>
                <img
                  src='/images/logo-ljt-150x150.png'
                  className='black-logo'
                  alt='logo'
                />
                <img
                  src='/images/logo-ljt-150x150.png'
                  className='white-logo'
                  alt='logo'
                />
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar top-bar'></span>
              <span className='icon-bar middle-bar'></span>
              <span className='icon-bar bottom-bar'></span>
            </button>

            <div className={classOne} id='navbarSupportedContent'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link href='/' activeClassName='active'>
                    <a className='nav-link'>Home</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/about' activeClassName='active'>
                    <a className='nav-link'>About us</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/portfolio' activeClassName='active'>
                    <a className='nav-link'>Portfolio</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/contact' activeClassName='active'>
                    <a className='nav-link'>Contact Us</a>
                  </Link>
                </li>
              </ul>

              <div className='others-options'>
                <Link href='/contact'>
                  <a className='btn btn-primary'>Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
