// Deps
import React, { Component } from "react";
import ProjectCard from "../../views/ProjectCard/ProjectCard";
import PlaygroundCard from "../../views/PlaygroundCard/PlaygroundCard";
import { arrayOf, shape, string } from "prop-types";

// Style
import "./ProjectListContainer.scss";

class ProjectListContainer extends Component {
  render() {
    //const contentType = this.props.sys.contentType.sys.id;

    return (
      <section>
        <h1>{this.props.heading}</h1>
        <p>{this.props.subheading}</p>
        {this.props.heading === "Playground" ? (
          <div className="grid">
            {this.props.projects.map(project => {
              return <PlaygroundCard key={project.sys.id} {...project} />;
            })}
          </div>
        ) : (
          <div className="grid">
            {this.props.projects.map(project => {
              return <ProjectCard key={project.sys.id} {...project} />;
            })}
          </div>
        )}
      </section>
    );
  }
}

ProjectListContainer.defaultProps = {
  project: {
    sys: {
      contentType: {
        sys: {
          id: "project"
        }
      }
    }
  }
};

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
