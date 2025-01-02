import React from "react";
import ProjectCard from "./ProjectCard";
import Project1 from '../../assets/project1.png';
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";


const projects = [
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
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="flex flex-col md:flex-row  justify-center items-center">
      <div className="text-white averia-libre-light flex flex-col md:flex-row items-center justify-center my-10 gap-4">
      {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
      </div>
      
    </div>
  );
};

export default Projects;
