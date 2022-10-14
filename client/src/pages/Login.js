import React from 'react';
import Loginform from '../components/LoginForm';
import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout';

function Login() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route exact path='/login' element={<Loginform />} />
                    <Route exact path='/register' element={<SignUpForm />} />
                    <Route exact path='/' element={<Loginform />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Login;