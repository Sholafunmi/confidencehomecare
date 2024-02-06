import React, {useState, useEffect} from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css'
import Routers from './Routers';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';

// AOS EFFECTS
import { AOSProvider } from "react-aos";
import AOS from "aos";
import "aos/dist/aos.css";




function App() {
  //  AOS
   useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div> 
        <Navbar />
        <Routers/>
        <Footer />
      </div>
  )
}

export default App
