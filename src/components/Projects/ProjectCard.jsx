import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const ProjectCard = ({ title, imageUrl, projectUrl, main, demoUrl, tags = [] }) => {
  return (
    <div
      className="project-card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "visible",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
          aspectRatio: "16/9",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Overlay gradient — pointer-events none so it never blocks clicks */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,13,20,0.7) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#f0ede8",
            marginBottom: "10px",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "0.8rem",
            color: "rgba(240,237,232,0.5)",
            lineHeight: 1.7,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {main}
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            marginBottom: "20px",
          }}
        />

        {/* Actions */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Lora', serif",
              fontSize: "0.75rem",
              color: "rgba(240,237,232,0.5)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              letterSpacing: "0.04em",
              cursor: "pointer",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ede8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.5)")}
          >
            <FaGithub size={15} />
            Code
          </a>

          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              fontSize: "0.78rem",
              textDecoration: "none",
              marginLeft: "auto",
              cursor: "pointer",
              position: "relative",
              zIndex: 1,
            }}
          >
            Live Demo
            <HiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;