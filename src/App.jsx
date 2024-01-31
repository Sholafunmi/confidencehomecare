import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero'
import Vision from './components/Home/Vision';
import Services from './components/Home/Features'
import './index.css'
import Home from './components/Pages/Home';
import Routers from './Routers';



function App() {
  // const [count, setCount] = useState(0)

  return (
      <div> 
        {/* <Home/> */}
        <Routers/>
      </div>
  )
}

export default App
