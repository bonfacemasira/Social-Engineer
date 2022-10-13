import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({user, setUser}) {
    return (
        <div>
            <NavLink to="/login" exact >Login</NavLink>
            <NavLink to="/register" exact >Sign up</NavLink>
        </div>
    )
}

export default NavBar;