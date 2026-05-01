import React from "react";
import ProjectCard from "./ProjectCard";
import Project6 from '../../assets/cvbuilder.png';
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project5 from "../../assets/project5.png";

const projects = [
  {
    title: "AI CV Builder",
    imageUrl: Project6,
    projectUrl: "https://github.com/Midesales/CV-Builder",
    demoUrl: "https://aircvbuilder.netlify.app/",
    main: "An AI-powered CV builder and interview prep platform built with React, TypeScript, and Node.js. Uses Firebase for auth and integrates an LLM for resume generation and interview tips.",
  },
  {
    title: "Doyenify Academy",
    imageUrl: Project5,
    projectUrl: "https://github.com/doyenify",
    demoUrl: "https://academy.doyenify.com/",
    main: "A tech learning platform built with React, TypeScript, and Node.js. Includes Stripe and Paystack payment integration for seamless course registration.",
  },
  {
    title: "Movie Box",
    imageUrl: Project2,
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-two",
    demoUrl: "https://zuri-frontend-stage-two.vercel.app/",
    main: "A movie search app built with React and JavaScript. Users can browse, search, view movie details, and save favorites in a clean, user-friendly interface.",
  },
  {
    title: "Image Drop Gallery",
    imageUrl: Project3,
    projectUrl: "https://github.com/Midesales/HNGx-frontend-stage-three",
    demoUrl: "https://hngx-stage-three-gray.vercel.app/",
    main: "A Firebase-authenticated drag-and-drop image gallery built with React. Minimal, intuitive interface focused on interactivity and simplicity.",
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "64px" }}>
        <span className="section-label">What I've Built</span>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Selected{" "}
            <span className="display-heading" style={{ color: "#c8f55a" }}>
              Projects
            </span>
          </h2>

          <a
            href="https://github.com/Midesales"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{
              padding: "10px 24px",
              fontSize: "0.8rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              flexShrink: 0,
            }}
          >
            View All on GitHub →
          </a>
        </div>

        {/* Subtle divider */}
        <div
          style={{
            marginTop: "32px",
            height: "1px",
            background: "linear-gradient(to right, rgba(200,245,90,0.3), transparent)",
          }}
        />
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;