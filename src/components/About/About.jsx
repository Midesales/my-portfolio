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
                  With over {experienceYears} years of experience as a frontend developer, including internships at Zuri and Doyenify, and practical training through Udemy, I’ve honed my skills in building responsive user interfaces, collaborating in teams, and using Git and GitHub effectively.

                  I’m passionate about combining creativity with functionality to build user-friendly web experiences, continuously learning, and contributing to meaningful digital solutions.
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
                 As a backend developer, I’ve gained hands-on experience with Node.js at Doyenify, building efficient and scalable server-side applications. I’m also a Python developer with a passion for teaching, having introduced kids to coding through beginner-friendly lessons. This mix of real-world development and mentoring has sharpened both my technical skills and my ability to explain complex concepts clearly.
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
