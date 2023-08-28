import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <ul className="navbar-items-container">
          <li className="nav-item">
            <a href="#projects" alt="Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#profile" alt="Profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#works" alt="Works">
              Works
            </a>
          </li>
          {/*<li className="nav-item">
            <a href="./resume/index.html" alt="Resume">
              Resume
            </a>
  </li>*/}
          <li className="nav-item">
            <a href="#contact" alt="Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
