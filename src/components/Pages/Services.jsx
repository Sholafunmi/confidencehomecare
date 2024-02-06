import React from 'react'


const Services = () => {
  return (
    
    <div id='services' className='services w-full h-fit flex flex-col justify-center pt-[120px] md:pt-[120px] '>
      <div className="servicesContent w-full flex flex-col justify-center ">
        <div className=' servicesIntro flex flex-col h-fit md:min-h-[50vh] px-[5%] py-6  text-[#e1ca47] '>

          <h3 className='self-center mb-10 text-4xl  md:text-6xl font-bold text-gray-50  border-b  border-[#e1ca47] ' >Our Services</h3>
          <p>
              <p className=' text-[18px] md:text-[30px] text-gray-50 font-bold text-center'>
                Confidence Personal Homecare Services specializes in providing companionship and attentive 
                supervision for seniors and individuals requiring home care due to conditions like illness, injury, or cognitive diseases.
                Our commitment is to offer a unique blend of personalized attention and a diverse range of activities to enhance the well-being and companionship of our valued clients. 
              </p>
          </p>       
        </div>

        {/* bg-[#e26c3a] */}
        <div className='servicesbody flex flex-col w-[95%] m-[2.5%] my-16 p-4 text-black  gap-8 text-lg bg-[#fbfbfc] border-[5px] border-purple-300'>
          <div>
              {/* <hr className='bg-[#ef7541] ' /> */}
                <p className='text-2xl font-bold text-[#b69d11] ' >Companionship Care:</p> 
                <p className='text-lg flex flex-col text-left gap-3 '>
                  <li>Confidence Personal Homecare Services tailors companionship and attentive supervision specifically to seniors and individuals requiring home care due to illness, injury, or cognitive diseases.</li>
                  <li>Our comprehensive services include emotional support, participation in preferred activities, and providing companionship to alleviate feelings of isolation.</li>
                  <li>We strive to be a supportive presence and unwavering companion for those seeking companionship and care.</li>
                  <li>Acknowledging the importance of personalized attention, Confidence Personal Homecare Services prioritizes individualized care and companionship for each client.</li>
                </p>
          </div>

        
          <div>
          {/* <hr /> */}
              <p className='text-2xl font-bold text-[#b69d11]' >Personal Care:</p> 
              <p className='text-lg'>
                Personal Care stands as a cornerstone service within the realm of home care. It encompasses aiding individuals in their daily activities, thereby fostering 
                a sense of ease and tranquility in the lives of the elderly. 
                Such services are intertwined with providing support in tasks like dressing, maintaining hygiene, and managing incontinence.
              </p>
          </div>

          <div>
            <p className='text-2xl font-bold text-[#b69d11]' >Personal Assitance:</p> 
            <p className='text-lg'>
             Moreover, drawing from our wealth of experience in delivering personalized care programs, we extend support to 
            individuals within the familiar surroundings of their homes. Our array of personal assistance services encompasses:
             </p>
             <p className='text-lg flex flex-col gap-2'>
                <li>Bathing or showering</li>
                <li>Dressing and grooming</li>
                <li>Hair, skin, and nail care</li>
                <li>Oral hygiene</li>
                <li>Shaving</li>
                <li>Toileting/incontinence care</li>
                <li>Assistance with walking and exercises</li>
                <li>Reminders for medication</li>
                <li>Assistance with feeding</li>
              </p>
          </div>

          <div>
            <p className='text-2xl font-bold text-[#b69d11]' >Household Assistance:</p> 
            <p>At our service, we take pride in maintaining the cleanliness and safety of your home, offering 
                round-the-clock support, seven days a week. Whether you're just beginning to explore in-home 
                assistance or seeking ongoing care, our homemaking services ensure a comfortable and secure 
                environment. Our comprehensive offerings include:
            </p>

            <p className='flex flex-col gap-2'>
              <li>Thoughtful meal planning and preparation</li>
            <li>Meticulous light housekeeping</li>
            <li>Thorough vacuuming and dusting</li>
            <li>Effective sweeping and mopping</li>
            <li>Freshening up bed linens</li>
            <li>Prompt laundry services</li>
            <li>Sparkling dishwashing</li>
            <li>Detailed bathroom and kitchen cleaning</li>
            <li>Efficient trash removal</li>
            <li>Personalized assistance with mail sorting and reading, and more.</li>
             
            </p>

              
          </div>


          <div>
            <p className='text-2xl font-bold text-[#b69d11]' >Household Responsibilities:</p>
              <p className='text-lg'>Home care services encompass various household chores and cleaning tasks, whereas
                  home health care primarily focuses on aiding individuals in their recovery from 
                  illness or injury. Professionals in home health care typically include home health 
                  aides.
              </p>
          </div>


          <div>
            <p className='text-2xl font-bold text-[#b69d11]'> Meal Preparation Support:</p>
       
            <p className='text-lg'>At Confidence Personal Homecare Services, we provide professional assistance with
            meal preparation daily and weekly, ensuring our clients have nourishing meals ready 
            when needed. This allows clients to maintain their independence and comfort in their 
            own homes, even when they are unable to cook for themselves. </p>
          </div>

        </div>

      </div>
    </div>
    
  )
}

export default Services