// Deps
import React, { Component } from "react";

// Components
import Intro from "../Intro";
//import InterfaceArt from "../../views/IntroArt/InterfaceArt";
import { arrayOf, shape, string } from "prop-types";
import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";
import { motion } from "framer-motion";
//import PrototypingIcon from "../../assets/prototyping-icon.svg";

// Style
import "./Landing.scss";

class Landing extends Component {
  render(props) {
    return (
      <React.Fragment>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 100,
            delay: 0.1,
          }}
        >
          <Intro />
          <section className="projects">
            <ProjectListContainer
              heading="Case Studies"
              projects={this.props.projects}
              {...props}
            />
          </section>
        </motion.div>
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
