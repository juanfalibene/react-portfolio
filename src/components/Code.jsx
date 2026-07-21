import React from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const Code = () => {
  const { language } = useLanguage();
  const currentAbout = language === "en" ? about : about_es;

  return (
    <div className='hero-data' id='update'>
      <div className='hero-update-modal'>
        {currentAbout.map((info) => (
          <img
            src={info.imagePic}
            alt={info.name}
            className='hero-profile-img-pic'
            width='500'
            height='500'
            loading='eager'
          />
        ))}
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
              name: <mark className='next-value'>"react-portfolio"</mark>
            </span>
            <span className='prop'>
              version: <mark className='next-value'>"1.0.2"</mark>
            </span>
            <span className='prop'>
              role: <mark className='next-value'>"Web Developer"</mark>
            </span>
            <span className='prop'>
              currentActivities: <mark className='operator-mark'>{`{`}</mark>
              <span className='prop'>
                workingOn:{" "}
                <a
                  href='https://juanstagnaro.com/'
                  rel='noreferrer noopenner'
                  className='next-value'
                  target='_blank'
                >
                  "portfolio project"
                </a>
              </span>
              <span className='prop'>
                learning:{" "}
                <mark className='next-value'>
                  ["Wordpress FSE", "React Components"]
                </mark>
              </span>
              <span className='prop'>
                coding:{" "}
                <a
                  href='https://dev.juanfalibene.com/discava'
                  target='_blank'
                  rel='noreferrer noopenner'
                  className='next-value'
                >
                  "discava 2.0"
                </a>
              </span>
              <span className='prop'>
                listening:
                <a
                  href='https://www.nts.live/shows/your-specialist-subject-ii/episodes/your-specialist-subject-ii-dust2dust-w-juan-falibene-12th-april-2026'
                  rel='noreferrer noopenner'
                  target='_blank'
                  className='next-value'
                >
                  "NTS Supporter Radio"
                </a>
              </span>
              <span className='operator next-value'>{`}`}</span>
            </span>
            <span className='prop'>
              availableForWork:{" "}
              <mark className='boolean-mark next-value'>true</mark>
            </span>
            <span className='prop'>
              worksDelivered:{" "}
              <a
                href='https://juanfalibene.com/writing/#/archive'
                target='_blank'
                rel='noreferrer noopenner'
                className='next-value number-archive'
              >
                <mark className='number-mark'>65</mark>
              </a>
            </span>
            <span className='prop'>
              location: <mark className='next-value'>"Barcelona, ES"</mark>
            </span>
            <span className='prop'>
              lastUpdate:{" "}
              <mark className='date-mark next-value'>"22-07-2026"</mark>
            </span>
            <span className='operator'>{`}`}</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
