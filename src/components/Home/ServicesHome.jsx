import React from "react";
import image1 from "../../assets/images/istockphoto-2.jpg";
import image2 from "../../assets/images/pic5.jpg";
import image3 from "../../assets/images/istockphoto-5.jpg";
import Button from "../Home/Button";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

const ServicesHome = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="w-full overflow-hidden flex flex-col h-fit bg-[#F3F5FA] justify-center items-center pt-10 pb-16 gap-12 md:gap-10 ">
      <h1
        data-aos="slide-down"
        data-aos-duration="800"
        className="text-[#9256ed] text-2xl md:text-4xl font-bold  md:mb-6"
      >
        Services That We Offer
      </h1>
      {/* firstbox  */}
      <div className="first flex flex-col md:flex-row  w-[90%] h-fit md:min-h-[50vh] justify-center items-center gap-4 md:gap-[10%]">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="left w-full md:w-[50%] hit-fit "
        >
          <img src={image1} alt="companion care image" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="right w-full md:w-[50%] h-fit"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#9256ed]">
            Companionship Care
          </h2>
          <p className=" text-lg md:text-2xl flex text-justify ">
            Confidence Personal Homecare Services tailors
            companionship and attentive supervision
            specifically to seniors and individuals
            requiring home care due to illness, injury, or
            cognitive diseases.
          </p>
        </div>
      </div>

      {/* second box  */}
      <div className="first flex flex-col md:flex-row-reverse w-[90%] h-fit md:min-h-[50vh] justify-center items-center gap-4 md:gap-[10%]">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="left w-full md:w-[50%] h-fit"
        >
          <img src={image2} alt="Personal Care image" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="right w-full md:w-[50%] h-fit"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#9256ed]">
            Personal Care
          </h2>
          <p className="text-lg md:text-2xl flex text-justify ">
            Personal Care stands as a cornerstone service
            within the realm of home care. It encompasses
            aiding individuals in their daily activities,
            thereby fostering a sense of ease and
            tranquility in the lives of the elderly.
          </p>
        </div>
      </div>

      {/* third box  */}
      <div className="first flex flex-col md:flex-row w-[90%] h-fit md:min-h-[50vh] justify-center items-center gap-4 md:gap-[10%]">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="left w-full md:w-[50%] h-fit"
        >
          <img src={image3} alt="Household Assistance image" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="right w-full md:w-[50%]"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#9256ed]">
            Household Assistance
          </h2>
          <p className="text-lg md:text-2xl flex text-justify ">
            At our service, we take pride in maintaining the
            cleanliness and safety of your home, offering
            round-the-clock support, seven days a week.
          </p>
        </div>
      </div>

      <Link to="/services" onClick={scrollToTop}>
        <Button text={"See More of Our Services"} />
      </Link>
    </div>
  );
};

export default ServicesHome;
