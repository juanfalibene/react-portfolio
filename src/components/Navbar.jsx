import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <nav className="navbar" id="navbar">
        <li className="nav-item menu-trigger" onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </li>
        <ul
          className={`navbar-items-container ${
            isOpen ? "is-open" : "is-close"
          }`}
        >
          <li className="nav-item" onClick={toggleMenu}>
            <a href="#projects" alt="Projects">
              Projects
            </a>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <a href="#profile" alt="Profile">
              Profile
            </a>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <a href="#works" alt="Works">
              Works
            </a>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <a href="#contact" alt="Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
