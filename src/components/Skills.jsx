import React from "react";
import { soft_skills, hard_skills } from "../data";

const Skills = () => {
  return (
    <div className='skills-content'>
      <ul className='about-hard-skills'>
        {hard_skills.map((hard_skill) => (
          <li className='hard-skill-item' key={hard_skill.skill}>
            <img
              className='hard-skill-img'
              src={hard_skill.image}
              alt={hard_skill.skill}
              id={hard_skill.skill === "Github" ? "github_profile" : null}
            />
          </li>
        ))}
      </ul>
      <ul className='about-soft-skills'>
        {soft_skills.map((soft_skill) => (
          <li className='soft-skill-item' key={soft_skill.skill}>
            {soft_skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
