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
      isTablet: false,
      isLoading: true
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowResize = throttle(this.handleWindowResize, 200);
  }

  handleWindowResize() {
    this.setState({ isTablet: window.innerWidth >= 600 });
  }

  componentWillMount() {
    this.handleWindowResize();
    this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    let fields = this.props.fields;
    let { title, embed } = fields;
    //let { title, embed, heroImg, playgroundUrl, screenshotUrl } = fields;
    //let heroImgUrl = heroImg && `https:${heroImg.fields.file.url}`;
    //const { isTablet } = this.state;

    return (
      <playground-card>
        <h3>
          <span>{title}</span>
        </h3>
        <figure>
          <div dangerouslySetInnerHTML={{ __html: embed }} />
          {/* {isTablet ? (
            <div dangerouslySetInnerHTML={{ __html: embed }} />
          ) : (
            <a href={playgroundUrl}>
              {heroImgUrl && <img src={heroImgUrl} alt={title} /> }
              {screenshotUrl && <img src={screenshotUrl} alt={title} />}
            </a>
          )} */}
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
    heroImg: {
      fields: shape({
        file: shape({
          url: string
        })
      })
    }
  })
};

export default PlaygroundCard;
