// Deps
import React from "react";
import IntroArt from "../assets/intro-art.svg";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <IntroArt className="hero" />
      <h2>
        Hello! I&apos;m Dan Root
      </h2>
      <p>
      Multi-disciplined UX/UI Product Designer working on the web  since 2006.
Currently Sr. Front-End Designer/Developer at{" "}
        <NavLink to="/products/deloitte-digital">
          Deloitte Digital
        </NavLink>{" "}
        in Seattle, WA.
      </p>
    </div>
  );
};

export default Intro;
