import React from "react";
import visionImg from "../../assets/images/istockphoto-4.jpg";
import missionImg from "../../assets/images/istockphoto5.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

const Vision = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    // top-[200vh]
    <div
      name="vision"
      id="vision"
      className="flex flex-col w-ful overflow-hidden h-fit md:px-16 md:py-8 py-6 bg-[#fcfafa] text-[#040404] md:gap-20 gap-4 justify-center items-center md:items-start "
    >
      {/* mobile intro h3 */}
      <h3 className="md:hidden flex font-bold text-2xl text-[#b69d11] ">
        OUR VISION{" "}
      </h3>

      <div className="vision w-[90%] flex flex-col md:flex-row md:gap-10 gap-2 justify-center items-center ">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="visionright  w-[90%] md:w-[35%] border-[10px]  "
        >
          <img src={visionImg} alt="vision-img" />
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="visionleft flex flex-col md:w-[60%] text-[#2f1a4e] text-lg gap-2 text-justify"
        >
          <h3 className="hidden md:flex font-bold text-2xl text-[#b69d11] ">
            OUR VISION{" "}
          </h3>
          <li>
            At{" "}
            <strong>
              Confidence Personal Homecare Services
            </strong>
            , we envision a world where every individual's
            journey through life is met with dignity,
            comfort, and joy.
          </li>
          <li>
            Our mission is to enrich the lives of our
            clients by providing unparalleled in-home care
            services tailored to seniors' unique needs. With
            a steadfast{" "}
            <strong>commitment to excellence,</strong> we
            prioritize the well-being of those in our care
            and their families, navigating the complexities
            of aging with compassion and expertise.
          </li>
          <li>
            <strong>
              Recognizing life as a precious gift
            </strong>
            , we embrace the opportunity to make each moment
            meaningful, fostering connections and nurturing
            relationships that brighten lives. Our
            client-centered approach ensures that every
            interaction is infused with empathy and respect,
            touching hearts, inspiring smiles, and
            strengthening families one day at a time.
          </li>
          <li>
            At Confidence Personal Homecare Services, we
            understand that{" "}
            <strong>
              healing is not merely a destination but a
              holistic lifestyle
            </strong>
            . With us, you can have confidence in the
            quality of care you receive, knowing that your
            well-being is our top priority.
          </li>
        </div>
      </div>

      {/* VALUES */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="values w-full md:min-h-[70vh] flex flex-col md:flex-row md:gap-10 gap-4 justify-center items-center mt-10 "
      >
        {/* mobile intro h3 */}
        <h3 className=" flex md:hidden font-bold text-2xl text-[#b69d11] ">
          {" "}
          VALUES{" "}
        </h3>
        {/* mobile image  */}
        <div className="valuesright md:hidden w-[90%] md:w-[35%] h-[200px] md:min-h-[70vh] border-[10px]"></div>
        <div className="valuesleft flex flex-col w-[90%] md:w-[60%] text-[#2f1a4e] text-lg gap-2 text-justify">
          <h3 className="hidden md:flex font-bold text-2xl text-[#b69d11]">
            VALUES:
          </h3>
          <li>
            <strong>Compassion:</strong> We demonstrate
            empathy and kindness in every interaction,
            understanding and addressing the unique needs of
            each individual with warmth and sensitivity.
          </li>
          <li>
            <strong>Excellence:</strong> We are dedicated to
            delivering exceptional care services of the
            highest quality, consistently striving for
            excellence in all aspects of our work.
          </li>
          <li>
            <strong>Dignity:</strong> We respect the
            inherent worth and dignity of every person we
            serve, upholding their autonomy and promoting
            their independence with dignity and respect.
          </li>
          <li>
            <strong>Integrity:</strong> We conduct ourselves
            with honesty, transparency, and integrity,
            earning the trust of our clients, their
            families, and our community through ethical
            behavior and accountability.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in
            the power of collaboration and teamwork, working
            closely with clients, their families, healthcare
            professionals, and community resources to ensure
            holistic and comprehensive care.
          </li>
          <li>
            <strong>Personalized Care:</strong> We recognize
            the individuality of each client and tailor our
            services to meet their specific needs and
            preferences, honoring their unique preferences,
            cultural backgrounds, and lifestyles.
          </li>

          <li>
            <strong>Continuous Improvement:</strong> We are
            committed to ongoing learning and professional
            development, continuously seeking opportunities
            to enhance our skills, knowledge, and practices
            to better serve our clients and their families.
          </li>

          <li>
            <strong>Joyful Living:</strong> We celebrate
            life's moments and promote joy and companionship
            in all aspects of our care, fostering a positive
            and uplifting environment that enhances the
            well-being of our clients and their families. T
            hese values serve as guiding principles for
            Confidence Personal Homecare Services, shaping
            our culture, guiding our actions, and defining
            our commitment to excellence in homecare.
          </li>
        </div>

        <div className="hidden md:flex valuesright md:w-[35%] md:min-h-[70vh] border-[10px]"></div>
      </div>

      {/* mission  */}
      <div
        data-aos="fade-up"
        data-aos-duration="800 "
        className="mission w-[90%] flex  flex-col md:flex-row gap-4  md:gap-10 justify-center items-center mt-10"
      >
        <h3 className="md:hidden flex font-bold text-2xl text-[#b69d11] ">
          {" "}
          Mission Statement{" "}
        </h3>
        <div className="missionright flex w-[90%] md:w-[35%] border-[10px] ">
          <img src={missionImg} alt="vision-img" />
        </div>

        <div className="missionleft flex flex-col md:w-[60%] text-[#2f1a4e] text-lg gap-2 text-justify ">
          <h3 className=" hidden md:flex font-bold text-2xl text-[#b69d11] ">
            {" "}
            Mission Statement:{" "}
          </h3>
          <p>
            Confidence Personal Homecare Services is{" "}
            <strong>dedicated</strong> to{" "}
            <strong>
              enriching the lives of seniors by providing
              compassionate, personalized, and high-quality
              in-home care services
            </strong>
            . Our <strong>mission</strong> is to empower
            seniors to{" "}
            <strong>
              age with dignity and independence{" "}
            </strong>
            in the comfort of their own homes while
            fostering meaningful connections, promoting{" "}
            <strong>joyful living</strong>, and ensuring the
            highest standards of care. Through a
            collaborative and client-centered approach, we
            strive to exceed expectations, uphold{" "}
            <strong>
              integrity, and continuously improve our
              services{" "}
            </strong>{" "}
            to meet the evolving needs of our clients and
            their families. We are committed to making a
            positive difference in the lives of those we
            serve, one moment, one smile, and one family at
            a time.
          </p>
        </div>
      </div>
      <Link to={"/about"} onClick={scrollToTop}>
        <Button text={"See More About Us"} />
      </Link>
    </div>
  );
};

export default Vision;
