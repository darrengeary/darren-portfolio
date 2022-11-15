// src/App.js
import React from "react"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Websites from "./components/Websites"

export default function App() {
  return (
    <main className='text-gray-400 bg-custom body-font'>
      <Navbar />
      <About />
      <Projects />
      <Websites />
      <Skills />
      <Contact />
    </main>
  )
}
