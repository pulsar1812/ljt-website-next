import React, { Component } from 'react'
import Image from 'next/image'

class Team extends Component {
  render() {
    return (
      <>
        <div className='pt-100 pb-70'>
          <div className='container'>
            <div className='section-title'>
              <h2>Team Members</h2>
            </div>

            <div className='row justify-content-center'>
              <div className='col-lg-3 col-sm-6'>
                <div
                  className='team-card text-center'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='100'
                >
                  <img
                    src='/images/team/circle-team3.jpg'
                    alt='Image'
                    className='rounded-circle'
                  />

                  <div className='team-caption'>
                    <h3>Don Shum</h3>
                    <p>System Architect & Founder</p>
                    <ul>
                      <li>
                        <a href='linkedin.com' target='_blank'>
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
              </div>

              <div className='col-lg-3 col-sm-6'>
                <div
                  className='team-card text-center'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <img
                    src='/images/team/circle-team3.jpg'
                    alt='Image'
                    className='rounded-circle'
                  />

                  <div className='team-caption'>
                    <h3>Don Shum</h3>
                    <p>Backend Specialist</p>
                    <ul>
                      <li>
                        <a href='linkedin.com' target='_blank'>
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
              </div>

              <div className='col-lg-3 col-sm-6'>
                <div
                  className='team-card text-center'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='200'
                >
                  <img
                    src='/images/team/circle-team3.jpg'
                    alt='Image'
                    className='rounded-circle'
                  />

                  <div className='team-caption'>
                    <h3>Don Shum</h3>
                    <p>Frontend Specialist</p>
                    <ul>
                      <li>
                        <a href='linkedin.com' target='_blank'>
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
              </div>

              <div className='col-lg-3 col-sm-6'>
                <div
                  className='team-card text-center'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='400'
                >
                  <img
                    src='/images/team/circle-team3.jpg'
                    alt='Image'
                    className='rounded-circle'
                  />

                  <div className='team-caption'>
                    <h3>Don Shum</h3>
                    <p>Reactjs Specialist</p>
                    <ul>
                      <li>
                        <a href='linkedin.com' target='_blank'>
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
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Team
