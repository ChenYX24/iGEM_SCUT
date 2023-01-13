/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import SideNavCss from "../css/SideNav.module.css"
import $ from '../js/jquery'
function SideNav (props) {
const [data, setData] = useState(props.data)
const [isClick, setClick] = useState(false)
//跳转
const clickHandler = (e, id) => {
  setClick(true)
  const target = $(e.currentTarget).text()
  $("html, body").animate({
    scrollTop: $(`#${target}`).offset().top
  }, { duration: 500, easing: "swing" })
    .promise()
    .done(function () {
      setClick(false)
    })
  let newData = [...data]
  if (newData[id].isActive === false) {
    newData.map(item => {
      if (item.isActive === true) {
        item.isActive = false
      }
    })
    newData[id].isActive = !newData[id].isActive
    setData(newData)
  }

}
//监听
$(window).scroll(function () {
  if (!isClick) {
    let newData = [...data]
    var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
    data.map(item => {

      if (docScrollTop > $(`#${item.text}`).offset().top - 10) {
        newData.map(item2 => {
          item2.isActive = false
        })
        newData[item.id].isActive = true
      }
    })
    setData(newData)
  }
})

return (
  <>
    <div className={SideNavCss.SideNav}>
      {data.map(item => (
        <div key={item.id} className={`${SideNavCss.button} ${item.isActive ? SideNavCss.active : ""}`} onClick={(e) => clickHandler(e, item.id)}>{item.text}</div>
      ))}
    </div>
  </>
)}

export default SideNav