import React from "react";
import WorkToggle from "./WorkToggle";

export default function Contact() {
  return (
    <>
    <section className='section-wrapper contact-section-wrapper'>
      <div id='contact' className='contact content-box'>
        <h2 className='section-title contact-title'>Got a project in mind?</h2>
        <WorkToggle />
      </div>
    </section>
    </>
  );
}
