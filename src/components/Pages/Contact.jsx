import React from 'react'
import Button from '../Home/Button'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact w-full flex flex-col h-fit md:min-h-screen pt-[120px] md:pt-[120px]'>
      <div className="leftRight w-full h-fit flex flex-col md:flex-row justify-center gap-12 md:gap-32 md:py-20  py-12 px-[5%]">
        <div className="companyInfo flex flex-col w-full md:w-[40%] gap-4 text-[#b69d11]">
        <h1 className='text-2xl flex font-bold'>Confidence Personal Homecare Services LLC</h1>
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
        <h3 className='text-2xl font-bold'>Contact Us Today!</h3>
        <p>Fill the form below, we would definitely get back to you</p>
        
        {/* form  */}
        <form className='text-lg flex flex-col gap-4' action="">
          {/* name */}
          <div className='flex flex-col md:flex-row gap-6'> 
            <div className="name flex flex-col">
              <label htmlFor="name">First Name</label>
              <input className='border border-[#0a0511] ' type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="name">Last Name</label>
              <input className='border border-[#0a0511]' type="text" />
            </div>
          </div>
          {/* email  */}
            <div className='mail flex flex-col'>
              <label htmlFor="email">Email</label>
              <input className='border border-[#0a0511]' type="email" name="" id="" />
            </div>
            {/* message  */}
            <div className="message flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea className='border border-[#0a0511]'  name="message" id="" cols="30" rows="10"></textarea>
            </div>

            <Link to=" "  >
              <Button text={'Submit'} />
            </Link>
            

        </form>


        {/* <form action="" method="get"></form>
        <form action="" method="post"></form> */}
       




       </div>
      </div>     
    </div>
  )
}

export default Contact