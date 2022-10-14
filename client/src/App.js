import React from "react"
import Home from "./views/Home.jsx"
import { Signup } from "./views/Signup.jsx"
import { Login } from "./views/Login.jsx"
import { Projects } from "./views/Projects.jsx"
import Navbar from "./components/Navbar"
import { Switch, Route, Redirect } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar/>
     
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/projects' component={Projects}/>
       
        <Redirect to='/'></Redirect>
      </Switch>
    </>
  )
}
export default App
