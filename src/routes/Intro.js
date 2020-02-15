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
        <p>
          *I am currently looking for a collaborative team where I can contribute my varied skills in Responsive UI Design and Development, Prototyping, Interaction Design, Animation, and Design Systems. If you have needs in these areas, let&apos;s chat! <a href="mailto:info@danroot.co">info[at]danroot.co</a>
        </p>
      </div>
    </div>
  );
};

export default Intro;
