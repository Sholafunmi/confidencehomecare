// Testimonials.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    id: 1,
    name: "Emily S",
    testimony:
      "I cannot express enough gratitude for the exceptional care provided by Confidence Personal Homecare Services. As someone who values independence, it was difficult to accept assistance at first, but their team quickly put me at ease. Their caregivers are not only highly skilled but also compassionate and respectful. Thanks to them, I feel safe and confident in my own home.",
  },
  {
    id: 2,
    name: "Michael D",
    testimony:
      "I was hesitant to enlist the help of a homecare service, but after experiencing the professionalism and warmth of Confidence Personal Homecare Services, I couldn't be happier with my decision. From meal preparation to medication reminders, their caregivers go above and beyond to ensure my needs are met. I highly recommend their services to anyone in need of reliable care.",
  },
  {
    id: 3,
    name: "Sarah H",
    testimony:
      "Confidence Personal Homecare Services has been a lifesaver for my family. Caring for my aging parents while juggling work and other responsibilities was becoming overwhelming until we found Confidence. Their team not only provides excellent care but also offers invaluable companionship and emotional support. I can finally breathe easier knowing my parents are in good hands.",
  },
  {
    id: 4,
    name: "David L",
    testimony:
      "After my recent surgery, I needed assistance with daily tasks during my recovery period. Confidence Personal Homecare Services was recommended to me, and I couldn't be more grateful. Their caregivers are not only skilled and professional but also genuinely kind-hearted individuals. Thanks to them, I was able to focus on my recovery with confidence and peace of mind.",
  },
  {
    id: 5,
    name: "Rebecca M",
    testimony:
      "Choosing Confidence Personal Homecare Services for my grandmother was one of the best decisions we've made as a family. From the initial consultation to ongoing care, their team has been incredibly responsive and accommodating to our needs. The personalized attention and genuine care they provide have made a significant difference in my grandmother's quality of life. I cannot thank them enough.",
    },

];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow:
            testimonials.length >= 1
              ? 1
              : testimonials.length,
          slidesToScroll:
            testimonials.length >= 1
              ? 1
              : testimonials.length,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full h-fit bg-gray-300 py-16  ">
      <div className="container mx-auto w-[80%] flex flex-col text-center text-lg ">
        <h2 className=" text-2xl md:text-3xl font-semibold text-[#2c0539] mb-8">
          Customer Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1b0423] p-6 rounded-lg shadow-md mt-8"
            >
              <p className="text-gray-50 mb-4">
                {testimonial.testimony}
              </p>
              <p className="text-gray-50 font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
