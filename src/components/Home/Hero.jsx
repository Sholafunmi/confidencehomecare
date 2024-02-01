import React from 'react'
// import image1 from '../assets/images/istockphoto-1.jpg'
import image1 from '../../assets/images/istockphoto-1.jpg'
import Button from '../About/Button';

import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='w-full z-[-10] left-0 h-fit md:h-fit relative flex-col justify-center items-center bg-[#fbfbfc] '>
        
        
        <div className="hero w-full flex-col">
            <div className='top w-[80%] ml-6 md:mt-16 '>
            {/* md:mt-32 */}
                 <img className='md:w-[75%]' src={image1} alt="hero-image" />
            </div>

            <div className="introText relative mt-[-10%] md:mt-[3%] md:absolute md:top-[13%] w-[80%] md:w-[50%] h-fit md:h-[450px] ml-14 md:ml-[45%] flex justify-center items-center bg-[#7036c7] p-4 md:p-16   rounded-tl-[50px] rounded-bl-[0px]"> 
            {/* bg-[#d85720] */}
                <div className='flex flex-col text-gray-50 gap-2 md:gap-6 '>
                   <p className='text-2xl md:text-5xl font-bold '>Recognizing life as a precious gift</p>  
                    <p className='text-[20px]'>
                    
                    At Confidence Personal Homecare Services, we understand that healing is not 
                        merely a destination but a holistic lifestyle.
                    </p> 
                    
                    <a className='btn w-fit text-[#b69d11] bg-[#fff] font-bold text-lg p-3 rounded-tr-[20px] rounded-bl-[20px] ' href="">Learn More</a>

                </div>
                {/* <Button text="Follow" className="text-[#fffff0] rounded"/> */}
            

            </div>

            {/* bg-[#6137cc]  */}
            {/* bg-[#150330] */}
        
        </div>

        

        {/* FEATURES  */}
        {/* bg-[#A6817D] */}
        {/* bg-[#d5796d]  */}
        

    </div>
  )
}

export default Hero