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
        <section className="projects">
          <ProjectListContainer
            heading="Portfolio"
            projects={this.props.projects}
            {...props}
          />
        </section>
        <Intro />
      </React.Fragment>
    );
  }
}

Landing.propTypes = {
  projects: arrayOf(
    shape({
      sys: shape({
        id: string,
        title: string,
      }),
    })
  ),
};

export default Landing;
