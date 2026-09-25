import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Title from "../layouts/Title";
import { educationHistoryData } from "../../data/educationData";

const EducationHistory = () => {
  return (
    <section
      id="education"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Academic Background" des="Education History" />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {educationHistoryData.map((item) => (
          <div key={item.id} className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <div className="h-72 md:h-32 lgl:h-72 w-full md:w-32 lgl:w-full rounded-lg bg-black bg-opacity-30 flex justify-center items-center">
                  <FaGraduationCap className="text-6xl md:text-4xl lgl:text-6xl text-designColor" />
                </div>
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-bold">{item.period}</h3>
                  <p className="text-base tracking-wide text-gray-500 mt-2 break-words leading-snug">
                    {item.university}
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full">
                <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-6 lgl:gap-8">
                  <div className="flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        {item.degree}
                      </h3>
                      <p className="text-base text-gray-400 mt-3 break-words leading-snug">
                        {item.university} · {item.period}
                      </p>
                    </div>
                    <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg text-sm font-medium w-fit uppercase">
                      {item.result}
                    </p>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationHistory;
