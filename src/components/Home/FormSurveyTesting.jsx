import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { Events } from "react-scroll";
// import { GoogleSpreadsheet } from "google-spreadsheet";

const FormSurveyTesting = () => {
  //  form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [satisfactory, setSatisfactory] = useState("");
  const [quality, setQuality] = useState("");
  const [communication, setCommunication] = useState("");
  const [reliability, setReliability] = useState("");
  const [respect, setRespect] = useState("");
  const [responsiveness, setResponsiveness] = useState("");
  const [recommendation, setRecommendation] = useState("");

  // submite event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,email,satisfactory);
    const data={
      Name:name,
      Email:email,
      Satisfactory:satisfactory,
      Quality:quality,
      Communication:communication,
      Reliability:reliability,
      Respect:respect,
      Responsiveness:responsiveness,
      Recommendation:recommendation
    }
    axios.post(
      "https://sheet.best/api/sheets/a3fdeef1-e01b-43e5-b59a-d814ba05885d",data).then((response)=>{console.log(response);
      setName('');
      setEmail('');
      setSatisfactory('');
      setQuality('')
      setCommunication('')
      setReliability('')
      setRespect('')
      setResponsiveness('')
      setRecommendation('')
    })
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
        {/* form  */}
       <form 
          action=""
          className="flex flex-col text-lg gap-4 bg-white border rounded-lg border-purple-800 w-full md:w-[70%] p-4 md:p-10 "
        >
          <div className=" flex flex-col md:flex-row md:gap-10 gap-4 ">
            <div className="md:flex gap-1">
              <label htmlFor="name"> Fullname:</label>
              <input
                type="text"
                name="name"
                id=""
                className="border border-black"
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="md:flex gap-1">
              <label htmlFor="mail">Email:</label>
              <input
                type="email"
                name="email"
                id=""
                className="border border-black"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

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
              onChange={(e)=>setSatisfactory(e.target.value)
              }
            />{" "}
            Very Satisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Satisfied"
              //   onChange={handleInputChange}
            />
            Satisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Neutral"
              //   onChange={handleInputChange}
            />
            Neutral
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Dissatisfied"
              //   onChange={handleInputChange}
            />
            Dissatisfied
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Very Dissatisfied"
              //   onChange={handleInputChange}
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
            />{" "}
            Excellent
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Good"
            />
            Good
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Fair"
            />
            Fair
            <br />
            <input
              type="radio"
              name="quality"
              id=""
              value="Poor"
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
            />{" "}
            Excellent
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Good"
            />
            Good
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Fair"
            />
            Fair
            <br />
            <input
              type="radio"
              name="communication"
              id=""
              value="Poor"
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
            />{" "}
            Yes Always
            <br />
            <input
              type="radio"
              name="reliability"
              id=""
              value="Most of the time"
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="reliability"
              id=""
              value="Sometimes"
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
              value="Always"
            />{" "}
            Always
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Most of the time"
            />
            Most of the time
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Sometimes"
            />
            Sometimes
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Rarely"
            />
            Rarely
            <br />
            <input
              type="radio"
              name="respect"
              id=""
              value="Never"
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
            />{" "}
            Very Responsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Responsive"
            />
            Responsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Neutral"
            />
            Neutral
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Unresponsive"
            />
            Unresponsive
            <br />
            <input
              type="radio"
              name="responsiveness"
              id=""
              value="Very Unresponsive"
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
              name="satisfactory"
              id=""
              value="Very Likely"
            />{" "}
            Very Likely
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Likely"
            />
            Likely
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Neutral"
            />
            Neutral
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Unlikely"
            />
            Unlikely
            <br />
            <input
              type="radio"
              name="satisfactory"
              id=""
              value="Very Unlikely"
            />
            Very Unlikely
          </div>

          {/* <Button text="Submit" id="submit" type="submit" /> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default FormSurveyTesting;



{/* <script>
      const scriptURL = 'https://script.google.com/macros/s/AKfycby2XyIiTcooydRt3bKotM-AOBaVHrMUTHbHvJaD0I11cYkwuSWPzOB47ugzF6LzkoT-PA/exec'
      const form = document.forms['submit-to-google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // Handle success
            console.log("Form data sent successfully!");
            form.reset();
            window.location.href = "formsubmit.html"; // Redirect to success page
        }).catch(error => {
            console.error("Error sending form data:", error);
        });
      })
    </script> */}
