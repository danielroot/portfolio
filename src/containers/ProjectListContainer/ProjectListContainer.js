// Deps
import React, { Component } from "react";
import ProjectCard from "../../views/ProjectCard/ProjectCard";
import PlaygroundCard from "../../views/PlaygroundCard/PlaygroundCard";
import { arrayOf, shape, string } from "prop-types";

// Style
import "./ProjectListContainer.scss";

class ProjectListContainer extends Component {
  render() {
    //let contentType = this.props.sys.contentType.sys.id;

    return (
      <project-list-container>
        <section>
          <header>
            <h1>{this.props.heading}</h1>
            <p>{this.props.subheading}</p>
          </header>
          {this.props.heading === "Playground" ? (
            <div className="grid playground">
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
      </project-list-container>
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
  heading: string,
  subheading: string,
  projects: arrayOf(
    shape({
      sys: shape({
        id: string
      })
    })
  )
};

export default ProjectListContainer;
