// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";

// Style
import "./ProjectCard.scss";

class ProjectCard extends Component {
  render() {
    let fields = this.props.fields;
    let { slug, title, clientLogo, previewImage, brandColor } = fields;
    let previewImageUrl = previewImage && previewImage.fields.file.url;
    //let heroImgDescription = heroImgSmall.fields.description;
    let clientLogoUrl = clientLogo && clientLogo.fields.file.url;
    let category;

    if (this.props.sys.contentType.sys.id === "project") {
      category = fields.projectType;
    } else {
      category = this.props.sys.contentType.sys.id;
    }

    return (
      <Link to={`/${category}/${slug}`}>
        <project-card
          style={{
            backgroundColor: `${brandColor}`,
            backgroundImage: `url(${previewImageUrl})`
          }}
        >
          <figure>
            {clientLogoUrl && (
              <img
                src={clientLogoUrl}
                className="client-logo"
                alt={`${title} 'logo'`}
                aria-hidden="true"
              />
            )}
            <h3>{title}</h3>
          </figure>
        </project-card>
      </Link>
    );
  }
}

ProjectCard.propTypes = {
  fields: shape({
    title: string,
    slug: string,
    previewImage: shape({
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
