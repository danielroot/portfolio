// Deps
import React, { Component } from "react";

// Components
import Intro from "./Intro";
//import ProjectCard from "../views/ProjectCard/ProjectCard";
//import { Link } from "react-router-dom";
import { arrayOf, shape, string } from "prop-types";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";

class Landing extends Component {
  render(props) {
    return (
      <React.Fragment>
        <Intro />
        <ProjectListContainer
          heading="Featured Work"
          subheading="Shipped projects with cross-functional/agile teams"
          projects={this.props.projects}
          {...props}
        />
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
