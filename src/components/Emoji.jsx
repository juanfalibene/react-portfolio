import React from "react";
import { about } from "../data";

const Emoji = () => {
  return (
    <>
      {about.map((info) => (
        <div className='hero-data' key={info.name}>
          <img src={info.image} alt={info.name} className='hero-profile-img' />
          <h2 className='hero-profile-title'>
            {info.profession} and
            <br />
            {info.grade}
          </h2>
          <p className='hero-profile-text'>{info.text}</p>
          <a href='#works' className='hero-profile-button'>
            Let's Get Started
          </a>
        </div>
      ))}
    </>
  );
};

export default Emoji;
