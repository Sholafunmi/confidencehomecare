import React, {useState} from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css'
import Routers from './Routers';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';



function App() {
  // const [count, setCount] = useState(0)

  return (
      <div> 
        <Navbar />
        <Routers/>
        <Footer />
      </div>
  )
}

export default App
