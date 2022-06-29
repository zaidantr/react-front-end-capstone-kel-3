import React from 'react'
import About from './About'
import Hero from './Hero'
import Info from './Info'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimony from './Testimony'
import Carousel from './Carousel'

export default function LandingPage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Info />
        <About />
        <Carousel />
        <Testimony />
        <Footer />
    </>
  )
}
