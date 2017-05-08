import React from 'react'
import ProjectCard from './ProjectCard'
const { arrayOf, shape, number } = React.PropTypes

const ProjectList = React.createClass({
  propTypes: {
    project: arrayOf(shape({
      id: number
    }))
  },
  render () {
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

export default ProjectList
