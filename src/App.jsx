import { useState } from 'react'
// import { FaEnvelope } from "react-icons/fa"
// import reactLogo from './assets/react.svg'
import Info from './components/info/Info'
import About from './components/about/About'
import Interests from './components/interests/Interests'
import Footer from './components/footer/Footer'
import './App.css'
import './components/info/Info.css'
import './components/about/About.css'
import './components/interests/Interests.css'
import './components/footer/Footer.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app--container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}