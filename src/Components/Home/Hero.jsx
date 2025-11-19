import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slidesData = [
  {
    title: "Innovate. Collaborate. Lead.",
    subtitle:
      "Connecting students and researchers worldwide to accelerate discovery.",
    buttonText: "Join the Platform",
    gradientClass: "bg-gradient-to-br from-indigo-700 to-sky-500",
    buttonColor: "bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500",
  },
  {
    title: "Access World-Class Academic Resources",
    subtitle: "Unlimited access to journals, datasets, and expert mentorship.",
    buttonText: "Browse Resources",
    gradientClass: "bg-gradient-to-tr from-teal-600 to-emerald-500",
    buttonColor: "bg-white text-teal-600 font-bold hover:bg-gray-100",
  },
  {
    title: "Submit Your Thesis for Peer Review",
    subtitle:
      "Get constructive feedback and prepare your work for publication.",
    buttonText: "Start Submission",
    gradientClass: "bg-gradient-to-bl from-purple-600 to-pink-500",
    buttonColor: "bg-red-400 text-white font-bold hover:bg-red-500",
  },
];

const Hero = () => {
  return (
    <section className="w-full mb-5 md:mb-10">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] rounded-none sm:rounded-2xl shadow-xl overflow-hidden"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col justify-center items-center h-full text-white p-6 sm:p-12 ${slide.gradientClass}`}
                style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.4)" }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 sm:mb-4 tracking-tight text-center max-w-5xl">
                  {slide.title}
                </h1>
                <p className="text-md sm:text-xl md:text-2xl mb-8 sm:mb-10 font-light text-center max-w-4xl opacity-90">
                  {slide.subtitle}
                </p>
                <button
                  className={`px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-bold rounded-full uppercase transition duration-300 transform hover:scale-105 shadow-2xl ${slide.buttonColor}`}
                >
                  {slide.buttonText} &rarr;
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
