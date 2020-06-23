// Deps
import React from "react";
import IntroArt from "../views/IntroArt/IntroArt";
//import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <IntroArt />
      <div className="intro-content">
        {/* <h1>About</h1> */}
        <h2>Hello, I&apos;m Dan! A multi-disciplined UX Designer and Developer working on the web since 2006.
        </h2>

      </div>
    </div>
  );
};

export default Intro;
