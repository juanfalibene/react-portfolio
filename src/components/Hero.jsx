import React from "react";
import Code from "./Code";
import HeroProfile from "./HeroProfile";
import HeroStart from "./HeroStart";

export default function Hero() {
  return (
    <section id='intro' className='intro'>
      <Code />
      <HeroProfile />
      <HeroStart />
    </section>
  );
}
