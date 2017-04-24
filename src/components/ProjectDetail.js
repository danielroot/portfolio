// Import Dep
import React from 'react';

// Import Components

const { shape, string, array, object } = React.PropTypes;

const ProjectDetail = React.createClass({
  propTypes: {
    project: shape({
      title: string,
      hero_img: object,
      thumbnails: array,
      overview: string,
      problem: string,
      solution: string,
      role: string,
      case_url: string
    })
  },
  render() {
    const { title, hero_img, thumbnails, overview, problem, solution, role, case_url  } = this.props.project;
    return (
      <article>
        <header>
          <h1>{title}</h1>
          <img src={`/img/${hero_img.small}`} sizes="50vw"
            srcSet={`
              /img/${hero_img.small} 200w,
              /img/${hero_img.medium} 400w,
              /img/${hero_img.large} 600w
            `}
            alt="result alt text" />

          {thumbnails.map((thumbnail) => {
            return (
              <img src={thumbnail} alt="" />
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
          <a href={case_url}>{case_url}</a>
        </aside>
      </article>
    )
  }
})

export default ProjectDetail;