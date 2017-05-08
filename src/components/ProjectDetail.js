// Import Dep
import React from 'react'

// Import Components

const { shape, string, array } = React.PropTypes

const ProjectDetail = React.createClass({
  propTypes: {
    title: string,
    hero_img: shape({
      small: string,
      medium: string,
      large: string
    }),
    thumbnails: array,
    overview: string,
    problem: string,
    solution: string,
    role: string,
    caseUrl: string
  },
  render () {
    const { title, hero_img, thumbnails, overview, problem, solution, role, caseUrl } = this.props
    return (
      <article>
        <header>
          <h1>{title}</h1>
          <figure>
            <img src={`/img/${hero_img.small}`} sizes='50vw'
              srcSet={`
                /img/${hero_img.small} 400w,
                /img/${hero_img.medium} 600w,
                /img/${hero_img.large} 800w
              `}
              alt='result alt text' />
          </figure>

          {thumbnails.map((thumbnail) => {
            return (
              <img src={thumbnail} alt='' />
            )
          })}
        </header>
        <section>
          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Problem</h3>
          <p>{problem}</p>

          <h3>Solution</h3>
          <p>{solution}</p>

          <h3>Role</h3>
          <p>{role}</p>

        </section>
        <aside>
          <h3>View Case Study</h3>
          <a href={caseUrl}>{caseUrl}</a>
        </aside>
      </article>
    )
  }
})

export default ProjectDetail
