import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="AI engineering, cloud architecture, and software collaboration"
      />
      <div className="flex flex-col gap-3">
        <span className="w-16 h-[3px] rounded-full bg-[#10B981]"></span>
        <h3 className="text-3xl font-bold text-white">Danylo Lykhach</h3>
        <p className="text-lg font-normal text-[#10B981]">
          Senior AI Full-Stack Engineer
        </p>
        <p className="text-base text-lightText tracking-wide leading-7">
          I’m a Senior AI Full-Stack Engineer with 10+ years of experience building scalable web, mobile, cloud, and AI-powered applications. My expertise includes backend architecture, distributed systems, LLM applications, RAG pipelines, agentic workflows, document intelligence, and production machine-learning systems. I design secure, reliable solutions using Python, Node.js, Java, React, AWS, and Microsoft Azure.
        </p>
        <p className="text-base text-gray-400 flex flex-wrap items-center gap-2">
          Email:{" "}
          <a
            href="mailto:[DANYLO_EMAIL]"
            className="text-lightText hover:text-[#FBBF24] focus-visible:text-[#FBBF24] focus-visible:outline-none underline-offset-4 hover:underline duration-300"
          >
            [DANYLO_EMAIL]
          </a>
        </p>
        <p className="text-base text-gray-400 flex flex-wrap items-center gap-2">
          Phone:{" "}
          <a
            href="tel:[DANYLO_PHONE]"
            className="text-lightText hover:text-[#FBBF24] focus-visible:text-[#FBBF24] focus-visible:outline-none underline-offset-4 hover:underline duration-300"
          >
            [DANYLO_PHONE]
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft
