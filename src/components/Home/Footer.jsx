import React from "react";
import Logo from "../../assets/images/confidenceLogo.png";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section>
      <div className="w-full h-fit flex flex-col md:flex-row justify-around items-center   bg-[#98830b] text-[#eeedf0] gap-10 md:gap-0 py-8 md:py-16">
        <div className="top flex flex-col items-center md:items-start gap-2 md:gap-1">
          <Link to="/" onClick={scrollToTop}>
            <img
              className="logo w-[250px]  md:w-[250px]"
              src={Logo}
              alt="brand Logo"
            />
          </Link>

          <h1 className=" font-bold text-[#deccf9] text-lg md:text-xl mb-2">
            Confidence Personal Homecare Services LLC
          </h1>
          <p className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start">
            <strong>Address: </strong> 2315 HERMITAGE WAY
            INDIANAPOLIS INDIANA{" "}
          </p>
          <p className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start">
            <strong>Phone: </strong> 317-982-4221
          </p>
          <p className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start">
            <strong>Email:</strong>{" "}
            admin@confidencepersonalhomecare.com
          </p>
        </div>

        <div className="links flex flex-col justify-center items-center md:items-start text-lg ">
          <p className="font-bold text-[#deccf9] text-xl mb-2">
            Useful Links
          </p>
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-gray-50 "
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={scrollToTop}
            className="text-gray-50"
          >
            Services
          </Link>

          <Link
            to="/about"
            onClick={scrollToTop}
            className="text-gray-50"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-gray-50 "
          >
            Contact Us
          </Link>
        </div>

        <div className="oursocials flex flex-col gap-2">
          <p className=" font-bold flex justify-center text-[#deccf9] text-xl mb-2">
            Our Social Networks
          </p>
          <div className="socials flex justify-center gap-6 md:gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/confidencepersonalhomecare"
              className="text-2xl hover:text-blue-700"
            >
              {" "}
              <FaFacebook />{" "}
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/confidencepersonalhomecare?igsh=MWJmdzEyN3BtZDVtdg"
              className="text-2xl hover:text-purple-700"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://wa.me/message/YWZP5P5HI3FIE1"
              className="text-2xl hover:text-green-700"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="copyright"></div>
      </div>

      <div className="flex w-full h-fit justify-center align-center text-center pb-8 px-2 bg-[#98830b] text-gray-200 text-[18px] ">
        <p className="justify-center text-center">
          Copyright <span>&copy;</span> 2024
          admin@confidencepersonalhomecare.com |
          Website Developed by
          <a
            className=" underline pl-1 font-bold text-purple-200"
            href="https://www.instagram.com/vibrant_consultancy_enterprise?igsh=MWs3Z2w4OGRka2YzZw=="
            target="_blank"
          >
            VSCTE
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
