// Deps
import React, { Component } from "react";
import ProjectCard from "../../views/ProjectCard/ProjectCard";
import { arrayOf, shape, string } from "prop-types";

// Style
import "./ProjectListContainer.scss";

class ProjectListContainer extends Component {
  render() {
    return (
      <section>
        <h1>Case Studies</h1>
        <div className="grid">
          {this.props.projects.map(project => {
            return <ProjectCard key={project.sys.id} {...project} />;
          })}
        </div>
      </section>
    );
  }
}

ProjectListContainer.propTypes = {
  projects: arrayOf(
    shape({
      sys: shape({
        id: string
      })
    })
  )
};

export default ProjectListContainer;
