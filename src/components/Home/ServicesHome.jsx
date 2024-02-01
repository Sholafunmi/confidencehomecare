import React from 'react'
import image1 from '../../assets/images/istockphoto-2.jpg'
import image2 from '../../assets/images/pic5.jpg'
import image3 from '../../assets/images/istockphoto-5.jpg'
// import { Link } from 'react-router-dom'

const ServicesHome = () => {
  return (
    <div className='w-full flex flex-col h-fit bg-[#b69d11] justify-center items-center pt-10 pb-32 gap-10 '>
        <h3 className='text-gray-50 text-4xl pb-4'>Services That We Offer</h3>
        {/* firstbox  */}
        <div className="first flex w-[90%] h-[50vh] justify-center items-center text-gray-50 gap-[10%]">
            <div className="left w-[50%] hit-fit">
                <img src={image1} alt="" />
            </div>

            <div className="right w-[50%] h-fit">
                <h3 className='text-3xl'>Companionship Care</h3>
                <p className='text-2xl flex text-justify '>Confidence Personal Homecare Services tailors companionship and 
                attentive supervision specifically to seniors and individuals requiring 
                home care due to illness, injury, or cognitive diseases.
                </p>
            </div>
        </div>

            {/* second box  */}
            <div className="first flex md:flex-row-reverse w-[90%] h-[50vh] justify-center items-center text-gray-50 gap-[10%]">
                <div className="left w-[50%] h-fit">
                    <img src={image2} alt="" />
                </div>

                <div className="right w-[50%] h-fit">
                    <h3 className='text-3xl'>Personal Care</h3>
                    <p className='text-2xl flex text-justify '>Personal Care stands as a cornerstone service within the realm of home care. It encompasses aiding individuals in their daily activities, thereby fostering 
                a sense of ease and tranquility in the lives of the elderly.
                    </p>
                </div>
            </div>

            {/* third box  */}
            <div className="first flex w-[90%] h-[50vh] justify-center items-center text-gray-50 gap-[10%]">
            <div className="left w-[50%] h-fit">
                <img src={image3} alt="" />
            </div>

            <div className="right w-[50%]">
                <h3 className='text-3xl'>Household Assistance</h3>
                <p className='text-2xl flex text-justify '>At our service, we take pride in maintaining the cleanliness and safety of your home, offering 
                round-the-clock support, seven days a week.
                </p>
            </div>
        </div>
        



        <div className="second">
            <div className="left">

            </div>

            <div className="right">
                
            </div>
        </div>

    </div>
  )
}

export default ServicesHome