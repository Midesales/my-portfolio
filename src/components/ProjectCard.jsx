
import React from "react";


const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="mb-4 rounded-md" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 my-2">{description}</p>
      <a
        href={projectUrl}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
