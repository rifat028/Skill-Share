import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import SkillDetails from "./SkillDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ skillCard }) => {
  const { skillName, price, rating, image, category } = skillCard;
  const navigate = useNavigate();

  const HandleViewDetails = () => {
    navigate(`/skill-details/${skillCard.skillId}`);
    // console.log(`/skill-details/${skillCard.skillId}`);
    // return <SkillDetails skillCard={skillCard}></SkillDetails>;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div
      className="bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
      data-aos="flip-left"
      data-aos-duration="1500"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 p-2 rounded-2xl"
        />
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>
      <div className="p-4 sm:p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 leading-snug pr-2">
            {skillName}
          </h3>
          <div className="flex items-center space-x-1 shrink-0 mt-0.5">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.694h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.046a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.046a1 1 0 00-1.175 0l-2.817 2.046c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L2.203 8.723c-.784-.57-.381-1.81.588-1.81h3.461a1 1 0 00.95-.694l1.07-3.292z" />
            </svg>
            <span className="text-lg font-bold text-gray-900">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <div className="text-3xl font-extrabold text-indigo-600">
            ${price}
            <span className="text-base font-medium text-gray-500">/hr</span>
          </div>
          <button
            className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.02]"
            onClick={HandleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
