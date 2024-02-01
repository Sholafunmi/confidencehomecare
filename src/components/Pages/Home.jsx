import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Home/Hero'
import Vision from '../Home/Vision'
import Features from '../Home/Features'
// import About from './About'
import ServicesHome from '../Home/ServicesHome'


const Home = () => {
  return (
    <div name='home' id='home' className='flex flex-col gap-4'>
        <Navbar />
        <Hero />
        <Features/>
        <Vision />
        <ServicesHome />
        {/* <About /> */}
    </div>
  )
}

export default Home