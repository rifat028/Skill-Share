import React, { use } from "react";
import SkillCard from "./SkillCard";

const PopularSkills = ({ skillsDataPromise }) => {
  const skillsData = use(skillsDataPromise);
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-10 text-center">
        Explore The Most Popular Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillsData.map((skillData) => (
          <SkillCard key={skillData.skillId} skillCard={skillData}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
