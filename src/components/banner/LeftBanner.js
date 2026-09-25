import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "a Senior Software Engineer.",
        "an AI/ML Engineer.",
        "a Full-Stack Engineer.",
        "a Cloud Solutions Architect.",
        "an Agentic AI & RAG Specialist.",
        "a Backend & API Architect.",
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl lgl:text-6xl font-bold text-white leading-tight">
          <span className="text-[#10B981] capitalize whitespace-nowrap">
            Danylo Lykhach
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lgl:text-4xl font-bold text-[#FBBF24] leading-snug min-h-[3.5rem] sm:min-h-[4rem] lgl:min-h-[4.5rem]">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FDE68A"
          />
        </h2>
        <div className="flex flex-col gap-4 max-w-full text-base font-bodyFont text-lightText leading-7 tracking-wide">
          <p>
            I’m a Senior Software Engineer and AI/ML Engineer with 10+ years of experience designing and delivering scalable web, mobile, cloud, and AI-powered applications. I combine a strong full-stack engineering foundation with deep expertise in Generative AI, Retrieval-Augmented Generation, agentic workflows, LLM applications, vector search, contextual memory, and enterprise knowledge retrieval.
          </p>
          <p>
            Throughout my career, I have built production-ready backend services, REST APIs, microservices, data pipelines, and responsive applications using Python, Node.js, NestJS, React, C#/.NET, Django, PostgreSQL, AWS, and Microsoft Azure. I’m comfortable owning the complete engineering lifecycle—from architecture and product development to AI integration, deployment, observability, performance optimization, and production reliability. My goal is to transform complex technical and business requirements into secure, maintainable solutions that create measurable value.
          </p>
        </div>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner