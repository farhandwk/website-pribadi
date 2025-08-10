import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Certificate from './components/Certificate.jsx'
import Portfolio from './components/Portfolio.jsx'

function App() {
  const aboutRef = useRef(null)

  const handleHomeButton = () => {
    aboutRef.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <main>
        <Home onScrollClick={handleHomeButton}></Home>
        <About ref={aboutRef}></About>
        <Certificate/>
        <Portfolio></Portfolio>
      </main>
    </>
  )
}

export default App
