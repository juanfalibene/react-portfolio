import React, { useState } from "react";
import { setTheme } from "../theme";

const Toggle = () => {
  const [togClass, setTogClass] = useState(localStorage.getItem("theme"));

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };
  return (
    <li className='nav-item-mode' id='toggle'>
      <button onClick={handleOnClick}>
        {togClass === "light" ? (
          <img src='img/dark_mode.svg' alt='dark-mode-toggle' />
        ) : (
          <img src='img/light-mode.svg' alt='light-mode-toggle' />
        )}
      </button>
    </li>
  );
};

export default Toggle;
