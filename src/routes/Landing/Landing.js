// Deps
import React, { Component } from "react";

// Components
import Intro from "../Intro";
//import InterfaceArt from "../../views/IntroArt/InterfaceArt";
import { arrayOf, shape, string } from "prop-types";
import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";
//import PrototypingIcon from "../../assets/prototyping-icon.svg";

// Style
import "./Landing.scss";

class Landing extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Intro />
        {/* <section className="services">
          <h2>How can I help you?</h2>
          <div className="services-wrapper">
            <div>
              <PrototypingIcon/>
              <h3>Interaction Design</h3>
              <ul>
                <li>Layout</li>
                <li>Color</li>
                <li>Typography</li>
                <li>Gestalt Principles</li>
              </ul>
            </div>
            <div>
              <InterfaceArt/>
              <h3>Interface Design</h3>
              <ul>
                <li>Layout</li>
                <li>Color</li>
                <li>Typography</li>
                <li>Gestalt Principles</li>
              </ul>
            </div>
            <div>
              <PrototypingIcon/>
              <h3>Prototyping</h3>
              <ul>
                <li>HTML, CSS, JS</li>
                <li>React JS</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </section> */}
        <section className="projects">
        <ProjectListContainer
          heading="Projects"
          projects={this.props.projects}
          {...props}
        />
        </section>
        {/* <section>
        <Link to="/about">
          <h3>Learn more about me</h3>
        </Link>
        </section>
        <section>
        <Link to="/about">
          <h3>Let&apos;s chat about how I can contribute to your team.</h3>
        </Link>
        </section> */}
      </React.Fragment>
    );
  }
}

Landing.propTypes = {
  projects: arrayOf(
    shape({
      sys: shape({
        id: string,
        title: string
      })
    })
  )
};

export default Landing;
