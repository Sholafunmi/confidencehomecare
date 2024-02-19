import React from 'react'
import Hero from '../Home/Hero'
import Vision from '../Home/Vision'
import Features from '../Home/Features'
import ServicesHome from '../Home/ServicesHome'
import Testimonial from '../Home/Testimonial'
// import SurveyForm from '../Home/SurveyForm'
import FeedbackSurvey from '../Home/FeedbackSurvey'
// import FormSurveyTesting from '../Home/FormSurveyTesting'

const Home = () => {
  return (
    <div name='home' id='home' className='flex flex-col'>
        <Hero />
        <Features/>
        <Vision />
        <ServicesHome />
        <Testimonial />
        {/* <SurveyForm /> */}
        <FeedbackSurvey />
        {/* <FormSurveyTesting /> */}
     
        
    </div>
  )
}

export default Home