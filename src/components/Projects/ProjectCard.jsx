import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, imageUrl, projectUrl, main, demoUrl }) => {


  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] h-[30rem] shadow-xl shadow-slate-900 rounded-2xl">
      <div>
         <img className="p-4" src={imageUrl} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-justify">{main}</p>
      </div>
     
      <div className=" py-6 md:p-4 flex align-bottom gap-2 md:gap-4">
        <a href={projectUrl} target="" rel="noreferrer" className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <FaGithub size={20} />
        </a>
        <a href={demoUrl} target="" className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <FaEye size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
