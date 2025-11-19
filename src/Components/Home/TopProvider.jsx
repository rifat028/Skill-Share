import React from "react";

const TopProvider = () => {
  return (
    <section className="py-8 md:py-16 my-5 bg-linear-to-t from-cyan-300 to-blue-100 overflow-hidden mx-auto px-0 sm:px-6 lg:px-8 sm:py-4">
      <h1 className="text-4xl my-5 text-center pb-10 font-black">
        Meet Our Top Providers
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="relative">
          <div className="bg-white flex justify-center items-center rounded-full border-5 border-blue-900 h-40 w-40">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2018/04/become-better-digital-marketer-1.jpg"
              className="h-35 rounded-full w-35 object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-800 font-bold md:text-2xl mt-3 border-y-4 border-black">
              Tom Hardy
            </h1>
          </div>
          <div className="rounded-full bg-blue-900 absolute top-0 right-0 p-2">
            <h1 className="text-3xl text-yellow-400 font-bold">#1</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white flex justify-center items-center rounded-full border-5 border-blue-900 h-40 w-40">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2018/04/become-better-digital-marketer-1.jpg"
              className="h-35 rounded-full w-35 object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-800 font-bold md:text-2xl mt-3 border-y-4 border-black">
              Nasir Uddin
            </h1>
          </div>
          <div className="rounded-full bg-blue-900 absolute top-0 right-0 p-2">
            <h1 className="text-3xl text-yellow-400 font-bold">#2</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white flex justify-center items-center rounded-full border-5 border-blue-900 h-40 w-40">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2018/04/become-better-digital-marketer-1.jpg"
              className="h-35 rounded-full w-35 object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-800 font-bold md:text-2xl mt-3 border-y-4 border-black">
              David Mils
            </h1>
          </div>
          <div className="rounded-full bg-blue-900 absolute top-0 right-0 p-2">
            <h1 className="text-3xl text-yellow-400 font-bold">#3</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white flex justify-center items-center rounded-full border-5 border-blue-900 h-40 w-40">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2018/04/become-better-digital-marketer-1.jpg"
              className="h-35 rounded-full w-35 object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-800 font-bold md:text-2xl mt-3 border-y-4 border-black">
              Marry Kuri
            </h1>
          </div>
          <div className="rounded-full bg-blue-900 absolute top-0 right-0 p-2">
            <h1 className="text-3xl text-yellow-400 font-bold">#4</h1>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white flex justify-center items-center rounded-full border-5 border-blue-900 h-40 w-40">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2018/04/become-better-digital-marketer-1.jpg"
              className="h-35 rounded-full w-35 object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <h1 className="text-blue-800 font-bold md:text-2xl mt-3 border-y-4 border-black">
              Madam Luicell
            </h1>
          </div>
          <div className="rounded-full bg-blue-900 absolute top-0 right-0 p-2">
            <h1 className="text-3xl text-yellow-400 font-bold">#5</h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
          View All &rarr;
        </button>
      </div>
    </section>
  );
};

export default TopProvider;
