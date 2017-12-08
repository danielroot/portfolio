// Deps
import React, { Component } from 'react'
import { shape, string, array } from 'prop-types'

class ProjectDetail extends Component {
  render () {
    const fields = this.props.project.fields
    const { title, overview, problem, solution, projectUrl, thumbnails } = fields
    const heroImgSmallUrl = fields.heroImgSmall.fields.file.url

    return (
      <article>
        <header>
          <h1>{title}</h1>
          <figure>
            <img src={heroImgSmallUrl} alt='result alt text' />
          </figure>

          {thumbnails.map((thumbnail, index) => {
            return (
              <img src={thumbnail} alt='' key={index} />
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

        </section>
        <aside>
          <a href={projectUrl}>View Case Study</a>
        </aside>
      </article>
    )
  }
}

// TODO: remove defaultProps once Redux is handling state?

ProjectDetail.defaultProps = {
  project: {
    fields: {
      heroImgSmall: {
        fields: {
          file: {
            url: ''
          }
        }
      },
      thumbnails: []
    }
  }
}

ProjectDetail.propTypes = {
  project: shape({
    fields: shape({
      title: string,
      overview: string,
      problem: string,
      solution: string,
      heroImgSmall: shape({
        fields: shape({
          file: shape({
            url: string
          })
        })
      }),
      thumbnails: array
    })
  })
}

export default ProjectDetail
