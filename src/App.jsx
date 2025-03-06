import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/service/service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
const App = () =>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>


      </div>
  )
}
export default App