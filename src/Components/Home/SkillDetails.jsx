import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaChalkboardTeacher, FaMailBulk, FaStar } from "react-icons/fa";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const id = useParams();
  const skillsData = useLoaderData();

  const data = skillsData.find((skill) => skill.skillId == id.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Booked!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <header className="p-6 md:p-8 border-b border-gray-100 bg-indigo-50">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            {data.skillName}
          </h1>
          <p className="text-lg md:text-xl text-indigo-600 mt-1 font-bold">
            ${data.price} per session • {data.category}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src={
                  data.image ||
                  "https://placehold.co/1080x400/312e81/ffffff?text=Skill+Image"
                }
                className="w-full h-56 sm:h-72 md:h-96 object-cover"
              />
            </div>
            <div className="lg:sticky lg:top-10 bg-indigo-50 border border-indigo-200 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-200 pb-3">
                Book Your Session
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@booking.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base md:text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-3 md:space-y-5 lg:space-y-7">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  Course Overview
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {data.description}
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Key Details
              </h2>
              <div className="rounded-lg shadow-md flex items-center p-3 gap-5">
                <div>
                  <FaChalkboardTeacher />
                </div>
                <div>
                  <h1 className="text-gray-600">Instructor</h1>
                  <h3 className="font-bold">{data.providerName}</h3>
                </div>
              </div>

              <div className="rounded-lg shadow-md flex items-center p-3 gap-5">
                <div>
                  <FaStar />
                </div>
                <div>
                  <h1 className="text-gray-600">Rating</h1>
                  <h3 className="font-bold">{`${data.rating} / 5.0`}</h3>
                </div>
              </div>

              <div className="rounded-lg shadow-md flex items-center p-3 gap-5">
                <div>
                  <MdOutlineReduceCapacity />
                </div>
                <div>
                  <h1 className="text-gray-600">Available Slots</h1>
                  <h3 className="font-bold">{`${data.slotsAvailable} spots left`}</h3>
                </div>
              </div>

              <div className="rounded-lg shadow-md flex items-center p-3 gap-5">
                <div>
                  <FaMailBulk />
                </div>
                <div>
                  <h1 className="text-gray-600">Contact</h1>
                  <h3 className="font-bold">{data.providerEmail}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
