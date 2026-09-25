import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Enterprise RAG Knowledge Assistant"
          des="Designed a production-ready knowledge assistant that retrieves and reasons over structured and unstructured business data. The solution combines large language models, embeddings, vector search, document processing, contextual retrieval, and secure backend APIs to deliver accurate, context-aware responses."
          src={projectOne}
        />
        <ProjectsCard
          title="Agentic AI Workflow Platform"
          des="Built an agentic AI platform using LangChain and LangGraph to coordinate multi-step reasoning, tool calling, state management, contextual memory, and human-in-the-loop approvals. The architecture connects specialized agents with external APIs, business tools, and internal services."
          src={projectTwo}
        />
        <ProjectsCard
          title="AI Document Intelligence Pipeline"
          des="Developed an AI-powered document-processing pipeline for extracting, organizing, summarizing, and retrieving information from enterprise content. The system uses LLM orchestration, prompt pipelines, embeddings, and vector retrieval to transform unstructured documents into useful business knowledge."
          src={projectThree}
        />
        <ProjectsCard
          title="Cloud-Native Backend Platform"
          des="Architected scalable backend services and microservices using Python, Node.js, and NestJS. The platform supports authentication, business workflows, third-party integrations, high-volume application workloads, monitoring, performance optimization, and reliable production deployment."
          src={projectFour}
        />
        <ProjectsCard
          title="Full-Stack Web and Mobile Platform"
          des="Led the end-to-end development of responsive web and cross-platform mobile applications using React, React Native, Flutter, TypeScript, and modern API architectures. Built reusable services and modular components to support rapid product development across web and mobile experiences."
          src={projectFive}
        />
        <ProjectsCard
          title="Machine Learning and Data Pipeline"
          des="Created production-oriented machine-learning and data pipelines for data preparation, model integration, inference, evaluation, analytics, and reporting. Integrated Python and PyTorch model outputs with backend services and application APIs while supporting performance and reliability requirements."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects
