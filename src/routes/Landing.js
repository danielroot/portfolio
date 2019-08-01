// Deps
import React, { Component } from "react";

// Components
import Intro from "./Intro";
//import ProjectCard from "../views/ProjectCard/ProjectCard";
import { arrayOf, shape, string } from "prop-types";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";

class Landing extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Intro />
        <ProjectListContainer
          heading="Products"
          subheading="Shipped projects with cross-functional/agile teams"
          projects={this.props.projects}
          {...props}
        />
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
