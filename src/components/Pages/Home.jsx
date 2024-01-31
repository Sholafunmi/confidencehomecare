import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Home/Hero'
import Vision from '../Home/Vision'
import Features from '../Home/Features'
import About from './About'


const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Navbar />
        <Hero />
        <Features/>
        <Vision />
        {/* <About /> */}
    </div>
  )
}

export default Home