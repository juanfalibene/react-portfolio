import React from "react";
import { about } from "../data";

export const About = () => {
  return (
    <>
      {about.map((bio) => (
        <p key={bio.name + bio.profession}>{bio.bio}</p>
      ))}
    </>
  );
};
