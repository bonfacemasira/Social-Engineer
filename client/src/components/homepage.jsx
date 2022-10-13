import React from "react"
import web from "../components/banner.png"
import Common from "./More"
import { Engineers } from "./Engineers"
const Home = () => {
  return (
    <>
      <Common name='Find A Job That
Matches Your Passion with  ' imgsrc={web} visit='/Login' btnname='Get Started ' />
<Engineers/>
    </>
  )
}


  
export default Home
