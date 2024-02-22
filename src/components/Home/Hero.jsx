import React from "react";
import { Helmet } from "react-helmet";
import image1 from "../../assets/images/istockphoto-1.jpg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

const Hero = () => {
  const navigate = useNavigate();
  // scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toLearnMore = () => {
    navigate("/services");
    scrollToTop();
  };

  return (
    <>
      <div className="  mt-[130px] md:mt-[120px] w-full overflow-hidden left-0 h-fit relative flex flex-col justify-center items-center bg-[#fbfbfc] ">
        {/* HELMET  */}
        <Helmet>
          <title>
            Confidence Personal Homecare Services-THE
            CONFIDENCE YOU SEEK. Home Care Services in
            Indianapolis Indiana.
          </title>
          <meta
            name="description"
            content="Serching for Homecare Services in Indiana for both young and old age, you are at the right place"
          />
          <link
            rel="canonical"
            href="https://confidencepersonalhomecare.com"
          />
        </Helmet>
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
              <h1 className="text-2xl md:text-5xl font-bold ">
                Recognizing life as a precious gift
              </h1>
              <h2 className="text-lg md:text-[25px]">
                At Confidence Personal Homecare Services, we
                understand that healing is not merely a
                destination but a holistic lifestyle.
              </h2>

              <Button
                text="Learn More"
                onClick={toLearnMore}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
