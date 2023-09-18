import React from "react";
import { about } from "../data";

export default function Hero() {
  return (
    <section id="intro" className="intro">
      {about.map((info) => (
        <div className="hero-data" key={info.name}>
          <img src={info.image} alt={info.name} className="hero-profile-img" />
          <h2 className="hero-profile-title">
            {info.profession} & {info.grade}
          </h2>
          <p className="hero-profile-text">{info.text}</p>
          <a href="#projects" className="hero-profile-button">
            Let's Get Started
          </a>
        </div>
      ))}
      <div className="intro-mini-footer">
        <p>Portfolio 2020 - 2023</p>
        <p>Available on October</p>
      </div>
    </section>
  );
}
