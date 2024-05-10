import React from "react";
import { about } from "../data";

export default function Hero() {
  return (
    <section id='intro' className='intro'>
      <div className='hero-data' id='update'>
        <div className='hero-update-modal'>
          <div className='code-nav'>
            <ul className='code-nav-buttons'>
              <li className='code-nav-button'></li>
              <li className='code-nav-button'></li>
              <li className='code-nav-button'></li>
            </ul>
          </div>
          <div className='code-text'>
            <pre className='code-about'>
              <span className='operator'>{`{`}</span>
              <span className='prop'>
                name:{" "}
                <mark className='next-value'>
                  "react-portfolio-juanfalibene"
                </mark>
              </span>
              <span className='prop'>
                version: <mark className='next-value'>"1.0.1"</mark>
              </span>
              <span className='prop'>
                currentlyDoing: <mark className='operator-mark'>{`{`}</mark>
                <span className='prop'>
                  workingOn:{" "}
                  <a
                    href='https://pastoret.com'
                    rel='noreferrer'
                    className='next-value'
                  >
                    "https://pastoret.com"
                  </a>
                </span>
                <span className='prop'>
                  learning:{" "}
                  <mark className='next-value'>
                    ["Tailwind CSS", "Redux Toolkit"]
                  </mark>
                </span>
                <span className='prop'>
                  coding:{" "}
                  <a
                    href='https://github.com/juanfalibene/discava-digital'
                    rel='noreferrer'
                    className='next-value'
                  >
                    "https://github.com/juanfalibene/discava-digital"
                  </a>
                </span>
                <span className='prop'>
                  listening:
                  <a
                    href='https://open.spotify.com/playlist/4CtnJsz8C41gCLjfD1HNUw?si=8a25e6bf39b4471b'
                    rel='noreferrer'
                    className='next-value'
                  >
                    "https://t.ly/Z1dLA"
                  </a>
                </span>
                <span className='operator next-value'>{`}`}</span>
              </span>
              <span className='prop'>
                worksDelivered:{" "}
                <mark className='mark-number next-value'>38</mark>
              </span>
              <span className='prop'>
                availableForWork: <mark className='next-value'>"true"</mark>
              </span>
              <span className='prop'>
                lastUpdate:{" "}
                <mark className='mark-date next-value'>"10-05-2024"</mark>
              </span>
              <span className='operator'>{`}`}</span>
            </pre>
          </div>
        </div>
      </div>
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
