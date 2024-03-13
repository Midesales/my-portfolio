
import React from "react";
import ProjectCard from "./ProjectCard"; 
import Project1 from '../images/project1.png'
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import leaf1 from "../images/Leaf1.png";
import leaf2 from "../images/leaf2.png";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Cresthive School Dashboard",
    imageUrl: Project1, // Add your project's image URL
    projectUrl: "https://github.com/Midesales/Cresthive-student-frontend", // Add the project's URL
  },
  {
    title: "Movie box",
    imageUrl: Project2, // Add your project's image URL
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-two", // Add the project's URL
  },
  {
    title: "Image Drop Gallery",
    imageUrl: Project3, // Add your project's image URL
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-three", // Add the project's URL
  },
 
];

const Portfolio = () => {
  return (
    <section id="projects" className="text-white averia-libre-light flex flex-col items-center justify-center my-10 gap-4">
   
      <div className="flex items-center justify-center w-full py-14">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center w-52 gap-4"
          >
            <img src={leaf1} alt="first-leaf" className="w-6 h-auto object-contain" />
            <p className="text-orange-400 text-xl">Projects</p>
            <img src={leaf2} alt="second-leaf" className="w-6 h-auto object-contain" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-14">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    
    </section>
  );
};

export default Portfolio;
