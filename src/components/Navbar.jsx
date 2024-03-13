import React, { useState } from "react";
import { FaHouse, FaUser, FaDiagramProject, FaEnvelope, FaRenren } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="fixed bottom-0 right-0  flex w-full lg:top-0 h-auto lg:h-screen lg:w-32 justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
      <div className="px-4 py-3 transparent lg:py-12 rounded-full border flex flex-row lg:flex-col items-center justify-center gap-12 duration-200 backdrop-blur-md">
        <a href="#" data-text = "Home" className="tooltip text-orange-400" ><FaHouse /></a>
        <a href="#about" data-text = "About" className="tooltip  text-orange-400"><FaUser /></a>
        <a href="#skills" data-text = "Skills"  className="tooltip text-orange-400"><FaRenren /></a>
        <a href="#projects" data-text = "Projects" className="tooltip text-orange-400"><FaDiagramProject /></a>
        <a href="#contact" data-text = "Contact" className="tooltip text-orange-400"><FaEnvelope /></a>
        
      </div>
    </div>
  );
}

export default Navbar;
