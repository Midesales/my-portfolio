import React from "react";
import twitter from '../images/instagram.png'
import github from '../images/github.png'

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Mide</h1>
          <div className="flex gap-4 cursor-pointer items-center">
            <a href="https://twitter.com/ayoade_mide" target="_blank">
              <img
                src={twitter}
                className="border-[1px] bg-white border-white p-2 rounded-[100%]"
              />
            </a>

            <a href="https://github.com/Midesales" target="_blank">
              <img
                src={github}
                className="border-[1px] w-10 h-10 border-white p-2 rounded-full bg-white hover:text-black"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
