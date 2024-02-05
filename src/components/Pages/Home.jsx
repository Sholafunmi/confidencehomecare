import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Home/Hero'
import Vision from '../Home/Vision'
import Features from '../Home/Features'
import ServicesHome from '../Home/ServicesHome'
import Footer from '../Home/Footer'


const Home = () => {
  return (
    <div name='home' id='home' className='flex flex-col gap-4'>
        <Hero />
        <Features/>
        <Vision />
        <ServicesHome />
        
    </div>
  )
}

export default Home