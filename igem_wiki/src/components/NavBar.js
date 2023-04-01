import NavBarCss from "../css/NavBar.module.css"
import "../index.css"
import {useRef, useState } from "react"

const NavBarData = [
  {
    name:'Home',
  },
  {
    name:'Project',
    content:['content', 'content', 'content', 'content', 'content']
  },
  {
    name:'Outlook',
    content:['content', 'content', 'content', 'content', 'content']
  },
  {
    name:'Lab',
    content:['content', 'content', 'content', 'content', 'content']
  },
  {
    name:'HP',
    content:['content', 'content', 'content', 'content', 'content']
  },
  {
    name:'Team',
    content:['content', 'content', 'content', 'content', 'content']
},
  {
    name:'Judging',
    content:['content', 'content', 'content', 'content', 'content']
  }
]

function NavBar () {

  //通过useRef Hook改变导航栏的样式
  const nav = useRef(null)

  const [barDisplay,setBarDisplay] = useState(true)
  const [listDisplay,setListDisplay] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(null);

  const onMouseEnterHandler = (idx) => {
    setBarDisplay(true);
    setCurrentIdx(idx)
    setTimeout(()=>{
      setListDisplay(true)
    },500)
  };

  const onMouseLeaveHandler = () => {
    setCurrentIdx(null)
    setListDisplay(false)
  };

  return (
    <>
      <header>
        <div className={NavBarCss.logo}>
          <img src={require('../assets/logo1.png')}/>
        </div>
        <nav ref={nav}>
          <ul className={NavBarCss.columns}>
          {NavBarData.map((item,i)=>(
            <li
                key={i}
                onMouseEnter={()=>{
                  onMouseEnterHandler(i)
                }}
                onMouseLeave={() => {
                  onMouseLeaveHandler()
                }}>
              <a
                  onMouseEnter={()=>{
                    setBarDisplay(true)
              }}
              >
                {item.name}
              </a>
              <ul
                  className={`${NavBarCss.details} ${
                    listDisplay&&currentIdx===i? NavBarCss.active:''
                  }`}
                  onMouseEnter={()=>{
                    setBarDisplay(false)
                  }}
              >
                {item.content&&item.content.map((item,i)=>(
                    <li key={i}>
                      <a>{item}</a>
                    </li>
                ))}
              </ul>
            </li>
            ))}
            <div className={NavBarCss.animation}
                 style={{background:!barDisplay
                   ? "linear-gradient(112.32deg, rgba(209, 250, 240, 0.42) 2.26%, rgba(244, 198, 192, 0.075) 100.53%)"
                   : ""
                }}
            ></div>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default NavBar