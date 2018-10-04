// Deps
import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { originYear, currentYear } from "../../utils/Dates";
// Style
import "./Footer.scss";

import DribbleIcon from "../../assets/Dribbble-black.svg";
import GithubIcon from "../../assets/Github-black.svg";
import LinkedInIcon from "../../assets/LinkedIn-black.svg";
import CodepenIcon from "../../assets/Codepen-black.svg";
import InstagramIcon from "../../assets/Instagram-color.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="global">
        <div className="container">
          <nav>
            {/*<Link to="/style-guide">Style Guide</Link>*/}
            <a href="http://www.linkedin.com/danrootdesign">
              <LinkedInIcon />
            </a>
            <a href="http://www.dribbble.com/danrootdesign">
              <DribbleIcon />
            </a>
            <a href="http://www.github.com/danielroot">
              <GithubIcon />
            </a>
            <a href="http://www.codepen.io/danroot">
              <CodepenIcon />
            </a>
            <a href="http://www.instagram.com/danroot.co">
              <InstagramIcon />
            </a>
          </nav>

          <p>
            Site hand-crafted with VS Code, React JS, Sass, Webpack, and
            Contenful CMS.{" "}
            <a href="https://github.com/danielroot/portfolio/">
              View in Github
            </a>{" "}
            <br />
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
