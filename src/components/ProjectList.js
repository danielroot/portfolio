// Deps
import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import { arrayOf, shape, string } from 'prop-types'

class ProjectList extends Component {
  render () {
    return (
      <section>
        <h1>Case Studies</h1>
        {this.props.projects
          .map((project) => {
            return (
              <ProjectCard key={project.sys.id} {...project} />
            )
          })
        }
      </section>
    )
  }
}

ProjectList.propTypes = {
  projects: arrayOf(shape({
    sys: shape({
      id: string
    })
  }))
}

export default ProjectList
