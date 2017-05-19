// Deps
import React from 'react'
import ProjectCard from './ProjectCard'
const { arrayOf, shape, string } = React.PropTypes

class ProjectList extends React.Component {
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
