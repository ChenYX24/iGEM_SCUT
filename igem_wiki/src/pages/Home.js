import React from "react"
import HomeMain from "../components/HomeMain"
import SideNav from "../components/SideNav"
import HomeCss from "../css/Home.module.css"
import NavBar from "../components/NavBar";
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
      </>
    )
  }

}
export default Home
