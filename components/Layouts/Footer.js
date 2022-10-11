import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear()
    return (
      <>
        <footer className='footer-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-3 col-sm-6'>
                <div className='single-footer-widget'>
                  <div className='logo'>
                    <Link href='/'>
                      <a>
                        <img src='/images/logo-ljt-150x150.png' alt='Logo' />
                      </a>
                    </Link>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <ul className='social-links'>
                    <li>
                      <a href='https://linkedin.com/' target='_blank'>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <i className='icofont-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/' target='_blank'>
                        <i className='icofont-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='single-footer-widget ml-4 pl-5'>
                  <h3>Explore</h3>

                  <ul className='list'>
                    <li>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/about'>
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/portfolio'>
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/team'>
                        <a>Team</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-sm-6'>
                <div className='single-footer-widget ml-4'>
                  <h3>Quick Links</h3>

                  <ul className='list'>
                    <li>
                      <Link href='/contact'>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/faq'>
                        <a>Faq</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-3 col-sm-6'>
                <div className='single-footer-widget'>
                  <h3>Get in Touch</h3>

                  <ul className='get-in-touch'>
                    <li>
                      <i className='icofont-home'></i> Rm 1202, 12/F Wanchai
                      Commercial Centre, 192-204 Johnson Road, Wanchai, HK
                    </li>
                    <li>
                      <i className='icofont-live-support'></i>
                      <a href='tel:+324-9442-515'>+852 3333 3333</a>
                    </li>
                    <li>
                      <i className='icofont-envelope'></i>
                      <a href='mailto:hello@pungent.com'>info@ljt.app</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <div className='container'>
              <p>
                Copyright &copy; {currentYear} LJT Technology Limited. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
