import React from "react";

const Code = () => {
  return (
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
              <mark className='next-value'>"react-portfolio-juanfalibene"</mark>
            </span>
            <span className='prop'>
              version: <mark className='next-value'>"1.0.1"</mark>
            </span>
            <span className='prop'>
              currentActivities: <mark className='operator-mark'>{`{`}</mark>
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
              worksDelivered: <mark className='number-mark next-value'>38</mark>
            </span>
            {/*<span className='prop'>
                codingChallenges:{" "}
                <mark className='number-mark next-value'>38</mark>
  </span>*/}
            <span className='prop'>
              availableForWork:{" "}
              <mark className='boolean-mark next-value'>true</mark>
            </span>
            <span className='prop'>
              lastUpdate:{" "}
              <mark className='date-mark next-value'>"10-05-2024"</mark>
            </span>
            <span className='operator'>{`}`}</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
