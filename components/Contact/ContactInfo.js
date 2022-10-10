import React, { Component } from 'react'

class ContactInfo extends Component {
  render() {
    return (
      <>
        <div className='contact-info-area pt-100 pb-70'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='contact-info-box'>
                  <div className='icon'>
                    <i className='pe-7s-mail'></i>
                  </div>
                  <h3>Mail Here</h3>
                  <p>
                    <a href='mailto:info@pungent.com'>info@ljt.app</a>
                  </p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='contact-info-box'>
                  <div className='icon'>
                    <i className='pe-7s-map-2'></i>
                  </div>
                  <h3>Visit Here</h3>
                  <p>
                    Rm 1202, 12/F Wanchai Commercial Centre, 192-204 Johnson
                    Road, Wanchai, HK
                  </p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='contact-info-box'>
                  <div className='icon'>
                    <i className='pe-7s-call'></i>
                  </div>
                  <h3>Call Here</h3>
                  <p>
                    <a href='tel:+1234567890'>+852 3333 3333</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactInfo
