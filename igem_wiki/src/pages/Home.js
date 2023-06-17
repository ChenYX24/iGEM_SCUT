import React from "react"
import GlassCard from "../components/GlassCard"
import GuangDong from "../components/GuangDong"
import HomeMain from "../components/HomeMain"
import Loading from "../components/Loading"
import NavBar from "../components/NavBar"
import ProgressBar from "../components/ProgressBar"
import SideNav from "../components/SideNav"
import Wave from "../components/Wave"
import HomeCss from "../css/Home.module.css"

class Home extends React.Component {
  static NavData = [{ id: 0, text: 'Background', isActive: true }, { id: 1, text: 'Overview', isActive: false }, { id: 2, text: 'References', isActive: false },]
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }
  render () {
    const { loading } = this.state
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
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
            <GuangDong />
            <Wave />
          </>

        )}


      </>
    )
  }

}
export default Home
