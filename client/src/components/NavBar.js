import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ user, onLogout }) {
    function handleLogoutClick() {
        fetch("/api/logout", { method: 'DELETE' }).then((r) => {
            if (r.ok) {
                onLogout();
            }
        });
    }

    function displayLogin(){
        if(user){
            return(
                <>
                    <li className='nav-item'>
                        <NavLink className='nav-link' activeClassName='menu_active' onClick={handleLogoutClick}>
                            Log Out
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' activeClassName='menu_active' to='/projects'>
                        My Projects
                      </NavLink>
                    </li>
                </>
            )
        }else {
            return(
                <>
                <li className='nav-item'>
                    <NavLink className='nav-link' activeClassName='menu_active' to='/register'>
                    Sign Up
                    </NavLink>
                </li> 
                <li className='nav-item'>
                    <NavLink className='nav-link' activeClassName='menu_active' to='/login'>
                    Log In
                    </NavLink>
                </li>
                </>
            )

        }
    }

    return (

      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/'>
                  Social-Engineer
                </NavLink>
                {displayLogin()}
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default NavBar;