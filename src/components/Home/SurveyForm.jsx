import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import axios from "axios";
// import { Link } from "react-scroll";

function SurveyForm() {
  const [state, handleSubmit] = useForm("mpzvdely");
  if (state.succeeded) {
    return (
      <p className=" w-full h-fit text-2xl py-11 flex justify-center text-center ">
        Thanks for filling our form, we appreciate your
        feedback!
      </p>
    );
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

          {/* question1  */}
          <div className="satisfactoryLevel">
            <label htmlFor="satisfactory">
              How satisfied are you with the care services
              provided by Confidence Personal Homecare
              Services?
            </label>
            <br />
            {/* question1 options  */}
            <input
              type="radio"
              name="satisfactory Level"
              id="verySatisfied"
              value="Very Satisfied"
            />
            Very Satisfied
            <ValidationError
              prefix="satisfactory Level"
              field="Very Satisfied"
              errors={state.errors}
            />
            <br />
            <input
              type="radio"
              name="satisfactory Level"
              id="Satisfied"
              value="Satisfied"
            />
            Satisfied
            <br />
            <input
              type="radio"
              name="satisfactory Level"
              id="Neutral"
              value="Neutral"
            />
            Neutral
            <br />
            <input
              type="radio"
              name="satisfactory Level"
              id="Dissatisfied"
              value="Dissatisfied"
            />
            Dissatisfied
            <br />
            <input
              type="radio"
              name="satisfactory Level"
              id="VeryDissatisfied"
              value="Very Dissatisfied"
            />
            Very Dissatisfied
          </div>

          {/* QUESTION2  qUALITY */}
          <div className="qualityLevel">
            <label htmlFor="quality">
              Please rate the quality of care provided by
              our caregivers.
            </label>
            {/* quality options  */}
            <br />
            <input
              type="radio"
              name="quality Level"
              id="Excellent"
              value="Excellent"
            />
            Excellent
            <br />
            <input
              type="radio"
              name="quality Level"
              id="good"
              value="Good"
            />
            Good
            <br />
            <input
              type="radio"
              name="quality Level"
              id="Fair"
              value="Fair"
            />
            Fair
            <br />
            <input
              type="radio"
              name="quality Level"
              id="Poor"
              value="Poor"
            />
            Poor
          </div>
          {/* Question3  */}
          <div className="communicationLevel">
            <label htmlFor="communication">
              How would you rate the communication between
              you and our caregivers or office staff?
            </label>
            <br />
            <input
              type="radio"
              name="communication Level"
              id="Excellent"
              value="Excellent"
            />
            Excellent
            <br />
            <input
              type="radio"
              name="communication Level"
              id="Good"
              value="Good"
            />
            Good
            <br />
            <input
              type="radio"
              name="communication Level"
              id="Fair"
              value="Fair"
            />
            Fair
            <br />
            <input
              type="radio"
              name="communication Level"
              id="Poor"
              value="Poor"
            />
            Poor
          </div>

          {/* question 4  */}
          <div className="reliabilityLevel">
            <label htmlFor="reliability">
              Were our caregivers reliable and punctual in
              delivering care services as scheduled?
            </label>
            <br />
            <input
              type="radio"
              name="reliability Level"
              id="Yes Always"
              value="Yes Always"
            />
            Yes Always
            <br />
            <input
              type="radio"
              name="reliability Level"
              id="Most of the time"
              value="Most of the time"
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="reliability Level"
              id="Sometimes"
              value="Sometimes"
            />
            Sometimes
          </div>

          {/* question 5  */}
          <div className="respectLevel">
            <label htmlFor="respect">
              Did our caregivers treat you with respect and
              maintain your dignity during the care process?
            </label>
            <br />
            <input
              type="radio"
              name="respect Level"
              id="Always"
              value="Always"
            />
            Always
            <br />
            <input
              type="radio"
              name="respect Level"
              id="Most of the time"
              value="Most of the time"
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="respect Level"
              id="Sometimes"
              value="Sometimes"
            />
            Sometimes
            <br />
            <input
              type="radio"
              name="respect Level"
              id="Rarely"
              value="Rarely"
            />
            Rarely
            <br />
            <input
              type="radio"
              name="respect Level"
              id="Never"
              value="Never"
            />
            Never
          </div>

          {/* question 6  */}
          <div className="responsivenessLevel">
            <label htmlFor="responsiveness">
              How responsive was Confidence Personal
              Homecare Services to your needs and concerns?
            </label>
            <br />
            <input
              type="radio"
              name="responsiveness Level"
              id="Very Responsive"
              value="Very Responsive"
            />{" "}
            Very Responsive
            <br />
            <input
              type="radio"
              name="responsiveness Level"
              id="Responsive"
              value="Responsive"
            />
            Responsive
            <br />
            <input
              type="radio"
              name="responsiveness Level"
              id="Neutral"
              value="Neutral"
            />
            Neutral
            <br />
            <input
              type="radio"
              name="responsiveness Level"
              id="Unresponsive"
              value="Unresponsive"
            />
            Unresponsive
            <br />
            <input
              type="radio"
              name="responsiveness Level"
              id="Very Unresponsive"
              value="Very Unresponsive"
            />
            Very Unresponsive
          </div>

          {/* last Question  */}
          <div className="recommendationLevel">
            <label htmlFor="recommendation">
              Based on your experience, how likely are you
              to recommend Confidence Personal Homecare
              Services to a friend or family member?
            </label>
            <br />
            <input
              type="radio"
              name="recommendation Level"
              id="Very Likely"
              value="Very Likely"
            />{" "}
            Very Likely
            <br />
            <input
              type="radio"
              name="recommendation Level"
              id="Likely"
              value="Likely"
            />
            Likely
            <br />
            <input
              type="radio"
              name="recommendation Level"
              id="Neutral"
              value="Neutral"
            />
            Neutral
            <br />
            <input
              type="radio"
              name="recommendation Level"
              id="Unlikely"
              value="Unlikely"
            />
            Unlikely
            <br />
            <input
              type="radio"
              name="recommendation Level"
              id="Very Unlikely"
              value="Very Unlikely"
            />
            Very Unlikely
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-fit self-center text-gray-50 font-bold p-3 bg-[#98830b] rounded-tr-[20px] rounded-bl-[20px] hover:bg-[#7036c7] hover:text-[#fff] hover:border-l-[3px] hover:border-t-[5px] "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default SurveyForm;
