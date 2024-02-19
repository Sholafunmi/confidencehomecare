import React, { useState } from "react";
import Button from "./Button";
import { GoogleSpreadsheet } from "google-spreadsheet";

const FeedbackSurvey = () => {


  // google spreadsheet for spill 
 
  



  
  // const [satisfactory, setSatisfactory] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    satisfactory: "",
    quality: "",
    communication: "",
    reliability: "",
    respect: "",
    responsiveness: "",
    recommendation: "",
  });

  const handleInputChange = (e) => {
    const formItem = e.target.name;
    const formValue = e.target.value;
    // const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [formItem]: formValue,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Load your Google Spreadsheet using its published URL
    const doc = new GoogleSpreadsheet("");

    // Load the sheets and get the first one
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Append the form data to the sheet
    await sheet.addRow(formData);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      satisfactory: "",
      quality: "",
      communication: "",
      reliability: "",
      respect: "",
      responsiveness: "",
      recommendation: "",
    });

    alert("Form submitted successfully!");
    
  };

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

        {/* form  */}
        <form
          onSubmit={handleSubmit}
          action="https://script.google.com/macros/s/AKfycby2XyIiTcooydRt3bKotM-AOBaVHrMUTHbHvJaD0I11cYkwuSWPzOB47ugzF6LzkoT-PA/exec"
          className="flex flex-col text-lg gap-4 bg-white border rounded-lg border-purple-800 w-full md:w-[70%] p-4 md:p-10 "
          name="survey"
          id="survey"
        >
          {/* <div className=" flex flex-col md:flex-row md:gap-10 gap-4 "> */}
            <div className="md:flex gap-1">
              <label htmlFor="name"> Fullname:</label>
              <input
                type="text"
                name="name"
                id=""
                className="border border-black"
                onChange={handleInputChange}
              />
            </div>

            <div className="md:flex gap-1">
              <label htmlFor="mail">Email:</label>
              <input
                type="email"
                name="email"
                id=""
                className="border border-black"
                onChange={handleInputChange}
              />
            </div>
          {/* </div> */}

          <div>
            <label htmlFor="satisfactory">
              How satisfied are you with the care services
              provided by Confidence Personal Homecare
              Services?
            </label>
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Very Satisfied"
              onClick={handleInputChange}
            />{" "}
            Very Satisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Satisfied"
              onClick={handleInputChange}
            />
            Satisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Neutral"
              onClick={handleInputChange}
            />
            Neutral
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Dissatisfied"
              onClick={handleInputChange}
            />
            Dissatisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Very Dissatisfied"
              onClick={handleInputChange}
            />
            Very Dissatisfied
          </div>

          {/* Question 2  */}
          <div>
            <label htmlFor="quality">
              Please rate the quality of care provided by
              our caregivers.
            </label>
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Excellent"
              onChange={handleInputChange}
            />{" "}
            Excellent
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Good"
              onChange={handleInputChange}
            />
            Good
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Fair"
              onChange={handleInputChange}
            />
            Fair
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Poor"
              onChange={handleInputChange}
            />
            Poor
            <br />
          </div>

          {/* Question 3  */}

          <div>
            <label htmlFor="communication">
              How would you rate the communication between
              you and our caregivers or office staff?
            </label>
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Excellent"
              onChange={handleInputChange}
            />{" "}
            Excellent
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Good"
              onChange={handleInputChange}
            />
            Good
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Fair"
              onChange={handleInputChange}
            />
            Fair
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Poor"
              onChange={handleInputChange}
            />
            Poor
          </div>

          {/* question 4  */}
          <div>
            <label htmlFor="reliability">
              Were our caregivers reliable and punctual in
              delivering care services as scheduled?
            </label>
            <br />
            <input
              type="radio"
              name="reliability"
              id=""
              value="Yes Always"
              onChange={handleInputChange}
            />
            Yes Always
            <br />
            <input
              type="radio"
              name="reliability"
              id=""
              value="Most of the time"
              onChange={handleInputChange}
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="reliability"
              id=""
              value="Sometimes"
              onChange={handleInputChange}
            />
            Sometimes
          </div>

          {/* question 5  */}
          <div>
            <label htmlFor="respect">
              Did our caregivers treat you with respect and
              maintain your dignity during the care process?
            </label>
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              onChange={handleInputChange}
              value="Always"
            />{" "}
            Always
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Most of the time"
              onChange={handleInputChange}
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Sometimes"
              onChange={handleInputChange}
            />
            Sometimes
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Rarely"
              onChange={handleInputChange}
            />
            Rarely
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Never"
              onChange={handleInputChange}
            />
            Never
          </div>

          {/* question 6  */}
          <div>
            <label htmlFor="responsiveness">
              How responsive was Confidence Personal
              Homecare Services to your needs and concerns?
            </label>
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Very Responsive"
              onChange={handleInputChange}
            />{" "}
            Very Responsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Responsive"
              onChange={handleInputChange}
            />
            Responsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Neutral"
              onChange={handleInputChange}
            />
            Neutral
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Unresponsive"
              onChange={handleInputChange}
            />
            Unresponsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Very Unresponsive"
              onChange={handleInputChange}
            />
            Very Unresponsive
          </div>

          {/* last Question  */}
          <div>
            <label htmlFor="recommendation">
              Based on your experience, how likely are you
              to recommend Confidence Personal Homecare
              Services to a friend or family member?
            </label>
            <br />
            <input
              type="radio"
              name="recommendation"
              id=""
              value="Very Likely"
              onChange={handleInputChange}
            />
            Very Likely
            <br />
            <input
              type="radio"
              name="recommendation"
              id=""
              value="Likely"
              onChange={handleInputChange}
            />
            Likely
            <br />
            <input
              type="radio"
              name="recommendation"
              id=""
              value="Neutral"
              onChange={handleInputChange}
            />
            Neutral
            <br />
            <input
              type="radio"
              name="recommendation"
              id=""
              value="Unlikely"
              onChange={handleInputChange}
            />
            Unlikely
            <br />
            <input
              type="radio"
              name="recommendation"
              id=""
              value="Very Unlikely"
              onChange={handleInputChange}
            />
            Very Unlikely
          </div>
          {/* submit button  */}
          {/* <Button text="Submit" id="submit" type="submit" /> */}

          {/* <button type="submit" id="submit"> submit</button> */}
          <Button text="Submit" id="submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default FeedbackSurvey;
