/* eslint-disable jsx-a11y/alt-text */
import shrimpSvg from "../assets/shrimp.svg"
import wave from "../assets/wave.svg"
import ProgressBarCss from "../css/ProgressBar.module.css"
import $ from '../js/jquery'
function ProgressBar () {
  const root = document.querySelector(':root')
  $(window).scroll(function () {
    // 获取当前滚动的高度
    var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // 获取页面的总高度
    const totalHeight = document.body.scrollHeight - window.innerHeight
    // 计算百分比
    const percent = Math.round((docScrollTop / totalHeight) * 100)
    const temp = getComputedStyle(root).getPropertyValue("--shrimpH")
    const beforeTop = -temp * percent / 100
    root.style.setProperty('--change-top', beforeTop)
  })

  return (
    <>
      <div className={ProgressBarCss.center}>
        <div className={ProgressBarCss.outbox}>
          <img className={ProgressBarCss.wave} src={wave} alt="没加载"></img>
          <img className={ProgressBarCss.shrimp} src={shrimpSvg} alt="没加载"></img>
        </div>
      </div>
    </>
  )
}
export default ProgressBar