import GraphicCard from "../components/GraphicCard"
import NavBar from "../components/NavBar"
import Wave from "../components/Wave"
import MainAnimation from "../components/MainAnimation"
import DynamicNumberBox from "../components/DynamicNumberBox"
import Loading from "../components/Loading"
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
function About () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <MainAnimation />
          <DynamicNumberBox />
          <GraphicCard />
          <Wave />
        </>
      )}


    </>
  )
}
export default About

