'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, ChevronLeft, ChevronRight, Coffee, Heart, Users } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutItems = [
  {
    title: "Web Developer",
    image: "Image/landingImg.jpg",
    description:
      "I build responsive and user-friendly applications using modern technologies like React and Tailwind. I focus on clean UI and optimized performance.",
  },
  {
    title: "Student",
    image: "Image/landingImg.jpg",
    description:
      "Currently pursuing a BCA degree, I’m passionate about learning new technologies and growing in the tech field every day.",
  },
  // {
  //   title: "Taekwondo Practitioner",
  //   image: "Image/landingImg.jpg",
  //   description:
  //     "Practicing Taekwondo taught me discipline, focus, and resilience – values I carry into my coding life.",
  // },
  {
    title: "QA Tester",
    image: "Image/landingImg.jpg",
    description:
      "I ensure software works perfectly by applying quality assurance practices including test automation and detailed manual testing.",
  },
];

const AboutMeCarousel = () => {
  useEffect(() => {
    // Swiper needs the buttons to be mounted before initialization
  }, []);

  return (
    <>
<section className="bg-gray-50 dark:bg-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p> */}
        </div>
      <div className="hidden md:block absolute bottom-5 right-30 w-36 h-36 bg-indigo-200 rounded-full -rotate-6 opacity-20 pointer-events-none"></div>

 
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {aboutItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between bg-white  rounded-3xl shadow-lg p-8 md:p-12 transition-all duration-300 ease-in-out">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full object-cover w-64 h-64 mx-auto border-4 border-indigo-200 shadow-md"
                  />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left px-4">
                  <h3 className="text-3xl font-bold text-indigo-600 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
              
    </section>
    <div className="grid md:grid-cols-4 gap-8 m-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality First</h3>
            <p className="text-gray-600 text-sm">Delivering exceptional results with attention to detail</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Team Player</h3>
            <p className="text-gray-600 text-sm">Collaborative approach to problem solving</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Always Learning</h3>
            <p className="text-gray-600 text-sm">Staying updated with latest technologies</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Passionate</h3>
            <p className="text-gray-600 text-sm">Love for creating amazing user experiences</p>
          </div>
        </div>
        </>
  );
};

export default AboutMeCarousel;
