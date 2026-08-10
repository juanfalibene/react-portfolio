import React, { useState, useEffect } from "react";
import { setTheme } from "../theme";

const Toggle = () => {
  const [togClass, setTogClass] = useState(
    localStorage.getItem("theme") === "theme-light" ? "light" : "dark"
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTogClass(currentTheme === "theme-light" ? "light" : "dark");
  }, []);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-dark");
      setTogClass("dark");
    } else {
      setTheme("theme-light");
      setTogClass("light");
    }
  };

  return (
    <li className='nav-item-mode' id='toggle'>
      <button onClick={handleOnClick} aria-label='Toggle theme'>
        {togClass === "light" ? (
          <img src='/img/dark_mode.svg' alt='dark-mode-toggle' />
        ) : (
          <img src='/img/light-mode.svg' alt='light-mode-toggle' />
        )}
      </button>
    </li>
  );
};

export default Toggle;
