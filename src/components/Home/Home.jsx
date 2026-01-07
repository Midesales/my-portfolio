import React from "react";
import ayo from "../../assets/off_pics.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {


  const navigateToFooter = () => {
    const footer = document.getElementById('Footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="w-full md:w-2/4 md:pt-10">
        <h1 className="text-lg md:text-4xl font-bold flex leading-normal tracking-tighter items-center">
          <span>Hi, I'm&nbsp;</span>
          <Typewriter
            words={[
              " Ayomide Adeagbo",
              " a Frontend Developer",
              " a Freelancer",
              "a Web developer",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight pt-12" style={{ textAlign: "justify" }}>
          I am a graduate of Computer Science and Engineering department at Obafemi
          Awolowo University, driven by a profound passion for creating
          impactful solutions in the world of technology. My proficiency in
          React and Tailwind CSS allows me to specialize in crafting
          user-friendly and visually appealing web applications.
        </p>
        <button onClick={navigateToFooter} className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="w-full md:w-2/4 md:pt-10 flex justify-center mt-10 md:mt-0">
        <img
          src={ayo}
          alt="Ayomide Adeagbo"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
