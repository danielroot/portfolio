import React from 'react';
import About from './About'
import ProjectCard from './ProjectCard';
const { arrayOf, shape, string, number } = React.PropTypes;

const Landing = React.createClass({
  PropTypes: {
    project: arrayOf(shape({
      title: string,
      id: number
    }))
  },
  render() {
    function isShowcase(project) {
      return project.showcase === true;
    }

    return (
      <div>
      <About />
      {this.props.projects
        .filter(isShowcase)
        .map((project) => {
            return (
              <ProjectCard key={project.id} {...project} />
            )
          })
      }
      </div>
    )
  }
})

export default Landing;