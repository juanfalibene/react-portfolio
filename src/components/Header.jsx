import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <header className={isOpen ? "header-open" : "header-close"}>
        <h1 className='logo'>Juan Falibene</h1>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </>
  );
}
