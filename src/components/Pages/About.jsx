import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'



const About = () => {
  return (
    <div id="about" className="about">
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="aboutContent w-full h-fit flex flex-col "
      >
        <div className="aboutintro w-full h-[50vh] flex justify-center items-center text-gray-50  mt-[120px] md:mt-[120px]">
          <h3 className="text-6xl font-bold text-[#fff]">
            About Us
          </h3>
        </div>
        <main className="w-[95%] h-fit bg-[#fff] m-[2.5%] mt-10 p-5 text-justify text-lg border-[5px] border-purple-300 ">
          <p>
            {" "}
            <strong className="text-[#b69d11]">
              Confidence Personal Homecare Services LLC
            </strong>{" "}
            is a licensed private home care provider
            operating in the State of Indiana proudly and
            surrounding counties.
          </p>
          <p>
            {" "}
            We stand by our commitment to the community we
            serve, placing a strong emphasis on
            understanding and meeting the unique needs of
            elderly individuals, particularly those with
            Alzheimer’s and Dementia, who require
            specialized care and assistance.
          </p>
          <p>
            Our comprehensive home care services are
            delivered directly to individuals in the comfort
            of their own homes, aiming to promote
            independence while providing support with daily
            living activities. Whether managing chronic
            health conditions, recovering from medical
            illnesses, or living with disabilities, our
            dedicated caregivers are trained to provide
            compassionate{" "}
          </p>
          <p>
            <strong className="text-[#b69d11]">
              At Confidence Personal Homecare Services LLC
            </strong>
            , offering peace of mind to family members
            facing difficult decisions regarding their loved
            ones' care. We take immense pride in delivering
            high-quality home care services not only to the
            elderly population but also to individuals of
            all ages facing disabilities, injuries, or
            illnesses.
          </p>
          <p>
            Our trusted services encompass a wide range of
            in-home health care and general assistance,
            addressing the diverse needs of our clients with
            a holistic approach. We are dedicated to
            providing exceptional, equitable, and
            patient-centered care, ensuring that every
            individual receives the attention and support
            they deserve.
          </p>
          <p>
            <strong className="text-[#b69d11]">
              Confidence Personal Homecare Services LLC
            </strong>{" "}
            is deeply committed to{" "}
            <strong className="text-[#b69d11]">
              {" "}
              diversity, equity, and inclusion,
            </strong>{" "}
            striving to create an environment of care that
            embraces the unique backgrounds and needs of our
            clients. With our unwavering dedication to
            excellence, we set the standard for quality in
            the Home Health Aide industry, offering
            inclusive and comprehensive care thattruly makes
            a difference in the lives of those we serve.
          </p>
        </main>
      </div>
    </div>
  );
}

export default About