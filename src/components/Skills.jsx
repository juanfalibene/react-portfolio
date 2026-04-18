import React from "react";
import { hard_skills } from "../data";

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
    </div>
  );
};

export default Skills;
