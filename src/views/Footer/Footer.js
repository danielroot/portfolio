// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { currentYear } from "../../utils/Dates";

// Style
import "./Footer.scss";

import DribbleIcon from "../../assets/icons/Dribbble-color.svg";
import GithubIcon from "../../assets/icons/Github-color.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn-color.svg";
import CodepenIcon from "../../assets/icons/Codepen-white.svg";
import InstagramIcon from "../../assets/icons/Instagram-color.svg";
//import TwitterIcon from "../../assets/icons/Twitter-color.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="global">
        <div className="container">
          <h4>Follow</h4>
          <nav>
            {/*<Link to="/style-guide">Style Guide</Link>*/}
            <a href="https://www.linkedin.com/in/dan-root/">
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
            <a href="http://www.instagram.com/danroot_art">
              <InstagramIcon />
            </a>
            {/*<a href="https://www.twitter.com/danrootdesign">
              <TwitterIcon />
    </a>*/}
          </nav>

          <p>
            Site hand-crafted with VS Code, React JS, Sass, Contenful API. Hosted on Netlify{" "}
            <br />
            <a href="https://github.com/danielroot/portfolio/">
              View source code in Github
            </a>{" "}

          </p>
          <p>
            &copy; {currentYear} <Link to="/">Dan Root</Link>
            {/* <a>info[at]danroot.co</a> */}
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
