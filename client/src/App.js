import React from "react"
import Homepage from "./components/Homepage.jsx"
import { Signup } from "./components/Signup.jsx"
import { Login } from "./components/Login.jsx"
import Navbar from "./components/Navbar"
import { Switch, Route, Redirect } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar/>
     
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
       
        <Redirect to='/'></Redirect>
      </Switch>
    </>
  )
}
export default App
