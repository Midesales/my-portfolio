import React from "react";
import leaf1 from "../images/Leaf1.png";
import leaf2 from "../images/leaf2.png";
import { motion } from "framer-motion";
import { SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="text-white averia-libre-light flex flex-col items-center justify-center gap-4"
    >
      <div className="flex items-center justify-center w-full py-14">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52 gap-4"
        >
          <img
            src={leaf1}
            alt="first-leaf"
            className="w-6 h-auto object-contain"
          />
          <p className="text-orange-400 text-xl">Skills</p>
          <img
            src={leaf2}
            alt="second-leaf"
            className="w-6 h-auto object-contain"
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 w-full">
        <div className="flex flex-col w-full  gap-4 items-start justify-start">
          <p className="text-orange-400">My Skills and work experience</p>
          <p className="tracking-wide text-justify text-base max-w-md">
          I specialize in crafting dynamic and responsive web applications using cutting-edge technologies. Proficient in React and TypeScript, I bring ideas to life with clean and efficient code. My styling expertise extends to Tailwind CSS, ensuring visually stunning interfaces. Fluent in HTML, I prioritize semantic and accessible web development.
          </p>
          <p className="tracking-wide text-justify text-base max-w-md">
          As a former intern at HNG and currently with Doyenify, I've gained valuable industry experience. My journey involves collaborative development, Git version control, and a commitment to innovation. Excited about the intersection of creativity and functionality, I continually push technological boundaries to make a positive impact through software solutions.
          </p>
        </div>

        <div className="w-full flex justify-center items-center px-8">
          <div className="py-3 px-4 w-full group grid grid-cols-2  relative gap-8 ">
            <div className="flex flex-col justify-center items-center gap-2 ">
              <SiHtml5 size={70} color="yellow" />
              <p>HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <FaReact size={70} color="deeppink" />
              <p>React</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <SiTailwindcss size={70} color="blue" />
              <p>Tailwindcss</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <SiTypescript size={70} color="lightblue" />
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
