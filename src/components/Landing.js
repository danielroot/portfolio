// Deps
import React, { Component } from 'react'

// Components
import About from './About'
import ProjectCard from './ProjectCard'
import { arrayOf, shape, string } from 'prop-types'

class Landing extends Component {
  render () {
    return (
      <div>
        <About />
        <div className='main-content'>
          {this.props.projects
            .filter((project) => {
              return project.fields.isShowcase === true
            })
            .map((project) => {
              return (
                <ProjectCard key={project.sys.id} {...project} />
              )
            })
          }
        </div>
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
