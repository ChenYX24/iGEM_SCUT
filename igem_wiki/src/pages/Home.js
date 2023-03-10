import React from "react"
import GlassCard from "../components/GlassCard"
import HomeMain from "../components/HomeMain"
import NavBar from "../components/NavBar"
import ProgressBar from "../components/ProgressBar"
import SideNav from "../components/SideNav"
import Wave from "../components/Wave"
import HomeCss from "../css/Home.module.css"
class Home extends React.Component {
  static NavData = [{ id: 0, text: 'Background', isActive: true }, { id: 1, text: 'Overview', isActive: false }, { id: 2, text: 'References', isActive: false },]
  render () {
    return (
      <>
        <NavBar />
        <SideNav data={Home.NavData} />
        <div className={HomeCss.HomeFrame}>
          <HomeMain />
          <div className={HomeCss.right}></div>
        </div>
        <div className={HomeCss.GlassGroup}>
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
        </div>
        <ProgressBar />
        <Wave />
      </>
    )
  }

}
export default Home
