import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("intro");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={isOpen ? "header-open" : "header-close"}>
        <h1 className='logo'>
          <button
            className='logo-btn'
            onClick={handleLogoClick}
            aria-label='Juan Falibene — Go to home'
          >
            Juan Falibene
          </button>
        </h1>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
