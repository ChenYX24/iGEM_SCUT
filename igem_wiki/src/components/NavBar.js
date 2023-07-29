import NavBarCss from "../css/NavBar.module.css"
import "../index.css"
import { useRef, useState, useEffect } from "react"

const NavBarData = [
  {
    name: "Home",
  },
  {
    name: "Project",
    content: ["content", "content", "content", "content", "content"],
  },
  {
    name: "Outlook",
    content: ["content", "content", "content", "content", "content"],
  },
  {
    name: "Lab",
    content: ["content", "content", "content", "content", "content"],
  },
  {
    name: "HP",
    content: ["content", "content", "content", "content", "content"],
  },
  {
    name: "Team",
    content: ["content", "content", "content", "content", "content"],
  },
  {
    name: "Judging",
    content: ["content", "content", "content", "content", "content"],
  },
]

function NavBar () {

  const detailsRef = useRef([])

  let timer //定时器变量

  const [barDisplay, setBarDisplay] = useState(true)
  // const [currentIdx, setCurrentIdx] = useState(null);

  const onMouseEnterHandler = (idx) => {
    setBarDisplay(true)
    // clearTimeout(timer)
    // setCurrentIdx(idx);
    timer = setTimeout(() => {
      detailsRef.current.forEach((item, index) => {
        if (index === idx) {
          item.style.display = "block"
        }
      })
    }, 600)
  }

  const onMouseLeaveHandler = () => {
    clearTimeout(timer) // 清除定时器
    // setCurrentIdx(null);
    detailsRef.current.forEach((item) => {
      item.style.display = "none"
    })
  }

  return (
    <>
      <header>
        <div className={NavBarCss.logo}>
          <img src="https://static.igem.wiki/teams/4621/wiki/logo1.png" alt="logo" />
        </div>
        <nav>
          <ul className={NavBarCss.columns}>
            {NavBarData.map((item, i) => (
              <li
                key={i}
                onMouseEnter={() => {
                  onMouseEnterHandler(i)
                }}
                onMouseLeave={() => {
                  onMouseLeaveHandler()
                }}
              >
                <a
                  onMouseEnter={() => {
                    setBarDisplay(true)
                  }}
                >
                  {item.name}
                </a>
                <ul
                  className={NavBarCss.details}
                  onMouseEnter={() => {
                    setBarDisplay(false)
                  }}
                  ref={(el) => (detailsRef.current[i] = el)}
                >
                  {item.content &&
                    item.content.map((item, i) => (
                      <li key={i}>
                        <a>{item}</a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
            <div
              className={NavBarCss.animation}
              style={{
                background: !barDisplay
                  ? "linear-gradient(112.32deg, rgba(209, 250, 240, 0.42) 2.26%, rgba(244, 198, 192, 0.075) 100.53%)"
                  : "",
              }}
            ></div>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
