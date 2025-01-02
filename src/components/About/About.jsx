import React from "react";
import AboutImg from "../../assets/ayo2.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold pb-4">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-96 md:mr-8" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p
                  className="text-sm md:text-md leading-tight pt-6"
                  style={{ textAlign: "justify" }}
                >
                  With over {experienceYears} years of experience, including
                  valuable internships at Zuri and Doyenify, as well as hands-on
                  learning through practical courses on Udemy, I have honed my
                  skills in collaborative development and efficient version
                  control using Git and GitHub. My journey is defined by a
                  strong commitment to innovation, problem-solving, and
                  continuous learning.
                </p>
                <p
                  className="text-sm md:text-md leading-tight"
                  style={{ textAlign: "justify" }}
                >
                  As I advance in the ever-evolving field of software
                  development, I strive to contribute meaningfully by bringing
                  fresh perspectives and embracing challenges that drive
                  technological progress. I am passionate about blending
                  creativity and functionality, leveraging my technical
                  expertise to create impactful software solutions that make a
                  positive difference.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p
                  className="text-sm md:text-md leading-tight pt-6"
                  style={{ textAlign: "justify" }}
                >
                  As a backend developer, I have hands-on experience with
                  Node.js, gained during my time at Doyenify, where I worked on
                  developing efficient and scalable server-side solutions.
                  Additionally, I am a Python developer with a passion for
                  teaching, having guided kids in learning how to code in
                  Python. This blend of professional experience and mentoring
                  has deepened my understanding of backend development while
                  fostering my ability to communicate complex concepts
                  effectively.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
