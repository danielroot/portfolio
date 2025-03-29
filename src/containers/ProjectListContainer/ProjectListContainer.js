// Deps
import React, { Component } from "react";
import ProjectCard from "../../views/ProjectCard/ProjectCard";
import PlaygroundCard from "../../views/PlaygroundCard/PlaygroundCard";
import { arrayOf, shape, string } from "prop-types";
import { motion } from "framer-motion";

// Style
import "./ProjectListContainer.scss";

class ProjectListContainer extends Component {
  render() {
    if (!this.props.projects) {
      return <div>Loading...</div>;
    }

    //let contentType = this.props.sys.contentType.sys.id;
    const loadingContainerVariants = {
      start: {
        transition: {
          //staggerChildren: 0.2
        }
      },
      end: {
        transition: {
          staggerChildren: 0.2
        }
      }
    };

    return (
      <project-list-container key={this.props.heading}>
        <section>
          <header>
            <h1>{this.props.heading}</h1>
            <p>{this.props.subheading || "Delivered with cross-functional/agile teams"}</p>
          </header>
          {this.props.heading === "Playground" ? (
            <div className="grid playground">
              {this.props.projects.map(project => {
                return <PlaygroundCard key={project.sys.id} {...project} />;
              })}
            </div>
          ) : (
            <motion.div
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
            className="grid"
            >
              {this.props.projects.map(project => {
                return <ProjectCard key={project.sys.id} {...project} />;
              })}
            </motion.div>
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
