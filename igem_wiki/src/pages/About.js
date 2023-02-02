import GraphicCard from "../components/GraphicCard"
import NavBar from "../components/NavBar"
import Wave from "../components/Wave"
import MainAnimation from "../components/MainAnimation"
import DynamicNumberBox from "../components/DynamicNumberBox"
import { useState } from "react"
function About () {
  return (
    <>
      <NavBar />
      <MainAnimation />
      <DynamicNumberBox />
      <GraphicCard />
      <Wave />
    </>
  )
}
export default About

