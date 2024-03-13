import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, imageUrl, projectUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="overflow-hidden cursor-pointer rounded-md relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-contain rounded-lg"
        src={imageUrl}
      />
      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-xl text-orange-400">{title}</p>
          <a
            href={projectUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} color="black" />
          </a>
          </div>
          
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
