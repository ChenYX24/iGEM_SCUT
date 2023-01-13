/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import SideNavCss from "../css/SideNav.module.css"
import $ from '../js/jquery'
function SideNav (props) {
  const [isActive, setActive] = useState(true)
  //跳转
  const clickHandler = (e) => {
    const target = $(e.currentTarget).text()
    $("html, body").animate({
      scrollTop: $(`#${target}`).offset().top
    }, { duration: 500, easing: "swing" })
    setActive(!isActive)
    return false
  }
  return (
    <>
      <div className={SideNavCss.SideNav}>
        <div className={isActive ? `${SideNavCss.button}` : `${SideNavCss.button}`} onClick={clickHandler}>
          Background
        </div>
        <div className={`${SideNavCss.button}`} onClick={clickHandler}>
          Overview
        </div>
        <div className={SideNavCss.button} onClick={clickHandler}>
          References
        </div>
      </div>
    </>
  )
}
export default SideNav
