import React, { useState } from "react";



function Navbar() {
   const [toggleon, setToggleOn] = useState(false);
  return (
    <div>
      {/* SMALL SCREENS */}
      <div className="absolute text-white m-5 lg:hidden md:hidden">
        <button className="cursor-pointer" onClick={() => setToggleOn(true)}>
          <div className="w-6 h-[2px] bg-white mb-2"></div>
          <div className="w-6 h-[2px] bg-white mb-2"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </button>
      </div>

      <div className={toggleon === false ? "hidden" : ""}>
        <div className="absolute z-50 bg-white w-40 h-screen flex-col border-r border-gray-200 pt-2 pb-4 ">
          <div className="flex justify-end px-4 text-2xl text-white w-full">
            <div
              onClick={() => setToggleOn(false)}
              className="justify-end cursor-pointer text-black hover:text-slate-400"
            >
              {" "}
              x{" "}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 font-bold">
            <a href="/#about" className="hover:text-slate-400">
              About Me
            </a>
            <a href="/#skills" className="hover:text-slate-400">
              Skills
            </a>
            <a href="/#projects" className="hover:text-slate-400">
              Projects
            </a>
            <a href="/#contact" className="hover:text-slate-400">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1sb5PIJVg8WPhHQI_XXW24mOfpC7cFyBo/view?usp=sharing"
              target="_blank"
              className="hover:text-slate-400"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* //LARGE SCREENS */}

      <div className="text-white p-8 hidden justify-end items-center font-bold md:flex lg:flex">
        <div className="flex  gap-4">
          <a href="/#about" className="hover:text-slate-400">
            About Me
          </a>
          <a href="/#skills" className="hover:text-slate-400">
            Skills
          </a>
          <a href="/#projects" className="hover:text-slate-400">
            Projects
          </a>
          <a href="/#contact" className="hover:text-slate-400">
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1sb5PIJVg8WPhHQI_XXW24mOfpC7cFyBo/view?usp=sharing"
            target="_blank"
            className="hover:text-slate-400"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
