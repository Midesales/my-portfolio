import React from "react";
import Ayo from "../images/ayo.jpg";
import Hero from "./Hero";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


function Home() {
  return (
    <section
      id=" home"
      className="p-10 md:px-40 lg:px-48 lg:pt-24 md:pt-24 w-full h-full text-white averia-libre-light-italic"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        <div className="p-2 text-left">
          <h1 className="text-lg lg:text-4xl font-bold text-pink-100">
            Hi, I'm{" "}
            <span className="text-sm lg:text-4xl tracking-wider">
              Ayomide Adeagbo
            </span>
          </h1>

          <h2 className="text-lg lg:text-xl mt-2 min-w-[280px]">
            And I am{" "}
            <Hero
              speed={100}
              words={[
                "a frontend developer..",
                "a freelancer..",
                "a website developer",
              ]} 
            />
          </h2>
          <h2 className="lg:max-w-[600px] text-left pt-2">
            I am a fourth-year Computer Science and Engineering student at
            Obafemi Awolowo University, driven by a profound passion for
            creating impactful solutions in the world of technology. My
            proficiency in React and Tailwind CSS allows me to
            specialize in crafting user-friendly and visually appealing web
            applications.
          </h2>

          <div className="flex gap-8 cursor-pointer items-center justify-start my-12">
           
              <a
                href="https://github.com/Midesales"
                target="_blank"
                className="border rounded-full p-4 border-orange-400  hover:bg-white hover:text-orange-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/ayoade_mide"
                target="_blank"
                className="border rounded-full p-4 border-orange-400  hover:bg-white hover:text-orange-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/adeagbo-ayomide/"
                target="_blank"
                className="border rounded-full p-4 border-orange-400  hover:bg-white hover:text-orange-400"
              >
                <FaLinkedinIn />
              </a>
            
          </div>
          <div className="my-12">
            <a
              href="https://drive.google.com/file/d/1mK7ThS3Ms42koNgkQkH-bRJLciIoLmDX/view?usp=sharing"
              target="_blank"
              className="py-4 px-6 text-lg shadow-md rounded-lg bg-orange-400 w-full lg:w-auto hover:bg-white hover:text-orange-400"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="">
          <img src={Ayo} alt="my-picture" className=" w-80 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;
