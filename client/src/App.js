
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
import { Route, Routes, useNavigate } from "react-router-dom";
import Loginform from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./views/Home.jsx"
import ProjectList from "./pages/ProjectList"

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    //auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout(){
    navigate("/")
    setUser(null)
  }

  //if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route exact path="/login" element={<Loginform onLogin={setUser}/>} />
          <Route exact path="/register" element={<SignUpForm onLogin={setUser}/>} />
          <Route exact path="/projects" element={<ProjectList user={user}/>}/>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </main>
{/* //>>>>>>> c86ee006186ff0df1b9c64b5da9ad0f17b6fc5c8 */}
    </div>
  );
  }

  export default App
// import React from "react"
// import Home from "./views/Home.jsx"
// import { Signup } from "./views/Signup.jsx"
// import { Login } from "./views/Login.jsx"
// import { Projects } from "./views/Projects.jsx"
// import Navbar from "./components/Navbar"
// import { Switch, Route, Redirect } from "react-router-dom"

// const App = () => {
//   useEffect(() => {
//     //auto-login
//     fetch("/api/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   return (
//     <>
//       {/* <Navbar/> */}
//       <NavBar user={user} onLogin={setUser} />
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route exact path='/signup' component={Signup}/>
//         <Route exact path='/login' component={Login}/>
//         <Route exact path='/projects' component={Projects}/>
       
//         <Redirect to='/'></Redirect>
//       </Switch>
//     </>
//   )
// >>>>>>> a2d3ab11047e69a65479b3790a0cf66511bf23ee


