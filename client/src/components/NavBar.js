import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: 'DELETE' }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div>
            <h1>Social</h1>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/register"} >Sign up</NavLink>
        </div>
    )
}

export default NavBar;