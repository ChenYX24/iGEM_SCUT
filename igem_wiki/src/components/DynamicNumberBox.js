import "../css/DynamicNumberBox.css"
import { useEffect } from "react"
function DynamicNumberBox () {
  const datas = [
    {
      className: 'data1',
      options: {
        time: 2000,
        num: 1024,
        regulator: 40
      },
      title: "this is title",
      text: "If you are getting started with Spring Boot, or “Spring” in general, start by reading this section."
    },
    {
      className: 'data2',
      options: {
        time: 2000,
        num: 1025,
        regulator: 40
      },
      title: "this is title",
      text: "If you are getting started with Spring Boot, or “Spring” in general, start by reading this section."
    },
    {
      className: 'data3',
      options: {
        time: 2000,
        num: 1026,
        regulator: 40
      },
      title: "this is title",
      text: "If you are getting started with Spring Boot, or “Spring” in general, start by reading this section."
    },
    {
      className: 'data4',
      options: {
        time: 2000,
        num: 1027,
        regulator: 40
      },
      title: "this is title",
      text: "If you are getting started with Spring Boot, or “Spring” in general, start by reading this section."
    }
  ]
  const getCard = (data) => {
    return (<div class="numberBox" key={data['className']}>
      <div class="numberContent">
        <div class="circle">
          <div class={data['className']} id={data['className']}>{data['options']['num']}</div>
        </div>
      </div>
      <div class="textContent">
        <h2>{data['title']}</h2>
        <p>{data['text']}</p>
      </div>
    </div>
    )
  }

  const NumAutoPlus = (targetEle, options) => {
    options = options || {}
    var $this = document.getElementById(targetEle),
      time = options.time || $this.data('time'),
      finalNum = options.num || $this.data('value'),
      regulator = options.regulator || 100,

      step = finalNum / (time / regulator),
      count = 0,
      initial = 0

    var timer = setInterval(function () {
      count = count + step

      if (count >= finalNum) {
        clearInterval(timer)
        count = finalNum
      }
      var t = Math.floor(count)
      if (t == initial) return

      initial = t
      $this.innerHTML = initial
    }, 30)
  }

  const observer = new IntersectionObserver(ioes => {
    ioes.forEach(ioe => {
      const el = ioe.target
      const intersectionRatio = ioe.intersectionRatio
      if (intersectionRatio > 0 && intersectionRatio <= 1) {
        datas.map(data => {
          NumAutoPlus(data['className'], data['options'])
        })
        observer.unobserve(el)
      }
      el.onload = el.onerror = () => observer.unobserve(el)
    })
  })

  useEffect(() => {
    const element = document.querySelector(".dynamicNumberBox")
    observer.observe(element)
  }, [])

  return (
    <div class="dynamicNumberBox">
      <div class="title2">This is title</div>
      <div class="flexBox">
        {datas.map(data => getCard(data))}
      </div>
    </div>
  )
}
export default DynamicNumberBox