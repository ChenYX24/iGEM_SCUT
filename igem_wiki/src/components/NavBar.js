import style from "../css/NavBar.module.css"
import "../index.css"
import {useRef, useState} from "react"

function NavBar () {

  //通过useRef Hook改变导航栏的样式
  const header = useRef(null)

  const [display,setDisplay] = useState(false)

  // document.addEventListener('scroll', () => {
  //   let scroll_position = window.scrollY
  //   if (scroll_position > 200) {
  //     header.current.style.backgroundColor = '#29323c'
  //   } else {
  //     header.current.style.backgroundColor = 'transparent'
  //   }
  // })

  return (
    <>
      <section id={style.header}>
        <div ref={header} className={`${style.header} ${style.container}`}>
          <div className={style['nav-bar']}>
            <div>
              <a href="#">
                <h1 className={style['name']}>logo</h1>
              </a>
            </div>
            <div className={style['nav-list']}>
              <div onClick={()=>setDisplay(!display)} className={style['hamburger']}>
                <div className={style['bar']}></div>
              </div>
              <ul className={display?style['active']:''}>
                <li><a href="javascript:;" data-after="Home">Home</a></li>
                <li><a href="javascript:;" data-after="Project">Project</a></li>
                <li><a href="javascript:;" data-after="Outlook">Outlook</a></li>
                <li><a href="javascript:;" data-after="Team">Team</a></li>
                <li><a href="javascript:;" data-after="Human Practices">Human Practices</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default NavBar