import React, { Component } from 'react'
import Link from '../../utils/ActiveLink'

class Navbar extends Component {
  // Navbar
  _isMounted = false
  state = {
    display: false,
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount() {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { collapsed } = this.state
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show'
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right'

    return (
      <>
        <div id='navbar' className='navbar-area'>
          <nav className='navbar navbar-expand-md navbar-light'>
            <div className='container'>
              <Link href='/'>
                <a className='navbar-brand'>
                  <img src='/images/logo-ljt-150x150.png' alt='logo' />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
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
                    <Link href='#'>
                      <a
                        className='nav-link'
                        onClick={(e) => e.preventDefault()}
                      >
                        Portfolio <i className='icofont-thin-down'></i>
                      </a>
                    </Link>

                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/portfolio' activeClassName='active'>
                          <a className='nav-link'>Portfolio</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/portfolio-details'
                          activeClassName='active'
                        >
                          <a className='nav-link'>Portfolio Details</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          href='/portfolio-details-2'
                          activeClassName='active'
                        >
                          <a className='nav-link'>Portfolio Details 2</a>
                        </Link>
                      </li>
                    </ul>
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
}

export default Navbar
