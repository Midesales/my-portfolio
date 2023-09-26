
import React from "react";
import ProjectCard from "./ProjectCard"; 
import Project1 from '../images/project1.png'
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";

const projects = [
  {
    title: "Project 1",
    description: "Student dashboard for cresthive school",
    imageUrl: Project1, // Add your project's image URL
    projectUrl: "https://cresthive-student-frontend.vercel.app/", // Add the project's URL
  },
  {
    title: "Project 2",
    description:
      "A movie discovery app that allows users to search movies, view details about them and also add them to favourite",
    imageUrl: Project2, // Add your project's image URL
    projectUrl: "https://zuri-frontend-stage-two.vercel.app/", // Add the project's URL
  },
  {
    title: "Project 3",
    description:
      "An image gallery that allows users to view images and search images, authenticated users can drap and drop and arrange images in the gallery",
    imageUrl: Project3, // Add your project's image URL
    projectUrl: "https://hngx-stage-three-gray.vercel.app/", // Add the project's URL
  },
 
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-24 px-10 grid place-content-center">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-center">My Projects</h1>
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
