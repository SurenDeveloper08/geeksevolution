import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Banner from "../banner/banner"
import Awrapper from "../about/Awrapper"

const Home = () => {
  return (
    <>
      <Banner />
      <AboutCard />
      <Hprice />
      <Awrapper />  
      <Testimonal />
      <Hblog />
    </>
  )
}

export default Home
