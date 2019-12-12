// Deps
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {shape,string} from "prop-types";
import throttle from "lodash.throttle";

// Style
import "./ProjectCard.scss";

class ProjectCard extends Component {
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
    this.setState({
      isTablet: window.innerWidth >= 600
    });
  }

  componentWillMount() {
    this.handleWindowResize();
    this.timerHandle = setTimeout(() => this.setState({
      isLoading: false
    }), 2000);
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
      let {
        slug,
        title,
        clientLogo,
        previewImage,
        brandColor
      } = fields;
      let previewImageUrl =
        previewImage && `https:${previewImage.fields.file.url}`;
      //let heroImgDescription = heroImgSmall.fields.description;
      let clientLogoUrl = clientLogo && `https:${clientLogo.fields.file.url}`;
      let category = this.props.sys.contentType.sys.id;
      const {isTablet} = this.state;

      return (
        <Link to = {`/${category}/${slug}`}
          aria-labelledby = {`card-${slug}`}>
        <project-card>
        {isTablet && (
          <img src= {`${previewImageUrl}?w=500`}
            className="cover-img" />
          )}

          <div className="overlay-before"
            style= {
              isTablet ? {
                backgroundColor: `${brandColor}`
              } : {
                backgroundColor: '#fff'
              }
            }></div>

        {isTablet && ( <div className="overlay-opacity"></div>)}

            <figure> {
              clientLogoUrl && (
                <img src = {clientLogoUrl}
                className = {`client-logo ${slug}`}
                alt = {`${title} logo`}aria-hidden="true" />
              )} <h3 id ={`card-${slug}`}>{title}</h3>
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
