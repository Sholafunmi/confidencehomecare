import React from "react";
import image1 from "../../assets/images/istockphoto-1.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

const Hero = () => {
  // scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="  mt-[130px] md:mt-[120px] w-full left-0 h-fit relative flex flex-col justify-center items-center bg-[#fbfbfc] ">
        <div className=" w-full flex-col">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="top w-[80%] ml-6 md:mt-16 "
          >
            <img
              className="md:w-[75%]"
              src={image1}
              alt="hero-image"
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="introText relative mt-[-10%] md:mt-[3%] md:absolute md:top-[13%] w-[80%] md:w-[50%] h-fit md:h-[450px] ml-14 md:ml-[45%] bg-[#7036c7] flex justify-center items-center p-4 md:p-16 rounded-tl-[50px] rounded-bl-[0px]"
          >
            <div className="flex flex-col text-gray-50 gap-2 md:gap-6 ">
              <p className="text-2xl md:text-5xl font-bold ">
                Recognizing life as a precious gift
              </p>
              <p className="text-lg md:text-[25px]">
                At Confidence Personal Homecare Services, we
                understand that healing is not merely a
                destination but a holistic lifestyle.
              </p>

              <Link to="./services" onClick={scrollToTop}>
                <Button text="Learn More"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
