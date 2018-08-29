// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Style
import "./Footer.scss";

class Footer extends Component {
  render() {
    let originYear = 2006;
    let currentYear = new Date().getFullYear();

    return (
      <footer>
        <div className="container">
          <nav>
            <Link to="/style-guide">Style Guide</Link>
            <a href="http://www.linkedin.com/danrootdesign">LinkedIn</a>
            <a href="http://www.dribbble.com/danrootdesign">Dribbble</a>
            <a href="http://www.github.com/danielroot">Github</a>
            <a href="http://www.codepen.io/danroot">Codepen</a>
            <a href="http://www.instagram.com/danroot.co">Instagram</a>
          </nav>

          <p>
            Site hand-crafted with VS Code, React JS, Sass, Webpack, and
            Contenful CMS <br />
            Made in Seattle, WA
          </p>
          <small>
            &copy; {originYear} - {currentYear}
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
