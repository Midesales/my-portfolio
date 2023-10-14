import React from "react";
import img from "../images/meter1.svg";
import bg from "../images/banner-bg.png";

function Skills() {
  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className=" text-center text-white bg-[#171717]  py-24 px-10 rounded-[50px] lg:p-2">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Skills
          </h1>
          <p className="text-lg py-3">Below are my skills:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 place-content-center  bg-[#171717] my-6">
            <div className=" bg-[#171717] flex flex-col items-center">
              <img src={img} alt="" />
              <h1 className="font-bold text-2xl my-2">HTML</h1>
            </div>

            <div className=" bg-[#171717] flex flex-col items-center">
              <img src={img} alt="" />
              <h1 className="font-bold text-2xl my-2">Tailwindcss</h1>
            </div>

            <div className=" bg-[#171717] flex flex-col items-center">
              <img src={img} alt="" />
              <h1 className="font-bold text-2xl my-2">React.js</h1>
            </div>

            <div className=" bg-[#171717] flex flex-col items-center">
              <img src={img} alt="" />
              <h1 className="font-bold text-2xl my-2">Javascript</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
