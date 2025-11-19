import React from "react";

const WORK_PROCESS_STEPS = [
  {
    id: 1,
    title: "Find Your Expert",
    description:
      "Easily filter and browse thousands of skilled providers across categories like coding, music, and fitness based on price, rating, and schedule.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: 2,
    title: "Book a Session",
    description:
      "Schedule your one-on-one session instantly through our integrated calendar. Get an immediate confirmation and a direct link to your virtual meeting room.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: 3,
    title: "Learn & Achieve",
    description:
      "Connect with your provider in our interactive environment. Receive personalized guidance, track your learning milestones, and master your new skill.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          How It <span className="text-indigo-600">Works</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          From browsing to mastery, our streamlined process makes connecting
          with top experts simple and effective.
        </p>
        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="hidden md:block absolute left-4 right-4 top-20 h-1 bg-indigo-200 transform translate-y-[-50%]"></div>

          {WORK_PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl shadow-lg bg-white border border-gray-200 relative transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ zIndex: 10 }}
            >
              <div
                className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center mb-6 ring-4 ring-white shadow-md`}
              >
                <span className={`text-3xl font-black ${step.color}`}>
                  {step.id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500">{step.description}</p>

              {/* Mobile Separator Line (Hidden on Desktop) */}
              {index < WORK_PROCESS_STEPS.length - 1 && (
                <div className="md:hidden absolute -bottom-10 w-0.5 h-10 bg-indigo-300"></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
            Get Started Today &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
