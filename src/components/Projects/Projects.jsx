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
    main: "An AI-powered CV builder and interview preparation platform designed to help fresh graduates create professional resumes effortlessly. It integrates a large language model (LLM) for smart resume generation and tailored interview tips.",
    demoUrl: "https://aircvbuilder.netlify.app/"
  },
  {
    title: "Doyenify academy",
    imageUrl: Project5, 
    projectUrl: "https://github.com/doyenify", 
    main: "This is an online learning platform for people that want to transition to tech.",
    demoUrl: "https://academy.doyenify.com/"
  },
  {
    title: "Movie box",
    imageUrl: Project2, 
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-two", 
    demoUrl: "https://zuri-frontend-stage-two.vercel.app/",
   main: "This Movie Box App allows users to view available movies, search movies, view the details of a particular movie and add them to favorites."
  },
  {
    title: "Cresthive School Dashboard",
    imageUrl: Project1,
    projectUrl: "https://github.com/Midesales/Cresthive-student-frontend", 
    main: "This is a school dashboard that allows students to view their results, register courses, and view their profile.",
    demoUrl: "https://cresthive-student-frontend.vercel.app/"
  },
  {
    title: "Image Drop Gallery",
    imageUrl: Project3, 
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-three", 
    main: "This Image Gallery App is a web application that allows users to view, search, and organize images.",
    demoUrl: "https://hngx-stage-three-gray.vercel.app/"
  },
 
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
