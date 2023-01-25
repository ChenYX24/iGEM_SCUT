import "../css/MainAnimation.css"
import $ from '../js/jquery'
function MainAnimation () {
  // 监听
  $(window).scroll(function () {
    const background = document.querySelector(".background")
    const text = document.querySelector(".text")
    const scrollY = window.scrollY

    if (scrollY !== 0) {
      background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
      text.style.boxShadow = '0 5px 202px rgba(0, 0, 0, 0.5)'
    } else {
      background.style.backgroundPosition = ''
      text.style.boxShadow = ''
    }
  }
  )
  return (
    <div class="mainAnimation">
      <div class="background">
        <span class='text'>iGEM-SCUT</span>
      </div>
    </div>
  )
}

export default MainAnimation