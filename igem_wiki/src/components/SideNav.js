/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import SideNavCss from "../css/SideNav.module.css"
import $ from '../js/jquery'

function SideNav (props) {
  const [data, setData] = useState(props.data)
  const [isClick, setClick] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [leftAnimateFlag, setLeftAnimateFlag] = useState(false)
  const [rightAnimateFlag, setRightAnimateFlag] = useState(false)
  const [isHover, setIsHover] = useState(false)
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
  const root = document.querySelector(':root')
  $(window).scroll(function () {
    // 获取当前滚动的高度
    var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (!isClick) {
      let newData = [...data]
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
    // 获取页面的总高度
    const totalHeight = document.body.scrollHeight - window.innerHeight

    // 计算百分比
    const percent = Math.round((docScrollTop / totalHeight) * 100)
    setScrollPercent(percent)
    //只计算右边动画
    if (percent < 50) {
      setRightAnimateFlag(true)
      const from = percent / 50 * 180 - 180 + 'deg'
      root.style.setProperty('--Rfrom-deg', from)
      root.style.setProperty('--Lfrom-deg', '180deg')
    } else {
      root.style.setProperty('--Rfrom-deg', 0)
      const from = (percent - 50) / 50 * 180 + 180 + 'deg'
      root.style.setProperty('--Lfrom-deg', from)
    }

  })

  $(`.${SideNavCss.circle}`).hover(
    function () {
      setIsHover(true)
      // this.style.display = "none"
    },
    function () {
      setIsHover(false)
      // this.style.display = "block"
    }
  )
  // $(`.${SideNavCss.SideNav}`).hover(
  //   function () {
  //     setIsHover(true)
  //     // this.style.display = "none"
  //   },
  //   function () {
  //     setIsHover(false)
  //     // this.style.display = "block"
  //   }
  // )

  return (
    <>
      <div className={SideNavCss.circle}>

        <div className={SideNavCss.left}>
          <div className={`${SideNavCss.left_circle} ${leftAnimateFlag ? SideNavCss.animate : ""}`}></div>
        </div>
        <div className={SideNavCss.right}>
          <div className={`${SideNavCss.right_circle} ${rightAnimateFlag ? SideNavCss.animate : ""}`}></div>
        </div>
        <div className={SideNavCss.inner}>{scrollPercent}%</div>
        {isHover ? <div className={`${SideNavCss.SideNav}`}>
          {data.map(item => (
            <div key={item.id} className={`${SideNavCss.button} ${item.isActive ? SideNavCss.active : ""}`} onClick={(e) => clickHandler(e, item.id)}>{item.text}</div>
          ))}
        </div> : null}
      </div>

    </>
  )
}

export default SideNav