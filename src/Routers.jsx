import { Route, Routes } from "react-router-dom";
import Services from "./components/Pages/Services";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default Routers