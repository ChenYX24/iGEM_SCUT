import style from "../css/NavBar.module.css"
import "../index.css"
import {useRef, useState} from "react"

function NavBar () {

  //通过useRef Hook改变导航栏的样式
  const nav = useRef(null)

  const [display,setDisplay] = useState(false)

  // document.addEventListener('scroll', () => {
  //   let scroll_position = window.scrollY
  //   if (scroll_position > 200) {
  //     // nav.current.style.background = 'white'
  //     // nav.current.style.background = 'linear-gradient(90deg,rgba(107,234,228,0.5),rgba(247,202,180,0.5))'
  //   } else {
  //     nav.current.style.background = 'transparent'
  //   }
  // })

  return (
    <>
      <header id={style['header']}>
        <div className={style['logo']}>
          <img src={require('../assets/logo1.png')}/>
        </div>
        <nav ref={nav}>
          <ul className={style['columns']}>
            <li>
              <a href="javascript:;" data-after="Home">Home</a>
            </li>
            <li>
              <a href="javascript:;" data-after="Project">Project</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" data-after="Outlook">Outlook</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" data-after="Lab">Lab</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" data-after="Human Practices">Human Practices</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" data-after="Team">Team</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" data-after="Judging">Judging</a>
              <ul className={style['details']}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <div className={style['animation']}></div>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default NavBar