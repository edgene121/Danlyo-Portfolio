import React, { useState } from 'react'
import Title from '../layouts/Title';
import Skills from './Skills';
import Experience from "./Experience"

const Resume = () => {
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Professional Background" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2">
          <li
            onClick={() => {
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume
