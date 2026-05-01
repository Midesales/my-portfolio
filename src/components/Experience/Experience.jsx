import React from "react";
import { FaPython, FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
import HngImg from "../../assets/hng.jpg";
import DoyenImg from "../../assets/doyenify.png";
import yungImg from "../../assets/yungdoyen-text.png";

const techStack = [
  { icon: <FaReact color="#61DAFB" size={28} />, label: "React" },
  { icon: <SiTypescript color="#3178C6" size={28} />, label: "TypeScript" },
  { icon: <SiNextdotjs color="#f0ede8" size={28} />, label: "Next.js" },
  { icon: <FaJs color="#F7DF1E" size={28} />, label: "JavaScript" },
  { icon: <SiNodedotjs color="#339933" size={28} />, label: "Node.js" },
  { icon: <FaPython color="#3776AB" size={28} />, label: "Python" },
  { icon: <SiTailwindcss color="#06B6D4" size={28} />, label: "Tailwind" },
  { icon: <FaHtml5 color="#E34F26" size={28} />, label: "HTML5" },
  { icon: <FaCss3 color="#1572B6" size={28} />, label: "CSS3" },
  { icon: <SiFirebase color="#FFCA28" size={28} />, label: "Firebase" },
];

const experiences = [
  {
    logo: yungImg,
    role: "Python Tutor",
    company: "YungDoyen",
    type: "Teaching",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Taught Python programming to young learners aged 6–14 in an engaging and simplified manner.",
      "Designed beginner-friendly coding exercises and interactive lessons using real-life examples.",
    ],
  },
  {
    logo: DoyenImg,
    role: "Fullstack Developer",
    company: "Doyenify",
    type: "Fullstack",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Built dynamic user interfaces with React, Tailwind CSS, and TypeScript.",
      "Created and integrated backend endpoints used in production frontend features.",
    ],
  },
  {
    logo: DoyenImg,
    role: "Frontend Developer",
    company: "Doyenify",
    type: "Internship",
    period: "Mar 2024 – Oct 2024",
    bullets: [
      "Developed dynamic user interfaces using React, Tailwind CSS, and TypeScript.",
      "Collaborated in agile sprints, code reviews, and daily standups.",
    ],
  },
  {
    logo: HngImg,
    role: "Frontend Developer",
    company: "HNG Internship",
    type: "Programme",
    period: "Sept 2023 – Oct 2023",
    bullets: [
      "Developed and optimized UIs using Next.js, TypeScript, React.js, and Tailwind CSS.",
      "Gained hands-on experience in real-world frontend development projects.",
    ],
  },
];

const typeColors = {
  Teaching: { bg: "rgba(147,197,253,0.08)", border: "rgba(147,197,253,0.25)", text: "#93C5FD" },
  Fullstack: { bg: "rgba(200,245,90,0.08)", border: "rgba(200,245,90,0.25)", text: "#c8f55a" },
  Internship: { bg: "rgba(196,181,253,0.08)", border: "rgba(196,181,253,0.25)", text: "#C4B5FD" },
  Programme: { bg: "rgba(252,165,165,0.08)", border: "rgba(252,165,165,0.25)", text: "#FCA5A5" },
};

const Experience = () => {
  return (
    <section
      id="Experience"
      style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "64px" }}>
        <span className="section-label">My Journey</span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f0ede8",
            marginTop: "12px",
            lineHeight: 1.1,
          }}
        >
          Experience &{" "}
          <span className="display-heading" style={{ color: "#c8f55a" }}>
            Tech Stack
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Tech Stack Grid */}
        <div style={{ width: "100%", maxWidth: "260px", flexShrink: 0 }}>
          <div
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.35)",
              marginBottom: "20px",
            }}
          >
            Technologies
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
            }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="skill-badge"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  padding: "18px 12px",
                }}
              >
                {tech.icon}
                <span
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.7rem",
                    color: "rgba(240,237,232,0.5)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
          {experiences.map((exp, i) => {
            const color = typeColors[exp.type] || typeColors.Internship;
            return (
              <div
                key={i}
                className="timeline-item"
                style={{ marginBottom: i < experiences.length - 1 ? "40px" : "0" }}
              >
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,245,90,0.2)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{
                        width: "36px",
                        height: "36px",
                        objectFit: "contain",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.05)",
                        padding: "4px",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "'Fraunces', serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "#f0ede8",
                          }}
                        >
                          {exp.role}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "0.68rem",
                            color: color.text,
                            background: color.bg,
                            border: `1px solid ${color.border}`,
                            borderRadius: "100px",
                            padding: "2px 10px",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "2px" }}>
                        <span
                          style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "0.8rem",
                            color: "rgba(240,237,232,0.5)",
                          }}
                        >
                          {exp.company}
                        </span>
                        <span style={{ color: "rgba(240,237,232,0.2)", fontSize: "0.7rem" }}>•</span>
                        <span
                          style={{
                            fontFamily: "'Lora', serif",
                            fontSize: "0.72rem",
                            color: "rgba(240,237,232,0.35)",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "0.88rem",
                          color: "rgba(240,237,232,0.55)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#c8f55a", flexShrink: 0, marginTop: "3px" }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;