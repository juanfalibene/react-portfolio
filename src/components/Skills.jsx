import React from "react";
import { hard_skills } from "../data";
import { hard_skills_es } from "../data_es";
import { useLanguage } from "../LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  const currentHardSkills = language === "en" ? hard_skills : hard_skills_es;

  return (
    <div className='skills-content'>
      <ul className='about-hard-skills'>
        {currentHardSkills.map((hard_skill) => (
          <li className='hard-skill-item' key={hard_skill.skill}>
            <img
              className='hard-skill-img'
              src={hard_skill.image}
              alt={hard_skill.skill}
              id={hard_skill.skill === "Github" ? "github_profile" : null}
              width='64'
              height='64'
              loading='lazy'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
