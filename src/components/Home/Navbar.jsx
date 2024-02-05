import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../../assets/images/confidenceLogo.png';
// import { Link } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const openMenu = () => setNav(!nav) 

  // scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // navlink 
  const navObj = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Services',
      path: '/services'
    },
    {
      display: 'About Us',
      path: '/about'
    },
    {
      display: 'Contact Us',
      path: '/contact'
    }

    
  ]

  return (
    <nav>
      <div className='fixed w-full h-[120px] flex justify-between md:justify-start md:gap-[15%] lg:gap-[20%] items-center px-2 md:px-[5%] bg-[#fff] text-gray-300 border-b-4 '>
         <Link   to="/" onClick={scrollToTop}  >
          <img className='logo w-[250px] lg:w-[350px] md:w-[250px]' src={Logo} alt="brand Logo" />
         </Link>

      

        {/*DESKTOP MENU  */}
        <div >
           <ul className=' hidden md:flex gap-6 lg:text-2xl md:text-lg text-[#9256ed]'>
            {
              navObj.map((item, i)=>(
              <NavLink to={item.path} key={i} className={(navClass)=> navClass.isActive ? "menuItems" : "menuItem"} onClick={scrollToTop}>
                  {item.display}
              </NavLink>
            ))
            }

            </ul>
        </div>

        {/* HAMBURGER  */}
        <div className="md:hidden cursor-pointer z-10 text-2xl text-[#b69d11] px-1 py-1 border-2 rounded-tr-[10px] rounded-bl-[10px] border-[#b69d11]  ">
          {!nav ? <FaBars onClick={openMenu} /> : <FaTimes onClick={openMenu} />}
        </div>

        {/* MOBILE MENU  */}
           <ul className={!nav ? 'hidden' : '  absolute top-0 left-0 w-full h-screen text-[#2c1353] bg-gray-100 flex flex-col pt-28 pl-5 text-xl gap-8'}>
              {
                navObj.map((item, i)=>(
                  <li  className='menuItem w-fit' onClick={openMenu}>
                <Link to={item.path} key={i}  smooth={true} offset={50} duration={500} >
                  {item.display}
                </Link>
              </li>
                ))
              }

          </ul>

    </div>

    </nav>
    
  )
}

export default Navbar

// confidencepersonalhomecare