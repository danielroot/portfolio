import React from 'react';
import ProjectCard from './ProjectCard';
const { arrayOf, shape, string, number } = React.PropTypes;

const ProjectList = React.createClass({
  PropTypes: {
    project: arrayOf(shape({
      title: string,
      id: number
    }))
  },
  render() {
    return (
      <section>
        <h1>Case Studies</h1>
        {this.props.projects
          .map((project) => {
            return (
              <ProjectCard key={project.id} {...project} />
            )
          })
        }
      </section>
    )
  }
})

export default ProjectList;