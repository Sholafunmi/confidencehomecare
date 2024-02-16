import React, { useRef, useState } from "react";
import Button from "../Home/Button";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");

  // DYNAMIC TEMPLATES PARAMS
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Confidence HomeCare Services",
    message: message,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_syotvgl",
        "template_8l5b80r",
        
        form.current,
        {
          publicKey: "Lmg9VuLWARl-_N6C-",
        },
       
      )
      .then(
        () => {
          console.log("SUCCESS!");

          setName("");
          setMail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact w-full flex flex-col h-fit md:min-h-screen pt-[120px] md:pt-[120px]">
      <div className="leftRight w-full h-fit flex flex-col md:flex-row justify-center gap-12 md:gap-32 md:py-20  py-12 px-[5%]">
        <div className="companyInfo flex flex-col w-full md:w-[40%] gap-4 text-[#b69d11]">
          <h1 className="text-2xl flex font-bold">
            Confidence Personal Homecare Services LLC
          </h1>
          <div className="address text-xl">
            <p>Address:</p>
            <p>xxx Indianapolis xxx </p>
          </div>

          <div className="phone text-xl">
            <p>Phone:</p>
            <p>(317)000-0000</p>
          </div>

          <div className="email text-xl">
            <p>Email: </p>
            <p>confidencehomecare@gmail.com</p>
          </div>

          <div className="workingHours text-xl">
            <p>Working Hours:</p>
            <p>Mon - Fri 9:00am - 5:00pm</p>
          </div>
        </div>

        {/* contact form  */}
        <div className="contactForm flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Contact Us Today!
          </h3>
          <p>
            Fill the form below, we would definitely get
            back to you
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-lg flex flex-col gap-4 border border-purple-700 rounded-3xl p-4"
          >
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="border border-[#0a0511]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="border border-[#0a0511]"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              className="border border-[#0a0511]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>

          {/* <form
            method="post"
            action=""
            encType="text/plain"
            className="text-lg flex flex-col gap-4"
            name="contactForm"
          >
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="name flex flex-col">
                <label htmlFor="name">First Name</label>
                <input
                  className="border border-[#0a0511] "
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Last Name</label>
                <input
                  className="border border-[#0a0511]"
                  type="text"
                />
              </div>
            </div>
            
            <div className="mail flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="border border-[#0a0511]"
                type="email"
                name=""
                id=""
              />
            </div>
           
            <div className="message flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className="border border-[#0a0511]"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input
              type="submit"
              value="send"
              className="bg-purple-700 text-gray-50  w-fit p-4 cursor-pointer  "
            />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
