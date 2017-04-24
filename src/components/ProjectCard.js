import React from 'react';
import { Link } from 'react-router';
const { shape, string, object } = React.PropTypes;

const ProjectCard = React.createClass ({
  propTypes: {
    project: shape({
      title: string,
      hero_img: object
    })
  },
  render () {
    const { title, hero_img, slug} = this.props;
    return (
      <Link to={`/case-studies/${slug}`}>
        <figure>
          <h3>{title}</h3>
          <img src={`/img/${hero_img.small}`} alt={title} />
        </figure>
      </Link>
    )
  }
})

export default ProjectCard;