import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import About from "./components/about/About"
import Service from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
