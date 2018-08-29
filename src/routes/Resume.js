// Deps
import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      {/*<h2>Approach</h2>
      <p>...</p>

      <h2>Skills</h2>
      <h3>Sketching</h3>
      <p>
        Whether pencil, pen, or dry-erase marker, I am comfortable and adept at
        visualizing my ideas through low-fidelity sketches or whiteboard
        drawings.
      </p>

      <h3>Prototyping</h3>
      <p>
        I have experience using web frameworks that make it easy to generate
        interactive prototypes for internal/client review. Lately I&apos;ve been
        partial to Bootstrap and Middleman.
      </p>

      <h3>Design</h3>
      <p>
        I graduated in 2006 with a degree in Visual Arts (focused in Graphic
        Design) from SUNY New Paltz. There, I learned the history, theory, and
        application of Graphic Design. My tools of choice for UI design are
        Sketch and the browser.
      </p>

      <h3>Coding</h3>
      <p>
        My modern Front End Development workflow includes Sublime, Git,
        Sass/Less, NPM, Bower, and Gulp.
        </p>*/}

      <h2>Experience</h2>
      <h3>Deloitte Digital</h3>
      <h4>Sr. Front End Designer/Engineer</h4>

      <h3>Push Design</h3>
      <h4>Lead Front End Developer</h4>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>UX</li>
        <li>UI</li>
      </ul>

      <h2>Select Clients</h2>
      <ul>
        <li>
          <Link to="/products/agilent">Agilent</Link>
        </li>
        <li>Audi</li>
        <li>Cambria</li>
        <li>Hitachi</li>
        <li>Lineage</li>
        <li>Lululemon</li>
        <li>
          <Link to="/products/nike-dashboard">Nike</Link>
        </li>
        <li>
          <Link to="/products/my-nu-skin">NuSkin</Link>
        </li>
        <li>
          <Link to="/products/rei-snow-report">REI</Link>
        </li>
        <li>
          <Link to="/products/rent-a-center">Rent-A-Center</Link>
        </li>
        <li>
          <Link to="/products/super-cuts">SuperCuts</Link>
        </li>
        <li>USGA</li>
        <li>VMWare</li>
        <li>Watson IBM</li>
      </ul>
      <a href="...">Download My Resume</a>
    </div>
  );
};

export default Resume;
