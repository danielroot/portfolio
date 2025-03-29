// Deps
import React, { Component } from "react";
import Art from "../assets/404-art.svg";
import { Link } from "react-router-dom";
import { array } from "prop-types";


// Components
//import ProjectCard from '../views/ProjectCard/ProjectCard';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projects = this.props.projects;
    console.log(projects); // why is this undefined?

    return (
      <div className="not-found">
        <Art className="hero" />
        <div>
          <h2>Sorry, page Not Found!</h2>
          <p><Link to="/" className="btn-link">Go back home</Link></p>
        </div>

        {/* TODO: Add all projects here */}
        {/* <footer>
          <h2>Browse more work</h2>
          <div className="projects-link--wrapper">
            {projects.map((project) => {
              return <ProjectCard key={project.sys.id} {...project} />;
            })}
          </div>
        </footer> */}
      </div>


    );
  }
}

NotFound.propTypes = {
  projects: array,
};



export default NotFound;
