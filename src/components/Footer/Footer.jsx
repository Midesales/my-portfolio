import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <MdOutlineEmail size={20} />,
      href: "mailto:vayomide2@gmail.com",
      label: "Email",
    },
    {
      icon: <CiLinkedin size={20} />,
      href: "https://www.linkedin.com/in/adeagbo-ayomide/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Midesales",
      label: "GitHub",
    },
  ];

  return (
    <footer id="Footer" style={{ position: "relative", overflow: "hidden" }}>
      {/* Top accent line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(200,245,90,0.4), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,245,90,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px 40px",
        }}
      >
        {/* Main CTA area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <span className="section-label" style={{ marginBottom: "20px" }}>
            Get In Touch
          </span>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Let's build something{" "}
            <span className="display-heading" style={{ color: "#c8f55a" }}>
              great
            </span>{" "}
            together.
          </h2>

          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.88rem",
              color: "rgba(240,237,232,0.45)",
              marginBottom: "40px",
              maxWidth: "420px",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
            }}
          >
            Open to freelance, collaboration, and full-time roles. Got an idea
            or an offer? Hit me up.
          </p>

          <a
            href="mailto:vayomide2@gmail.com"
            className="btn-accent"
            style={{
              padding: "16px 40px",
              fontSize: "0.95rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Say Hello →
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            marginBottom: "40px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Logo / name */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#f0ede8",
                letterSpacing: "-0.02em",
              }}
            >
              Ayomide
            </span>
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c8f55a",
                boxShadow: "0 0 8px rgba(200,245,90,0.6)",
              }}
            />
          </div>

          {/* Copyright */}
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.72rem",
              color: "rgba(240,237,232,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            © Mide {currentYear}
          </span>

          {/* Socials */}
          <div style={{ display: "flex", gap: "8px" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(240,237,232,0.5)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,245,90,0.4)";
                  e.currentTarget.style.color = "#c8f55a";
                  e.currentTarget.style.background = "rgba(200,245,90,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(240,237,232,0.5)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;