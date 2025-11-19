import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "I went from zero coding knowledge to building my first React app in three weeks! My expert, Jane, was patient and incredibly knowledgeable. Best investment I've ever made in my career.",
    name: "Alex M.",
    skill: "Web Development Learner",
    rating: 5,
    avatarPlaceholder: "AM",
  },
  {
    id: 2,
    quote:
      "The personalized fitness plan completely transformed my routine. The scheduling was flexible, and my provider made sure every session was challenging yet fun. Highly recommend this platform.",
    name: "Sarah K.",
    skill: "Fitness Enthusiast",
    rating: 5,
    avatarPlaceholder: "SK",
  },
  {
    id: 3,
    quote:
      "Finding a music tutor who understood my specific style was always hard. Here, I found an amazing guitar expert immediately. The progress I've made in six months is insane!",
    name: "Chris L.",
    skill: "Guitar Student",
    rating: 4.8,
    avatarPlaceholder: "CL",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Loved by <span className="text-emerald-600">Thousands</span> of
            Learners
          </h2>
          <p className="text-xl text-gray-500 mt-3 max-w-3xl mx-auto">
            Real success stories from people mastering new skills every day.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-2xl"
            >
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                <span className="text-3xl font-serif text-gray-400 mr-1">
                  “
                </span>
                {t.quote}
              </blockquote>
              <div>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-4xl font-extrabold text-gray-900 mt-2">
                  {t.rating.toFixed(1)}
                </p>

                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg shadow-md shrink-0">
                    {t.avatarPlaceholder}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-indigo-600">{t.skill}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Join our community of over 500+ satisfied learners.
          </p>
          <button className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02]">
            Explore All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
