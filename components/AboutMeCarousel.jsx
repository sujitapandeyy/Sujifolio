import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const aboutItems = [
  {
    title: "Web Developer",
    image: "/images/web-dev.jpg",
    description: "I build responsive and user-friendly web applications using React, Tailwind, and modern tech stacks.",
  },
  {
    title: "Student",
    image: "/images/student.jpg",
    description: "Currently pursuing a degree in Computer Science and always eager to learn new technologies.",
  },
  {
    title: "Taekwondo Practitioner",
    image: "/images/taekwondo.jpg",
    description: "Black belt in Taekwondo — disciplined, focused, and always pushing physical limits.",
  },
  {
    title: "Quality Assurance",
    image: "/images/qa.jpg",
    description: "I ensure software quality with thorough testing strategies including automation and manual tests.",
  }
];

const AboutMeCarousel = () => {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
      <Swiper spaceBetween={30} slidesPerView={1}>
        {aboutItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-100 rounded-xl shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutMeCarousel;
