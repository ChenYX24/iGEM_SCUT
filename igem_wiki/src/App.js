/* eslint-disable no-unused-vars */
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Education from "./pages/Education"
import Desciption from './pages/Desciption'


function App () {
  return (
    <div className="App">
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        {/*<Link to="/">首页</Link>|*/}
        {/*<Link to="/about">关于</Link>*/}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/description" element={<Desciption />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App