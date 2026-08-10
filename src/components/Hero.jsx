import React from "react";
import Code from "./Code";
import HeroStart from "./HeroStart";
import HeroManifesto from "./HeroManifesto";

export default function Hero() {
  return (
    <section id='intro' className='section-wrapper'>
      <Code />
      <HeroManifesto />
      <HeroStart />
    </section>
  );
}
