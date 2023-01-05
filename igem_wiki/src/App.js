import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Home = () => <div>this is home</div>
const About = () => <div>this is about</div>

function App () {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Link to="/">首页</Link>|
        <Link to="/about">关于</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App