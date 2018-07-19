// Deps
import React, { Component } from "react";
import ProjectCards from "../ProjectCard/ProjectCard";
import { arrayOf, shape, string } from "prop-types";

// Style
import "./ProjectList.scss";

class ProjectList extends Component {
  render() {
    return (
      <section>
        <h1>Case Studies</h1>
        <div className="grid">
          {this.props.projects.map(project => {
            return <ProjectCards key={project.sys.id} {...project} />;
          })}
        </div>
      </section>
    );
  }
}

ProjectList.propTypes = {
  projects: arrayOf(
    shape({
      sys: shape({
        id: string
      })
    })
  )
};

export default ProjectList;
