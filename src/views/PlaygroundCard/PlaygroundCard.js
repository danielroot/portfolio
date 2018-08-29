// Deps
import React, { Component } from "react";
import { shape, string } from "prop-types";

// Style
import "./PlaygroundCard.scss";

class PlaygroundCard extends Component {
  render() {
    const fields = this.props.fields;
    const { title, embed } = fields;
    //const heroImgSmallUrl = fields.heroImgSmall.fields.file.url;
    //const projectType = fields.projectType;

    return (
      <div>
        <h3>
          <span>{title}</span>
        </h3>
        <figure dangerouslySetInnerHTML={{ __html: embed }} />
      </div>
    );
  }
}

// TODO: remove defaultProps once Redux is handling state?

PlaygroundCard.propTypes = {
  fields: shape({
    title: string,
    overview: string
  })
};

export default PlaygroundCard;
