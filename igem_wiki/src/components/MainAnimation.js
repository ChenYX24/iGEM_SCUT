import "../css/MainAnimation.css"
import $ from '../js/jquery'
function MainAnimation () {
  // 监听
  $(window).scroll(function () {
    const text = document.querySelector(".text")
    let scrollY = window.scrollY

    if (scrollY > 50 && scrollY < 200) {
      text.classList.add("_visible")
    }

  }
  )
  return (
    <div className="mainAnimation">
      <div className="imgBox">
        <img src="https://static.igem.wiki/teams/4621/wiki/000.jpg" id="img0"></img>
        <img src="https://static.igem.wiki/teams/4621/wiki/001.png" id="img1"></img>
        <img src="https://static.igem.wiki/teams/4621/wiki/002.png" id="img2"></img>
        <img src="https://static.igem.wiki/teams/4621/wiki/003.png" id="img3"></img>
        <img src="https://static.igem.wiki/teams/4621/wiki/004.png" id="img4"></img>
        <img src="https://static.igem.wiki/teams/4621/wiki/005.png" id="img5"></img>
        <div className='text fadein'>ECO-SHELLS</div>
      </div>
    </div>
  )
}

export default MainAnimation