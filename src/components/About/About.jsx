import React from "react";
import AboutImg from "../../assets/ayo2.jpeg";

const About = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const skills = [
    "React", "TypeScript", "Next.js",
    "Node.js", "Python", "Tailwind CSS",
    "Firebase", "Git", "REST APIs",
  ];

  return (
    <section
      id="About"
      style={{
        padding: "120px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "64px" }}>
        <span className="section-label">Who I Am</span>
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
          Crafting the web,{" "}
          <span className="display-heading" style={{ color: "#c8f55a" }}>
            one component
          </span>{" "}
          at a time.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={AboutImg}
              alt="Ayomide"
              style={{
                width: "clamp(240px, 28vw, 340px)",
                height: "clamp(300px, 36vw, 440px)",
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
              }}
            />
            {/* Corner accent */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "60px",
                height: "60px",
                border: "2px solid #c8f55a",
                borderRadius: "12px",
                zIndex: -1,
              }}
            />
            {/* Experience badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "-20px",
                background: "#c8f55a",
                color: "#0a0a0f",
                borderRadius: "14px",
                padding: "12px 18px",
                fontFamily: "'Fraunces', serif",
                fontWeight: 800,
              }}
            >
              <div style={{ fontSize: "1.6rem", lineHeight: 1 }}>{experienceYears}+</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.08em", opacity: 0.7 }}>
                YRS EXP
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(240,237,232,0.65)",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            I'm a Frontend-first, Fullstack-capable developer with a Computer Science &
            Engineering degree from Obafemi Awolowo University. Over {experienceYears}+ years,
            I've built production-grade applications at Doyenify, shipped projects during HNG,
            and taught Python to kids aged 6–14.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(240,237,232,0.65)",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}
          >
            My superpower: turning complex designs into clean, performant React code.
            I care deeply about user experience, accessible interfaces, and shipping things
            that actually work — not just look good in Figma.
          </p>

          {/* Skills */}
          <div>
            <span
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(240,237,232,0.35)",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Core Technologies
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.8rem",
                    color: "#c8f55a",
                    background: "rgba(200,245,90,0.08)",
                    border: "1px solid rgba(200,245,90,0.2)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    letterSpacing: "0.03em",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(200,245,90,0.15)";
                    e.target.style.borderColor = "rgba(200,245,90,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(200,245,90,0.08)";
                    e.target.style.borderColor = "rgba(200,245,90,0.2)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Values row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              marginTop: "48px",
            }}
          >
            {[
              { icon: "⚡", title: "Fast Builder", desc: "Ship fast, iterate faster" },
              { icon: "🎯", title: "Detail-Driven", desc: "Pixel-perfect UI matters" },
              { icon: "🤝", title: "Team Player", desc: "Agile & collaborative" },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{ padding: "20px" }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{item.icon}</div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#f0ede8",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.75rem",
                    color: "rgba(240,237,232,0.4)",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;