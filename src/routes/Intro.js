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
        <h2>Hello! I&apos;m a UX/UI Designer working on the web since 2006. I have a background in Visual Design and Front End Development.</h2>

        <p>Currently looking for a collaborative team where I can contribute my varied skills in <strong>Responsive UI Design and Development</strong>, <strong>Prototyping</strong>, <strong>Interaction Design</strong>, and <strong>Animation</strong>. If you have needs in these areas, let&apos;s chat! <a className="text-link" href="mailto:info@danroot.co">info[at]danroot.co</a></p>

      </div>
    </div>
  );
};

export default Intro;
