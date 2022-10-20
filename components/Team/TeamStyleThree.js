import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

export default function TeamStyleThree() {
  return (
    <>
      <div className='pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Expert Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className='mySwiper team-slider'
          >
            <SwiperSlide>
              <div className='team-card text-center'>
                <div className='team-img'>
                  <img src='/images/team/team9.jpg' alt='Image' />

                  <div className='social-links'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <li>
                          <a href='https://twitter.com/' target='_blank'>
                            <i className='icofont-twitter'></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='team-caption'>
                  <h3>James White</h3>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='team-card text-center'>
                <div className='team-img'>
                  <img src='/images/team/team10.jpg' alt='Image' />

                  <div className='social-links'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <ul>
                          <li>
                            <a href='linkedin.com' target='_blank'>
                              <i className='icofont-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://twitter.com/' target='_blank'>
                              <i className='icofont-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                              <i className='icofont-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.instagram.com/'
                              target='_blank'
                            >
                              <i className='icofont-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://dribbble.com/' target='_blank'>
                              <i className='icofont-dribbble'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='team-caption'>
                  <h3>Johnson Lee</h3>
                  <p>Backend Specialist</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='team-card text-center'>
                <div className='team-img'>
                  <img src='/images/team/team11.jpg' alt='Image' />

                  <div className='social-links'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <ul>
                          <li>
                            <a href='linkedin.com' target='_blank'>
                              <i className='icofont-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://twitter.com/' target='_blank'>
                              <i className='icofont-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                              <i className='icofont-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.instagram.com/'
                              target='_blank'
                            >
                              <i className='icofont-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://dribbble.com/' target='_blank'>
                              <i className='icofont-dribbble'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='team-caption'>
                  <h3>Williams Smith</h3>
                  <p>Front-end Specialist</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='team-card text-center'>
                <div className='team-img'>
                  <img src='/images/team/team12.jpg' alt='Image' />

                  <div className='social-links'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <ul>
                          <li>
                            <a href='linkedin.com' target='_blank'>
                              <i className='icofont-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://twitter.com/' target='_blank'>
                              <i className='icofont-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                              <i className='icofont-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.instagram.com/'
                              target='_blank'
                            >
                              <i className='icofont-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://dribbble.com/' target='_blank'>
                              <i className='icofont-dribbble'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='team-caption'>
                  <h3>Johnson</h3>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='team-card text-center'>
                <div className='team-img'>
                  <img src='/images/team/team13.jpg' alt='Image' />

                  <div className='social-links'>
                    <div className='d-table'>
                      <div className='d-table-cell'>
                        <ul>
                          <li>
                            <a href='linkedin.com' target='_blank'>
                              <i className='icofont-linkedin'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://twitter.com/' target='_blank'>
                              <i className='icofont-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                              <i className='icofont-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.instagram.com/'
                              target='_blank'
                            >
                              <i className='icofont-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='https://dribbble.com/' target='_blank'>
                              <i className='icofont-dribbble'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='team-caption'>
                  <h3>Thomas</h3>
                  <p>Office Manager</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
