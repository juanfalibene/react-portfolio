import React from "react";
import { about } from "../data";

export const About = () => {
  return (
    <>
      {about.map((bio) => (
        <p
          key={bio.name + bio.profession}
          className='about-experience-description-text'
          dangerouslySetInnerHTML={{ __html: bio.bio }}
        />
      ))}
    </>
  );
};
