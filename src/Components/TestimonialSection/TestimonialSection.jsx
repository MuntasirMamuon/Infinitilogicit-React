import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import React from "react";
import { FaStar } from "react-icons/fa";
const testimonialData = [
    {
      message:
        "Wow. What a great experience with this copywriter. Muhammad Noman is a very talented yesterday I got his first Email that was amazing...What a great experience with this copywriter",
      avatar:
        "https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/testimonial.png",
      name: "Keralina Literxtine",
      job: "CEO of Amazon",
    },
    {
      message:
        "I had the pleasure of working with this incredible team. Their dedication to excellence is unmatched, and they consistently deliver outstanding results. I'm truly impressed with their work.",
      avatar:
        "https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/testimonial.png",
      name: "John Doe",
      job: "VP of Marketing at Google",
    },
    {
      message:
        "Incredible service! I've been a client for years, and they never cease to amaze me with their creativity and professionalism. Highly recommended.",
      avatar:
        "https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/testimonial.png",
      name: "Jane Smith",
      job: "Founder of XYZ Company",
    },
    {
      message:
        "Outstanding work! The team goes above and beyond to deliver exceptional results. I couldn't be happier with their services.",
      avatar:
        "https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/testimonial.png",
      name: "Robert Johnson",
      job: "CTO at Microsoft",
    },
  ];
const TestimonialSection = () => {
    
    return (
        <section>
      <div className="w-full bg-black mb-5">
        <Swiper
          className="lg:flex justify-center gap-10 items-center mt-20 sm:flex-row ms-28 cursor-grab "
          style={{ height: "500px", width: "1200px" }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="lg:flex justify-center gap-10 items-center mt-20 sm:flex-row ms-28 bg-black bg-opacity-50">
                <div>
                  <img
                    src={testimonial.avatar}
                    alt={`Testimonial ${index}`}
                    width={500}
                    height={250}
                  />
                </div>
                <div style={{ width: "500px" }}>
                  <h1 className="font-bold mb-5 text-white text-5xl">
                    Our Client Love us
                  </h1>
                  <div>
                    <div className="text-yellow-500 flex gap-1 mb-6">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>

                  <p className="text-white text-2xl font-thin">
                    {testimonial.message}
                  </p>
                  <div className="text-white mt-8">
                    <h2 className="text-lg">{testimonial.name}</h2>
                    <h3>
                      <span className="text-sm text-gray-300">
                        {testimonial.job}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    );
};

export default TestimonialSection;