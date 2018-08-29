// Deps
import React, { Component } from "react";

// Components
import About from "./About";
//import ProjectCards from "../views/ProjectCard/ProjectCard";
import { arrayOf, shape, string } from "prop-types";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
        {/*<div className="grid">
          {this.props.projects
            .filter(project => {
              return project.fields.isShowcase === true;
            })
            .map(project => {
              return <ProjectCards key={project.sys.id} {...project} />;
            })}
          </div>*/}
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
