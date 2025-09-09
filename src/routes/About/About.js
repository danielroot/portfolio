// Deps
import React from "react";
import { Link } from "react-router-dom";
import Intro from "../Intro";
import profilePic from "../../assets/img/dan-root_profile.jpg";

// Style
import "./About.scss";

const About = () => {
  return (
    <React.Fragment>
      <img src={profilePic} className="profile-pic" alt="Picture of Dan Root" />

      <section>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <h2>About</h2>
        Discover Design Deliver Deduce
        <p>What I can bring to your team</p>
        <h3>Sketching</h3>
        <p>
          Whether pencil, pen, or dry-erase marker, I am comfortable and adept
          at visualizing my ideas through low-fidelity sketches or whiteboard
          drawings.
        </p>
        <h3>Prototyping</h3>
        <p>
          I have experience using web frameworks that make it easy to generate
          interactive prototypes for internal/client review.
        </p>
        <h3>Design</h3>
        <p>
          I graduated in 2006 with a degree in Visual Arts (focused in Graphic
          Design) from SUNY New Paltz. There, I learned the history, theory, and
          application of Graphic Design. My tools of choice for UI design are
          Sketch/Figma and the browser.
        </p>
        <h3>Coding</h3>
        <p>
          My modern Front End Development workflow includes VS Code, Git, React
          JS, Sass/Less, NPM, and Webpack.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Deloitte Digital</h3>
        <h4>Sr. Front End Designer/Engineer</h4>
        <time dateTime="2013-04">April 2013</time> &ndash; present
        <h3>Push Design</h3>
        <h4>Lead Web Designer</h4>
        <time dateTime="2010-06">June 2010</time> &ndash;{" "}
        <time dateTime="2013-03">March 2013</time>
      </section>

      <section className="skills">
        <h2>Approach</h2>

        <div>
          <h3>User-centered Design</h3>
          <ul>
            <li>Accessibility</li>
            <li>Animation</li>
            <li>Illustration</li>
            <li>Interaction Design</li>
            <li>Prototyping</li>
            <li>Responsive Web Design</li>
            <li>Sketching</li>
            <li>Storyboarding</li>
            <li>Styleguides</li>
            <li>UI Design</li>
            <li>Wireframing</li>
          </ul>
        </div>
      </section>

      <section className="clients">
        <h2>Select Clients</h2>
        <ul>
          <Link to="/project/agilent">
            <li>Agilent</li>
          </Link>
          <li>Audi</li>
          <li>Cambria</li>
          <li>Hitachi</li>
          <li>Lineage</li>
          <li>
            <Link to="/project/lululemon">Lululemon</Link>
          </li>
          <li>Nike</li>
          <li>
            <Link to="/project/my-nu-skin">NuSkin</Link>
          </li>
          <li>
            <Link to="/project/rei-snow-report">REI</Link>
          </li>
          <li>Rent-A-Center</li>
          <li>SuperCuts</li>
          <li>USGA</li>
          <li>VMWare</li>
          <li>
            <Link to="/project/walmart">Walmart Labs</Link>
          </li>
          <li>Watson IBM</li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default About;
