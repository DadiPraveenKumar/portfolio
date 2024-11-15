import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import My_work from './Components/My_work/My_work'
import Contact from './Components/Contact/Contact'
import Footer from  './Components/Footer/Footer'

const App = () => {
  return (
  <>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <My_work/>
      <Contact/>
      <Footer/>
  </>
  )
}

export default App
