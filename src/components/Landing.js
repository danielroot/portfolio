// Deps
import React from 'react'

// Components
import About from './About'
import ProjectCard from './ProjectCard'
const { arrayOf, shape, string } = React.PropTypes

class Landing extends React.Component {
  render () {
    return (
      <div>
        <About />
        {this.props.projects
          .filter((project) => {
            return project.fields.showcase === true
          })
          .map((project) => {
            return (
              <ProjectCard key={project.sys.id} {...project} />
            )
          })
        }
      </div>
    )
  }
}

Landing.propTypes = {
  projects: arrayOf(shape({
    sys: shape({
      id: string,
      title: string
    })
  }))
}

export default Landing
