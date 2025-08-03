import React from "react";
import ProjectCard from "./ProjectCard";
import Project6 from '../../assets/cvbuilder.png';
import Project1 from '../../assets/project1.png';
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project5 from "../../assets/project5.png";

const projects = [
  {
    title: "AI CV Builder",
    imageUrl: Project6,
    projectUrl: "https://github.com/Midesales/CV-Builder",
    demoUrl: "https://aircvbuilder.netlify.app/",
    main: "An AI-powered CV builder and interview prep platform built with React, TypeScript, and Node.js. It uses Firebase for authentication and data storage. The system integrates a Large Language Model (LLM) for generating resumes and offering personalized interview tips to users."
  },

  {
    title: "Doyenify Academy",
    imageUrl: Project5,
    projectUrl: "https://github.com/doyenify",
    demoUrl: "https://academy.doyenify.com/",
    main: "A tech learning platform built with React, TypeScript, and Node.js. Firebase handles database and authentication. It includes integrated payment systems using Stripe and Paystack to support seamless course registration for new learners."
  },

  {
    title: "Movie Box",
    imageUrl: Project2,
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-two",
    demoUrl: "https://zuri-frontend-stage-two.vercel.app/",
    main: "A movie search app built with React and JavaScript. Users can browse, search, and view detailed info about movies. The platform also allows users to save favorites for later viewing in a clean, user-friendly interface."
  },

  {
    title: "Image Drop Gallery",
    imageUrl: Project3,
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-three",
    demoUrl: "https://hngx-stage-three-gray.vercel.app/",
    main: "A Firebase-authenticated image gallery built with React and JavaScript. Users can drag and drop images to organize them easily after logging in. It offers a minimal and intuitive interface focused on interactivity and simplicity."
  }

];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="pt-10 flex justify-center items-center mx-auto gap-4">
        <div className="text-white averia-libre-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center mx-auto  gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
