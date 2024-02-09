import React from 'react'
import Hero from '../Home/Hero'
import Vision from '../Home/Vision'
import Features from '../Home/Features'
import ServicesHome from '../Home/ServicesHome'
import Testimonial from '../Home/Testimonial'


const Home = () => {
  return (
    <div name='home' id='home' className='flex flex-col gap-4'>
        <Hero />
        <Features/>
        <Vision />
        <ServicesHome />
        <Testimonial />
        
    </div>
  )
}

export default Home