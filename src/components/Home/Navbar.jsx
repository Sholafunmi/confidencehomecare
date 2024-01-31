import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../../assets/images/confidenceLogo.png';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const openMenu = () => setNav(!nav) 

  // const handleClick = () => setNave(!nav)


  return (
    <nav>
      <div className='w-full h-[120px] flex justify-between md:justify-start md:gap-[15%] lg:gap-[20%] items-center px-2 md:px-[5%] bg-[#fff] text-gray-300 '>
         <Link   to="/"  smooth={true} offset={50} duration={500} >
          <img className='w-[220px] lg:w-[350px] md:w-[250px]' src={Logo} alt="brand Logo" />
         </Link>

        {/* <div>
            
        </div> */}

        {/*DESKTOP MENU  */}
        <div >
           <ul className=' hidden md:flex gap-6 lg:text-2xl md:text-lg text-[#9256ed]'>
           <li className='menuItem '>
                <Link   to="/"  smooth={true} offset={50} duration={500} >
                  Home
                </Link>
              </li>

              <li  className='menuItem'>
                <Link  to="/services "  smooth={true} offset={50} duration={500} >
                  Services
                </Link>
              </li>

              <li className='menuItem'>
                <Link  to="/about "  smooth={true} offset={50} duration={500} >
                  About Us
                </Link>
              </li>

              <li className='menuItem'>
                <Link  to="/contact"  smooth={true} offset={50} duration={500} >
                  Contact Us
                </Link>
              </li>

            </ul>
        </div>

        {/* HAMBURGER  */}
        {/* bg-[#150330] */}
        <div onClick={openMenu} className="md:hidden z-10 text-4xl text-[#9256ed] px-2 py-2 border-2 rounded-tr-[25px] rounded-bl-[25px] border-[#9256ed]  ">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU  */}
         
           <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen bg-[#2c1353] text-gray-50 flex flex-col justify-center items-center text-3xl gap-8 '}>
           
           
           <li  className='menuItem'>
                <Link   to="/"  smooth={true} offset={50} duration={500} >
                  Home
                </Link>
              </li>


              <li  className=' menuItem'>
                <Link  to="/services "  smooth={true} offset={50} duration={500} >
                  Services
                </Link>
              </li>

              <li className=' menuItem'>
                <Link  to="/about"  smooth={true} offset={50} duration={500} >
                  About Us
                </Link>
              </li>

              <li className='menuItem'>
                <Link  to="/contact"  smooth={true} offset={50} duration={500} >
                  Contact Us
                </Link>
              </li>

          </ul>

    </div>

    </nav>
    
  )
}

export default Navbar

// confidencepersonalhomecare