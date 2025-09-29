import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>
        <a href="#" className="logo">Yogiraj Nimbalkar <span style={{ fontSize: "45px" }}>🎓</span></a>
      </h1>

      {/* Hamburger Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
