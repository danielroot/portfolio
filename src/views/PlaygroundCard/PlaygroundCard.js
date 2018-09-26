// Deps
import React, { Component } from "react";
import { shape, string } from "prop-types";

// Style
import "./PlaygroundCard.scss";

import CodepenIcon from "../../assets/Codepen-black.svg";

class PlaygroundCard extends Component {
  render() {
    let fields = this.props.fields;
    let { title, embed, codepenUrl, heroImgSmall } = fields;
    let heroImgSmallUrl = heroImgSmall && heroImgSmall.fields.file.url;

    return (
      <playground-card>
        <h3>
          <span>{title}</span>
        </h3>
        <figure>
          {embed && <figure dangerouslySetInnerHTML={{ __html: embed }} />}
          {codepenUrl && (
            <figcaption>
              <a className="button" href={codepenUrl}>
                View on CodePen
                <CodepenIcon />
              </a>
            </figcaption>
          )}
          {heroImgSmallUrl && <img src={heroImgSmallUrl} alt={title} />}
        </figure>
      </playground-card>
    );
  }
}

PlaygroundCard.defaultProps = {
  fields: {
    title: "",
    embed: "",
    heroImgSmall: {
      fields: {
        file: {
          url: ""
        }
      }
    }
  }
};

// TODO: remove defaultProps once Redux is handling state?

PlaygroundCard.propTypes = {
  fields: shape({
    title: string,
    embed: string,
    heroImgSmall: {
      fields: shape({
        file: shape({
          url: string
        })
      })
    }
  })
};

export default PlaygroundCard;
