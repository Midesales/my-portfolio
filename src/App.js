import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import Navbar from "./components/Navbar";



function App() {
  return (
    <section className="bg-black w-full flex flex-col justify-center items-center px-10">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
