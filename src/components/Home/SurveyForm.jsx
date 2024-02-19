import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function SurveyForm() {
  const [state, handleSubmit] = useForm("moqgdrqe");
  if (state.succeeded) {
    return <p>Thanks for your feedback!</p>;
  }
  return (
    <section className="w-full h-fit flex justify-center bg-gray-50  ">
      <div className="w-[95%] md:w-[90%] my-8 h-fit flex flex-col justify-center items-center  gap-5 ">
        <div className="text-center md:w-[60%]">
          <h1 className="text-3xl">
            Client Feedback Survey
          </h1>
          <p className="text-[20px] ">
            Thank you for choosing Confidence Personal
            Homecare Services. We value your feedback and
            strive to continuously improve our services.
            Please take a few moments to share your
            experience with us.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-lg gap-4 bg-white border rounded-lg border-purple-800 w-full md:w-[70%] p-4 md:p-10 "
        >
          {/* NAME  */}
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          {/* EMAIL  */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
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
            className="border border-black"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-fit self-center text-gray-50 font-bold p-4 bg-[#98830b] rounded-tr-[20px] rounded-bl-[20px] hover:bg-[#7036c7] hover:text-[#fff] hover:border-l-[3px] hover:border-t-[5px] "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default SurveyForm;
