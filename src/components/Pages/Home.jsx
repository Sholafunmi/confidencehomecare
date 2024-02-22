import React from "react";
import Hero from "../Home/Hero";
import Vision from "../Home/Vision";
import Features from "../Home/Features";
import ServicesHome from "../Home/ServicesHome";
import Testimonial from "../Home/Testimonial";
import SurveyForm from "../Home/SurveyForm";

const Home = () => {
  return (
    <div name="home" id="home" className="flex flex-col">
      <Hero />
      <Features />
      <Vision />
      <ServicesHome />
      <Testimonial />
      <SurveyForm />
    </div>
  );
};

export default Home;
