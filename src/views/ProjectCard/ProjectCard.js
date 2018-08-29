// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";

// Style
import "./ProjectCard.scss";

class ProjectCard extends Component {
  render() {
    const fields = this.props.fields;
    const { title, slug } = fields;
    const heroImgSmallUrl = fields.heroImgSmall.fields.file.url;
    let category;

    if (this.props.sys.contentType.sys.id === "project") {
      category = fields.projectType;
    } else {
      category = this.props.sys.contentType.sys.id;
    }

    return (
      <Link to={`/${category}/${slug}`}>
        <h3>{title}</h3>
        <figure>
          <img src={heroImgSmallUrl} alt={title} />
        </figure>
      </Link>
    );
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
  }),
  sys: shape({
    contentType: shape({
      sys: shape({
        id: string
      })
    })
  })
};

export default ProjectCard;
