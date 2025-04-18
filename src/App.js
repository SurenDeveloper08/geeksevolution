import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About"
import Service from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
    <div>
      <Router>
        <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="" element={<Home />} />
         <Route  path='/about' element={<About/>} />
          <Route  path='/blog' element={<Blog/>} />
          <Route  path='/service' element={<Service/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  )
}

export default App
