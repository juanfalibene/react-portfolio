import React from "react";

const MiniFooter = () => {
  return (
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
  );
};

export default MiniFooter;
