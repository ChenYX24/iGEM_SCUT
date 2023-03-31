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

  const [barDisplay,setBarDisplay] = useState(true)

  return (
    <>
      <header id={style['header']}>
        <div className={style['logo']}>
          <img src={require('../assets/logo1.png')}/>
        </div>
        <nav ref={nav}>
          <ul className={style['columns']}>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Home</a>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Project</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Outlook</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Lab</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>HP</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Team</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:;" onMouseEnter={()=>setBarDisplay(true)}>Judging</a>
              <ul className={style['details']} onMouseEnter={()=>setBarDisplay(false)}>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
                <li><a href="javascript:;">content</a></li>
              </ul>
            </li>
            <div className={style['animation']} style={{background:!barDisplay?"linear-gradient(112.32deg, rgba(209, 250, 240, 0.42) 2.26%, rgba(244, 198, 192, 0.075) 100.53%)":""}}></div>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default NavBar