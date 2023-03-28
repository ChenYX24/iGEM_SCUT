import "../css/MainAnimation.css"
import $ from '../js/jquery'
import { useState } from "react"
function MainAnimation () {
  const [flag, setflag] = useState(false)
  // const [offsetTop, setOffset] = useState(0)
  // const distanceToTop = (element) => {
  //   const rect = element.getBoundingClientRect()
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  //   return rect.top + scrollTop
  // }
  // 监听
  $(window).scroll(function () {
    // const background = document.querySelector(".background")
    const text = document.querySelector(".text")
    let scrollY = window.scrollY

    if (scrollY > 50 && scrollY < 200) {
      // background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
      // text.style.boxShadow = '0 5px 202px rgba(0, 0, 0, 0.5)'
      if (!flag) {
        text.classList.add("_visible")
        setflag(true)
      }
      // text.style.top = `calc(${scrollY}px - 50px + 20vw)`
      // console.log(scrollY - 50 + offsetTop)
      // console.log(pos)
    } else if (scrollY == 0) {
      // background.style.backgroundPosition = ''
      // text.style.boxShadow = ''
    }

  }
  )
  return (
    <div className="mainAnimation">
      {/* <div className="background">
        <span className='text'>SCUT-China</span>
      </div> */}
      <div className="imgBox">
        <img src={require("../resources/000.jpg")} id="img0"></img>
        <img src={require("../resources/001.png")} id="img1"></img>
        <img src={require("../resources/002.png")} id="img2"></img>
        <img src={require("../resources/003.png")} id="img3"></img>
        <img src={require("../resources/004.png")} id="img4"></img>
        <img src={require("../resources/005.png")} id="img5"></img>
        <div className='text fadein'>SCUT-China</div>
      </div>
    </div>
  )
}

export default MainAnimation