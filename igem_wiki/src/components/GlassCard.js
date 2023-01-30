/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import GlassCardCss from "../css/GlassCard.module.css"
import VanillaTilt from '../js/v'
function GlassCard () {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(`.${GlassCardCss.card}`), {
      max: 15, //最大倾斜度数
      speed: 400, //倾斜转换的速度
      glare: true,//是否开启眩光效果
      "max-glare": 1//最大眩光的不透明度
    })
  }, [])
  return (
    <>
      <div className={GlassCardCss.card}>
        <div className={GlassCardCss.content}>
          <h2>01</h2>
          <h3>Card One</h3>
          <p>不知道放什么文字，总之就是多写几个字</p>
          <a href="#">read more</a>
        </div>
      </div>
    </>
  )
}
export default GlassCard