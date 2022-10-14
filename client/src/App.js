// <<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';
// import ProjectList from './pages/ProjectList';
// import React, {useEffect} from 'react';

// function App() {
//   let $user
//   useEffect(() => {
//     const id = 1
//     fetch(`/users/${id}`)
//     .then(res => res.json())
//     .then(data => $user=data[0])
//   }, [])

//   return (
//     <div className="App">
//       <p>Testing</p>
//       <ProjectList user={$user}/>
//=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Loginform from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} onLogin={setUser} />
      <main>
        <Routes>
          <Route exact path="/login" element={<Loginform onLogin={setUser}/>} />
          <Route exact path="/register" element={<SignUpForm onLogin={setUser}/>} />
          <Route exact path="/" element={<Loginform onLogin={setUser}/>} />
        </Routes>
      </main>
{/* //>>>>>>> c86ee006186ff0df1b9c64b5da9ad0f17b6fc5c8 */}
    </div>
  );
}

export default App;
