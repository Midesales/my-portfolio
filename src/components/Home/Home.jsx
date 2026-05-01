import React, { useEffect, useRef } from "react";
import ayo from "../../assets/off_pics.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const heroRef = useRef(null);

  const navigateToFooter = () => {
    document.getElementById("Footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,245,90,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,120,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-20">
        {/* Left: Text */}
        <div style={{ flex: 1 }}>
          {/* Overline */}
          <div
            className="animate-fadeUp opacity-0"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "#c8f55a",
              }}
            />
            <span className="section-label">Frontend · Fullstack · Creator</span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-fadeUp opacity-0 delay-100"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 8px",
              color: "#f0ede8",
            }}
          >
            Ayomide
          </h1>
          <h1
            className="animate-fadeUp opacity-0 delay-200 display-heading"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.05,
              margin: "0 0 28px",
              color: "#c8f55a",
            }}
          >
            Adeagbo
          </h1>

          {/* Typewriter subtitle */}
          <div
            className="animate-fadeUp opacity-0 delay-300"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              color: "rgba(240,237,232,0.5)",
              marginBottom: "32px",
              letterSpacing: "0.04em",
              minHeight: "24px",
            }}
          >
            &gt;{" "}
            <Typewriter
              words={[
                "Frontend Developer",
                "React Specialist",
                "Fullstack Engineer",
                "Python Educator",
                "Web Craftsman",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={65}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </div>

          {/* Bio */}
          <p
            className="animate-fadeUp opacity-0 delay-400"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "rgba(240,237,232,0.6)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "44px",
            }}
          >
            Computer Science graduate from Obafemi Awolowo University. I build
            fast, beautiful, user-centric web apps — from pixel-perfect UIs to
            scalable backend systems.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp opacity-0 delay-500"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <button
              onClick={navigateToFooter}
              className="btn-accent"
              style={{ padding: "14px 32px", fontSize: "0.9rem" }}
            >
              Let's Work Together
            </button>
            <a
              href="#Projects"
              className="btn-ghost"
              style={{
                padding: "14px 32px",
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Projects →
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fadeUp opacity-0 delay-600"
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "60px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "3+", label: "Years Experience" },
              { num: "10+", label: "Projects Shipped" },
              { num: "2", label: "Companies Worked" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontStyle: "italic",
                    fontSize: "2.2rem",
                    color: "#c8f55a",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "0.72rem",
                    color: "rgba(240,237,232,0.4)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className="animate-fadeIn opacity-0 delay-300"
          style={{ flexShrink: 0, position: "relative" }}
        >
          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "50%",
              border: "1px solid rgba(200,245,90,0.2)",
              animation: "glowPulse 4s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-28px",
              borderRadius: "50%",
              border: "1px dashed rgba(200,245,90,0.08)",
            }}
          />

          <img
            src={ayo}
            alt="Ayomide Adeagbo"
            style={{
              width: "clamp(200px, 25vw, 300px)",
              height: "clamp(200px, 25vw, 300px)",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid rgba(200,245,90,0.3)",
              display: "block",
            }}
          />

          {/* Status badge */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "-8px",
              background: "rgba(19,19,26,0.95)",
              border: "1px solid rgba(200,245,90,0.3)",
              borderRadius: "100px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#c8f55a",
                boxShadow: "0 0 8px rgba(200,245,90,0.7)",
                animation: "glowPulse 2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.7rem",
                color: "#c8f55a",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Open to work
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fadeIn opacity-0 delay-700"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "40px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, rgba(200,245,90,0.4))",
          }}
        />
        <span
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "0.65rem",
            color: "rgba(240,237,232,0.3)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            writingMode: "horizontal-tb",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Home;