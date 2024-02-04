import React from 'react'
import Logo from '../../assets/images/confidenceLogo.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-fit flex flex-col md:flex-row justify-around items-center  bg-[#504f4c] text-gray-50 gap-10 md:gap-0 py-14 md:py-16'>
        <div className="top flex flex-col items-center md:items-start">
            <Link   to="/"  smooth={true} offset={50} duration={500} >
                <img className='logo w-[250px]  md:w-[250px]' src={Logo} alt="brand Logo" />
            </Link>

            <h1 className='font-bold mb-2 text-[#9256ed]'>Confidence Personal Homecare Services LLC</h1>
            <p><strong>Address:</strong> xxxx Indianapolis xxxx </p>
            <p><strong>Phone:</strong> (317)000-0000</p>
            <p><strong>Email:</strong> confidencehomecare@gmail.com</p>


        </div>

        <div className="links flex flex-col justify-center items-center md:items-start ">
            <p className='font-bold mb-2'>Useful Links</p>
            <Link   to="/"  smooth={true} offset={50} duration={500} className='text-gray-50 ' >
                Home
            </Link>

            <Link   to="/services"  smooth={true} offset={50} duration={500} className='text-gray-50' >
                Services
            </Link>

            <Link   to="/about"  smooth={true} offset={50} duration={500} className='text-gray-50' >
                About Us
            </Link>

            <Link   to="/contact"  smooth={true} offset={50} duration={500} className='text-gray-50 ' >
                Contact Us
            </Link>
        </div>

        <div className="oursocials flex flex-col gap-2">
            <p className='font-bold mb-2'>Our Social Networks</p>
            <div className="socials flex justify-center gap-6 md:gap-4">
                <a href=""> <FaFacebook /> </a>
                <a href=""> <FaInstagram /></a>
                <a href=""> <FaTwitter /></a>
            </div>

            
        </div>
        {/* <div>
            Website Developed by <br />VSCTE
        </div> */}

    </div>
  )
}
// #b69d11

// bg-[#150330] 
export default Footer