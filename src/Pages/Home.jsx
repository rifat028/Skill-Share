import React, { Suspense } from "react";
import Hero from "../Components/Home/Hero";
import PopularSkills from "../Components/Home/PopularSkills";
import TopProvider from "../Components/Home/TopProvider";
import WorkProcess from "../Components/Home/WorkProcess";
import { HashLoader } from "react-spinners";
import Testimonial from "../Components/Home/Testimonial";

const skillsDataPromise = fetch("/SkillData.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="h-50 flex justify-center items-center">
            <HashLoader />
          </div>
        }
      >
        <PopularSkills skillsDataPromise={skillsDataPromise}></PopularSkills>
      </Suspense>
      <TopProvider></TopProvider>
      <WorkProcess></WorkProcess>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
