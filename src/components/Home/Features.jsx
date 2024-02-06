import React from 'react'
import { Link } from 'react-router-dom'



const Features = () => {
   const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='features w-full h-fit md:flex justify-center items-center mt-14 py-6 md:py-20 md:gap-10 ' >
         
                        {/* <Link className=' w-[95%]  md:w-[28%] h-[350px]  '   to="/services"  smooth={true} offset={50} duration={500} >
                          <div name='servicebox' className="servicebox flex-col h-full  w-full mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#d5796d] ">
                              <div className="servicesTop h-[80%] w-full flex"></div>

                              <div className='servicesBottom h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] '>
                              
                                  <p className='flex items-center font-bold text-[20px] cursor-pointer '   to="vision"  smooth={true} offset={50} duration={500} >
                                  Our Services </p>
                              </div>

                            </div>
                        </Link> */}

                        {/* <Link to='/services' onClick={scrollToTop} className='md:w-[28%]'> */}
                          <div name='servicebox' className="aboutbox flex-col w-[95%] md:w-[28%] h-[350px] mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11]  ">
                            <div className="servicesTop h-[80%] w-full flex">
                                
                            </div>

                            <div className='servicesBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] '>
                              <a href="/services"  onClick={scrollToTop} className='flex items-center font-bold text-[30px]' >
                                Services
                               
                              </a>
                                
                            </div>

                          </div>

                        {/* </Link> */}
                       
                        <Link to='/about' onClick={scrollToTop} className='md:w-[28%]'>
                          <div name='aboutbox' className="aboutbox flex-col w-[95%] h-[350px] mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11]  ">
                                <div className="aboutTop h-[80%] w-full flex">
                                    
                                </div>

                                <div className='aboutBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] '>
                                    <p className='flex items-center font-bold text-[30px]' >About Us</p>
                                </div>

                          </div>
                        </Link>



                        <Link to='/contact' onClick={scrollToTop} className='md:w-[28%]'>
                          <div name='contactbox' className="contactbox flex-col w-[95%] h-[350px] md:w-[] mb-5 md:mb-0 ml-[2.5%] md:ml-0 border-8 border-[#b69d11] ">
                                <div className="contactTop h-[80%] w-full flex "href="/contact">
                                
                                </div>

                                <div className='contactBottom  h-[20%] w-full flex justify-center text-[#442572] bg-[#fff] '>
                                    <p className='flex items-center font-bold text-[30px] ' href="/contact">Contact Us</p>
                                </div>

                          </div>
                        </Link> 

                          {/* this works  */}
                        <Link to='/services' onClick={scrollToTop} className=' w-[90%] md:w-[28%]'>
                          Serve
                        </Link>

                        <a href="/services">
                          servee
                         </a>

              
                   
        </div>


  )
}

export default Features