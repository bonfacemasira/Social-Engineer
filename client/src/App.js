// import React from "react"
// import Home from "./Home"
// import About from "./About"
// import Services from "./Services"
// import Contact from "./Contact"
import Navbar from "./components/Navbar"
// import { Switch, Route, Redirect } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/'></Redirect>
      </Switch> */}
    </>
  )
}
export default App
