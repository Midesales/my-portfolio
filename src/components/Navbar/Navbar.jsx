import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Footer", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        padding: scrolled ? "14px 40px" : "24px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 800,
              fontSize: "1.1rem",
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
              boxShadow: "0 0 10px rgba(200,245,90,0.6)",
              marginBottom: "1px",
            }}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  color: "rgba(240,237,232,0.6)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c8f55a")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(240,237,232,0.6)")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#Footer"
              className="btn-accent"
              style={{ padding: "8px 22px", fontSize: "0.8rem", textDecoration: "none" }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
          style={{ background: "none", border: "none", color: "#f0ede8", cursor: "pointer" }}
        >
          {showMenu ? <RiMenu2Line size={24} /> : <RiCloseLine size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div
          style={{
            background: "rgba(19,19,26,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "24px 40px",
          }}
        >
          <ul className="flex flex-col gap-5 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => { openMenu(false); setShowmenu(true); }}
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#f0ede8",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;