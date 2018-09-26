// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";

// Style
import "./ProjectCard.scss";

class ProjectCard extends Component {
  render() {
    let fields = this.props.fields;
    let { slug, heroImgSmall } = fields;
    let heroImgSmallUrl = heroImgSmall.fields.file.url;
    let heroImgDescription = heroImgSmall.fields.description;
    let category;

    if (this.props.sys.contentType.sys.id === "project") {
      category = fields.projectType;
    } else {
      category = this.props.sys.contentType.sys.id;
    }

    return (
      <project-card>
        <Link to={`/${category}/${slug}`}>
          {/*<h3>{title}</h3>*/}
          <figure>
            <img src={heroImgSmallUrl} alt={heroImgDescription} />
          </figure>
        </Link>
      </project-card>
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
