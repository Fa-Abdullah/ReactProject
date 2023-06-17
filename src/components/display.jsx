import React /*, { useRef }*/ from 'react'
import Home from './home'
import About from './about'
import Services from './services'
import CarList from './cars'
import Imgs from './imgs'
import Testimonials from './testimonials'
import Logoes from './logoes'
import Footer from './footer'
//import { Navigate, Route, Routes } from 'react-router'
//import { Navbar } from 'react-bootstrap'

const Display = () => {

  return (
    <div>
        {/* <Navbar /> */}
        <Home/>
        <About/>
        <Services/>
        <CarList/>
        <Imgs/>
        <Testimonials/>
        <Logoes/>
        <Footer/>
    </div>
  )
}

export default Display
