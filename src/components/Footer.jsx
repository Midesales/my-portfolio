import React from "react";


function Footer() {
  const currentYear = new Date().getFullYear();


  
  return (
    <>
      <div className="text-white p-6 averia-libre-light ">
        <p>&copy; Mide {currentYear} </p>
      </div>
    </>
  );
}

export default Footer;
