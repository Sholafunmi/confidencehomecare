import React from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';



const Features = () => {
   const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // useEffect(()=>{
  //   scrollToTop()
  // }, [])

  return (
    <div
      data-aos="slide-up"
      data-aos-duration="900"
      className="features w-full h-fit flex flex-col md:flex-row justify-center items-center mt-14 py-6 md:py-20 md:gap-10 "
    >
      <div
        className=" w-[95%] md:w-[28%] "
        onClick={scrollToTop}
      >
        <Link to="/services">
          <div
            name="servicebox"
            className="aboutbox flex flex-col w-[95%] md:w-full  h-[350px] mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11]  "
          >
            <div className="servicesTop h-[80%] w-full flex"></div>

            <div className="servicesBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] ">
              <p className="flex items-center font-bold text-[30px]">
                Services
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div
        className=" w-[95%] md:w-[28%]"
        onClick={scrollToTop}
      >
        <Link to="/about">
          <div
            name="aboutbox"
            className="aboutbox flex flex-col w-[95%] md:w-full h-[350px] mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11]  "
          >
            <div className="aboutTop h-[80%] w-full flex"></div>

            <div className="aboutBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] ">
              <p className="flex items-center font-bold text-[30px]">
                About Us
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div
        className=" w-[95%] md:w-[28%]"
        onClick={scrollToTop}
      >
        <Link to="/contact">
          <div
            name="contactbox"
            className="contactbox flex flex-col w-[95%] h-[350px] md:w-full mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11] "
          >
            <div
              className="contactTop h-[80%] w-full flex "
              href="/contact"
            ></div>

            <div className="contactBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] ">
              <p className="flex items-center font-bold text-[30px] ">
                Contact Us
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Features