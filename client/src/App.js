import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Loginform from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Loginform />} />
        <Route exact path='/register' element={<SignUpForm />} />
        <Route exact path='/' element={<Loginform />} />
      </Routes>
    </div>
  );
}

export default App;
