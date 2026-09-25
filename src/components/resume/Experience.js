import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - PRESENT</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Software Engineer"
            subTitle="Ingenix.ai — March 2024 - Present"
            result="POLAND"
            des="Leading the architecture and development of production AI applications, RAG systems, agentic workflows, scalable backend services, and machine-learning pipelines using Python, Node.js, NestJS, LangChain, and LangGraph."
          />
          <ResumeCard
            title="Founding Engineer"
            subTitle="Innovatech Systems Technology — January 2021 - December 2023"
            result="NETHERLANDS"
            des="Led the end-to-end development of scalable web, mobile, and AI-powered products, including backend APIs, React applications, cross-platform mobile solutions, LLM features, intelligent search, and automated business workflows."
          />
          <ResumeCard
            title="Full Stack Engineer"
            subTitle="Addepto — January 2018 - November 2020"
            result="POLAND"
            des="Developed enterprise full-stack applications, REST APIs, backend services, data-processing workflows, and machine-learning integrations using C#/.NET, ASP.NET, AngularJS, Python, Django, PyTorch, and Amazon Redshift."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="TechNova — January 2016 - December 2017"
            result="GERMANY"
            des="Built business and customer-facing web applications with Python, Django, JavaScript, PostgreSQL, and MySQL, including APIs, authentication, role-based access, reporting, testing, and production support."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Alltegrio — January 2015 - March 2016"
            result="POLAND"
            des="Developed responsive React and Next.js applications, Node.js and Python backend services, REST and GraphQL APIs, databases, microservices, background jobs, authentication systems, and third-party SaaS integrations."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
