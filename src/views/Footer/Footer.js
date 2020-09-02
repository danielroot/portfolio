// Deps
import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { currentYear } from "../../utils/Dates";

// Style
import "./Footer.scss";

import DribbleIcon from "../../assets/icons/Dribbble-color.svg";
import GithubIcon from "../../assets/icons/Github-color.svg";
import LinkedInIcon from "../../assets/icons/LinkedIn-color.svg";
import CodepenIcon from "../../assets/icons/Codepen-white.svg";
//import InstagramIcon from "../../assets/icons/Instagram-color.svg";
//import TwitterIcon from "../../assets/icons/Twitter-color.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="global">
        <div className="container">
          {/* <p>Interested in working together?</p>
          <a href="mailto:info@danroot.co" className="btn">Contact Me!</a> */}

          <h4>Connect</h4>
          <div className="footer-nav" role="navigation"  aria-label="social media links">
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
            {/* <a href="http://www.instagram.com/danroot.art">
              <InstagramIcon />
            </a> */}
            {/*<a href="https://www.twitter.com/danrootdesign">
              <TwitterIcon />
    </a>*/}
          </div>

          <div className="footer-copy__wrapper">
            <p>
              hand-crafted with VS Code, React JS, Sass, and Contenful API. Hosted on Netlify{" "}
              <br />
              <a href="https://github.com/danielroot/portfolio/">
                View Github Repo
              </a>{" "}

            </p>
            <p>
              &copy; {currentYear} Dan Root
              {" "}<a href="mailto:info@danroot.co">info[at]danroot.co</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
