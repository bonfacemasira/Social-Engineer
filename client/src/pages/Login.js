import React, { useEffect, useState } from "react";
import Loginform from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
// import { useState } from 'react';

function Login() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/login" element={<Loginform />} />
          <Route exact path="/register" element={<SignUpForm />} />
          <Route exact path="/" element={<Loginform />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Login;
