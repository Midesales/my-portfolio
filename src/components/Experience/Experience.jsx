import React from "react";
import { FaPython, FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import HngImg from "../../assets/hng.jpg";
import DoyenImg from "../../assets/doyenify.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#F7DF1E" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img className="w-20"  src={DoyenImg} alt="DoyenImg" /> 
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Doyenify</h2>
              <p className="text-sm leading-tight font-thin">
                March 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Intern</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img className="w-20"  src={HngImg} alt="HNGImg" /> 
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, HNG</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Oct 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Intern</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
