import React from "react";
import { about } from "../data";
import Code from "./Code";

export default function Hero() {
  return (
    <section id='intro' className='intro'>
      <Code />
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
      <div className='intro-mini-footer'>
        <p>
          Portfolio build with
          <img
            src='/img/skills/react.svg'
            className='hero-hard-skill-img'
            alt='react-framework'
          />
        </p>
        <p>
          <a
            href='https://github.com/juanfalibene'
            target='_blank'
            rel='noreferrer'
          >
            Repositories on
            <img
              src='/img/skills/github-mark-white.svg'
              className='hero-hard-skill-img'
              id='github'
              alt='github.com'
            />
          </a>
        </p>
      </div>
    </section>
  );
}
