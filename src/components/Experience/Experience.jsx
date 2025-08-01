import React from "react";
import { FaPython, FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import HngImg from "../../assets/hng.jpg";
import DoyenImg from "../../assets/doyenify.png";
import yungImg from "../../assets/yungdoyen-text.png";

const Experience = () => {
  const currentYear = new Date().getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonth = monthNames[new Date().getMonth()];

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
            <img className="w-20" src={yungImg} alt="DoyenImg" />
            <span className="text-white">
              <h2 className="leading-tight">Python Tutor, YungDoyen</h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2024 - {currentMonth} {currentYear}
              </p>
              <ul className="text-sm p-2">
                <li>- Taught Python programming to young learners aged 6 - 14 in an engaging and simplified manner.</li>
                <li>- Designed beginner-friendly coding exercises and interactive lessons using real-life examples.</li>
            </ul>
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img className="w-20" src={DoyenImg} alt="DoyenImg" />
          <span className="text-white">
            <h2 className="leading-tight">Frontend Developer, Doyenify</h2>
            <p className="text-sm leading-tight font-thin">
              April 2024 - June 2025
            </p>
            <ul className="text-sm p-2">
              <li>- Built dynamic user interfaces with React, Tailwind CSS, and TypeScript.</li>
              <li>- Participated in code reviews, agile sprints, and daily standups as a frontend intern.</li>

            </ul>
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <img className="w-20" src={HngImg} alt="HNGImg" />
          <span className="text-white">
            <h2 className="leading-tight">Frontend Deveoper, HNG</h2>
            <p className="text-sm leading-tight font-thin">
              Sept 2023 - Oct 2023
            </p>
            <ul className="text-sm p-2">
              <li>- Designed and implemented features to enhance user experience on key products.</li>
              <li>- Gained hands-on experience in real-world frontend development projects.</li>

            </ul>
          </span>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Experience;
