// Deps
import React from "react";
import IntroArt from "../views/IntroArt/IntroArt";
import { motion } from "framer-motion";
//import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 100,
        delay: 0.1,
      }}
    >
      <div className="intro">
        <IntroArt />
        <div className="intro-content">
          {/* <h1>About</h1> */}
          {/* <h2>Hello! I&apos;m a UX professional with over 10 years experience.</h2>

        <p>Currently working as <strong>Sr. UX Product Designer at Walmart Omni Services</strong> and focused on the Auto Care Business.</p> */}

          <h2>15+ years of simplifying the complex</h2>
          <p>
            Since 2008, I&apos;ve evolved from UX Engineer to Product Designer,
            working at creative agencies (<strong>Deloitte Digital</strong>) and
            in-house teams (<strong>Uber</strong>, <strong>Walmart</strong>).
          </p>
          <p>
            I excel at creating intuitive experiences from challenging problems
            through collaborative problem-solving and consensus building. My
            methodical approach and calm demeanor help teams deliver meaningful
            results that balance user needs with business goals, even under
            tight constraints.
          </p>
          {/* <p>Currently looking for a collaborative team where I can contribute my varied skills in <strong>Responsive UI Design and Development</strong>, <strong>Prototyping</strong>, <strong>Interaction Design</strong>, and <strong>Animation</strong>. If you have needs in these areas, let&apos;s chat! <a className="text-link" href="mailto:info@danroot.co">info[at]danroot.co</a></p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
