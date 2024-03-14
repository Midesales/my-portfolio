import React from "react";
import leaf1 from "../images/Leaf1.png";
import leaf2 from "../images/leaf2.png";
import Pics from "../images/IMG_3652.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="text-white averia-libre-light flex flex-col items-center justify-center gap-12"
    >
      
        <div className="flex items-center justify-center w-full py-14">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center w-52 gap-4"
          >
            <img src={leaf1} alt="first-leaf" className="w-6 h-auto object-contain" />
            <p className="text-orange-400 text-xl">About</p>
            <img src={leaf2} alt="second-leaf" className="w-6 h-auto object-contain" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-6  ">
          <div className="flex items-center justify-center w-72">
          <img src={Pics} alt="ayo" className="w-full rounded-md object-fill h-auto" />
          </div>
          
          <div className="flex flex-col w-full gap-4 items-start justify-start">
            <p className="tracking-wide text-justify text-base max-w-md">
              With over a year of hands-on experience and a valuable internship
              at HNG Company, I have honed my skills in collaborative
              development, leveraging Git and GitHub for efficient version
              control. My journey is characterized by a commitment to
              innovation, problem-solving, and a relentless pursuit of
              continuous learning.
            </p>
            <p className="tracking-wide text-justify text-base max-w-md">
              As I navigate the ever-evolving field of software development, my
              goal is to contribute meaningfully to the industry by bringing
              fresh perspectives and embracing the challenges that come with
              pushing technological boundaries. I am excited about the
              intersection of creativity and functionality, where my technical
              expertise aligns with my passion for creating software solutions
              that make a positive impact.
            </p>
          </div>
        </div>
      
    </section>
  );
}

export default About;
