import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/'>
                  Social-Engineer
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <NavLink className='nav-link active' exact activeClassName='menu_active' aria-current='page' to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' activeClassName='menu_active' to='/services'>
                        Services
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' activeClassName='menu_active' to='/about'>
                        About
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' activeClassName='menu_active' to='/contact'>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
