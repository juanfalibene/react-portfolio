import React from "react";
import WorkToggle from "./WorkToggle";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <>
    <section className='section-wrapper contact-section-wrapper'>
      <div id='contact' className='contact content-box'>
        <h2 className='section-title contact-title'>{language === "en" ? "Got a project in mind?" : "¿Tienes un proyecto en mente?"}</h2>
        <WorkToggle />
      </div>
    </section>
    </>
  );
}
