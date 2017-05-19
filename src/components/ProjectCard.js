// Deps
import React from 'react'
import { Link } from 'react-router-dom'
const { shape, string } = React.PropTypes

class ProjectCard extends React.Component {
  render () {
    const fields = this.props.fields
    const { title, slug, overview } = fields
    const heroImgSmallUrl = fields.heroImgSmall.fields.file.url

    return (
      <Link to={`/case-studies/${slug}`}>
        <h3>{title}</h3>
        <p>{overview}</p>
        <figure>
          <img src={heroImgSmallUrl} alt={title} />
        </figure>
      </Link>
    )
  }
}

ProjectCard.propTypes = {
  fields: shape({
    title: string,
    slug: string,
    heroImgSmall: shape({
      fields: shape({
        file: shape({
          url: string
        })
      })
    })
  })
}

export default ProjectCard
