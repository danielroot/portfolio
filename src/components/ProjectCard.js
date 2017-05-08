import React from 'react'
import { Link } from 'react-router-dom'
const { shape, string } = React.PropTypes

const ProjectCard = React.createClass({
  propTypes: {
    title: string,
    hero_img: shape({
      small: string,
      medium: string,
      large: string
    }),
    slug: string
  },
  render () {
    const { title, hero_img, slug } = this.props
    return (
      <Link to={`/case-studies/${slug}`}>
        <h3>{title}</h3>
        <figure>
          <img src={`/img/${hero_img.small}`} alt={title} />
        </figure>
      </Link>
    )
  }
})

export default ProjectCard
