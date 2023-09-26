import React from "react";
import bg from "../images/bg.jpg";


function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat flex flex-col w-full h-96 "
      >
       
        <div className="flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className=" lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">Hi! I'm Mide</h1>
            <p className="text-white py-4 max-w-lg ">
             A passionate Frontend React developer based in Nigeria.
            </p>
            <a
              href="https://www.linkedin.com/in/adeagbo-ayomide/"
              target="_blank"
              className="p-2 text-lg font-bold rounded-lg bg-white text-black"
            >
              Let's Connect{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
