import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Portfolio from "../components/portfolio";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
