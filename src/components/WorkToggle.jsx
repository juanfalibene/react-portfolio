import React from "react";
import { about } from "../data";

const WorkToggle = () => {
  return (
      <div className='work-toggle-wrapper'>
        <div className='work-toggle-pic-area'>
          {about.slice(0, 1).map((info, index) => (
            <img
              key={index}
              src={info.imagePic}
              alt={info.name}
              className='work-toggle-img'
            />
          ))}
        </div>

        <a href='mailto:didea@juanfalibene.com' className='work-toggle-btn'>
          Let's Chat!
        </a>
      </div>
  );
};

export default WorkToggle;
