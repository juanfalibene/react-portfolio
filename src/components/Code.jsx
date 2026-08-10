import React, { useState, useRef } from "react";
import { about } from "../data";
import { about_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

/** Returns full years since a start date */
const yearsSince = (startYear, startMonth = 11) => {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1, 1);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

const Code = () => {
  const { language } = useLanguage();
  const currentAbout = language === "en" ? about : about_es;
  const years = yearsSince(2018, 11);

  // Draggable window state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ startX: 0, startY: 0 });

  const handlePointerDown = (e) => {
    if (e.target.closest(".code-nav")) {
      setIsDragging(true);
      dragStartRef.current = {
        startX: e.clientX - position.x,
        startY: e.clientY - position.y,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const newX = Math.max(-140, Math.min(140, e.clientX - dragStartRef.current.startX));
    const newY = Math.max(-80, Math.min(120, e.clientY - dragStartRef.current.startY));
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleResetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className='hero-data' id='update'>
      <div
        className={`hero-update-modal hero-update-modal--draggable ${isDragging ? "is-dragging" : ""
          }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Titlebar with window buttons (left), centered avatar, and interaction badge (right) */}
        <div
          className='code-nav'
          title='Drag window • Double click to center'
          onDoubleClick={handleResetPosition}
        >
          <ul className='code-nav-buttons'>
            <li
              className='code-nav-button'
              onClick={handleResetPosition}
              title='Reset position'
            ></li>
            <li className='code-nav-button'></li>
            <li className='code-nav-button'></li>
          </ul>

          <div className='code-avatar-center'>
            {currentAbout.map((info) => (
              <img
                key={info.name}
                src={info.imagePic}
                alt={info.name}
                className='hero-profile-img-pic'
                width='500'
                height='500'
                loading='eager'
              />
            ))}
          </div>

          <span className='code-nav-badge'>
            ✥ Drag • ⤡ Resize
          </span>
        </div>

        <div className='code-text'>
          <pre className='code-about'>
            <span className='operator'>{`{`}</span>
            <span className='prop'>
              name: <mark className='next-value'>"react-portfolio"</mark>
            </span>
            <span className='prop'>
              version: <mark className='next-value'>"1.0.3"</mark>
            </span>
            <span className='prop'>
              role:{" "}
              <mark className='next-value'>
                "WordPress &amp; Front-End Tech Partner"
              </mark>
            </span>
            {/* Services array including Development */}
            <span className='prop'>
              services:{" "}
              <mark className='next-value'>
                {`["Development", "Audit", "Consulting", "Maintenance", "WPO", "Troubleshooting", "Launch"]`}
              </mark>
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
                <mark className='number-mark'>75</mark>
              </a>
            </span>
            <span className='prop'>
              yearsOfExperience:{" "}
              <mark className='number-mark next-value'>{years}</mark>
            </span>
            <span className='prop'>
              location: <mark className='next-value'>"Barcelona, ES"</mark>
            </span>
            <span className='prop'>
              lastUpdate:{" "}
              <mark className='date-mark next-value'>"10-08-2026"</mark>
            </span>
            <span className='operator'>{`}`}</span>
          </pre>
        </div>

        {/* Visual corner resize handle */}
        <div className='code-resize-handle' aria-hidden='true'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Code;
