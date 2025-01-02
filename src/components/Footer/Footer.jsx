import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="Footer" className="bg-[#465697]">
      <div className="flex flex-col gap-3 md:flex-row justify-around text-white p-10 md:p-12 items-center">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel Free To reach out!
          </h3>
        </div>

        <ul className="text-sm md:text-xl flex gap-4">
          <li className="flex gap-1 items-center">
            <a
              href="mailto:vayomide2@gmail.com"
              target=""
              rel="noreferrer"
              className="hover:opacity-85 duration-300 hover:scale-105"
            >
              <MdOutlineEmail size={50} />
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <a
              href="https://www.linkedin.com/in/adeagbo-ayomide/"
              target=""
              rel="noreferrer"
              className="hover:opacity-85 duration-300 hover:scale-105"
            >
              <CiLinkedin size={50} />
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <a
              href="https://github.com/Midesales"
              target=""
              rel="noreferrer"
              className="hover:opacity-85 duration-300 hover:scale-105"
            >
              <FaGithub size={50} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white p-6 averia-libre-light text-center ">
        <p>&copy; Mide {currentYear} </p>
      </div>
    </div>
  );
};

export default Footer;
