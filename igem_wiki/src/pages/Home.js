import React from "react"
import HomeMain from "../components/HomeMain"
import SideNav from "../components/SideNav"
import HomeCss from "../css/Home.module.css"
class Home extends React.Component {
  render () {
    return (
      <>
        <SideNav />
        <div className={HomeCss.HomeFrame}>

          <HomeMain />
          <div className={HomeCss.right}></div>
        </div>
      </>

    )
  }

}
export default Home
