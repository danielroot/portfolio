// Deps
import React, { Component } from "react";
import { shape, string } from "prop-types";
import throttle from "lodash.throttle";

// Style
import "./PlaygroundCard.scss";

class PlaygroundCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTablet: false
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowResize = throttle(this.handleWindowResize, 200);
  }

  handleWindowResize() {
    this.setState({ isTablet: window.innerWidth >= 600 });
  }

  componentWillMount() {
    this.handleWindowResize();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    let fields = this.props.fields;
    let { title, embed, heroImgSmall, playgroundUrl } = fields;
    let heroImgSmallUrl =
      heroImgSmall && `https:${heroImgSmall.fields.file.url}`;
    const { isTablet } = this.state;

    return (
      <playground-card>
        <h3>
          <span>{title}</span>
        </h3>
        <figure>
          {isTablet ? (
            <figure dangerouslySetInnerHTML={{ __html: embed }} />
          ) : (
            <a href={playgroundUrl}>
              <img src={heroImgSmallUrl} alt={title} />
            </a>
          )}
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
