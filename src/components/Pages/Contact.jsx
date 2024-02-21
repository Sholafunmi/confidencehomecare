import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Home from "./Home";
// import Button from "../Home/Button";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvdely");
  if (state.succeeded) {
    return <Contact />
    // return <p>Thanks for your feedback!</p>;
  }

  return (
    <div className="contact w-full flex flex-col h-fit md:min-h-screen pt-[120px] md:pt-[120px]  ">
      <div className="leftRight w-full h-fit flex flex-col md:flex-row justify-center align-center gap-12 md:gap-32 md:py-20  py-12 px-[5%]">
        <div className="companyInfo flex flex-col w-full md:w-[40%] gap-4 text-[#b69d11]">
          <h1 className="text-2xl flex font-bold">
            Confidence Personal Homecare Services LLC
          </h1>
          <div className="address text-xl">
            <p>Address:</p>
            <p>2315 HERMITAGE WAY INDIANAPOLIS INDIANA</p>
          </div>

          <div className="phone text-xl">
            <p>Phone:</p>
            <p>317-982-4221</p>
          </div>

          <div className="email text-xl">
            <p>Email: </p>
            <p>
              admin@confidencepersonalhomecare.comil.com
            </p>
          </div>

          <div className="workingHours text-xl">
            <p>Working Hours:</p>
            <p>24/7 (Monday - Sunday) </p>
          </div>
        </div>

        {/* contact form  */}
        <div className="contactForm flex flex-col gap-4  md:w-[60%]">
          <h3 className="text-2xl font-bold">
            Contact Us Today!
          </h3>
          <p>
            Fill the form below, we would definitely get
            back to you.
          </p>

          {/* FORM  */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-lg gap-4 bg-white border rounded-lg border-purple-800 w-full md:w-[80%] p-4 md:p-10 "
          >
            {/* FIRST NAME  */}
            <label htmlFor="firstname"> First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              className="border border-black"
            />
            <ValidationError
              prefix="Firstname"
              field="firstname"
              errors={state.errors}
            />

            {/* LAST NAME  */}
            <label htmlFor="lastname"> Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className="border border-black"
            />
            <ValidationError
              prefix="LastName"
              field="lastname"
              errors={state.errors}
            />

            {/* EMAIL  */}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border border-black"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            {/* MESSAGE */}
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="border border-black"
              rows={5}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-fit self-center text-gray-50 font-bold p-3 bg-[#98830b] rounded-tr-[20px] rounded-bl-[20px] hover:bg-[#7036c7] hover:text-[#fff] hover:border-l-[3px] hover:border-t-[5px] "
            >
              Submit
            </button>

            <div className="submited hidden" id="submitted">
              <p>
                Thank you for filling our form, your inputs
                have been successfully submitted!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
