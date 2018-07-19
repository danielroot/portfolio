// Deps
import React, { Component } from "react";
import { shape, string, array } from "prop-types";

// Style
import "./ProjectDetail.scss";

class ProjectDetail extends Component {
  render() {
    const fields = this.props.project.fields;
    const {
      title,
      overview,
      problem,
      solution,
      projectUrl,
      thumbnails
    } = fields;
    const clientLogoUrl = fields.clientLogo.fields.file.url;
    const heroImgSmallUrl = fields.heroImgSmall.fields.file.url;

    return (
      <project-detail>
        <article>
          <header>
            <h1>
              <img
                src={clientLogoUrl}
                className="client-logo"
                alt={`${title} 'logo'`}
                aria-hidden="true"
              />{" "}
              <span>{title}</span>
            </h1>
            <p>{overview}</p>

            <figure className="heroImg">
              {/* TODO: srcSet for swapping responsive images */}
              <img src={heroImgSmallUrl} alt="result alt text" />

              {/* TODO: fig caption with description field */}
            </figure>

            {thumbnails &&
              thumbnails.map((thumbnail, index) => {
                return <img src={thumbnail} alt="" key={index} />;
              })}
          </header>
          <section>
            <h3>Problem</h3>
            <p>{problem}</p>

            <h3>Solution</h3>
            <p>{solution}</p>

            <h3>Role</h3>
          </section>
          {projectUrl && (
            <aside>
              <a href={projectUrl}>View Case Study</a>
            </aside>
          )}

          <h1>{this.props.project.fields.id}</h1>
        </article>
      </project-detail>
    );
  }
}

// TODO: remove defaultProps once Redux is handling state?

ProjectDetail.defaultProps = {
  project: {
    fields: {
      clientLogo: {
        fields: {
          file: {
            url: ""
          }
        }
      },
      heroImgSmall: {
        fields: {
          file: {
            url: ""
          }
        }
      },
      thumbnails: []
    }
  }
};

ProjectDetail.propTypes = {
  project: shape({
    fields: shape({
      title: string,
      overview: string,
      problem: string,
      solution: string,
      clientLogo: shape({
        fields: shape({
          file: shape({
            url: string
          })
        })
      }),
      heroImgSmall: shape({
        fields: shape({
          file: shape({
            url: string
          })
        })
      }),
      thumbnails: array
    })
  })
};

export default ProjectDetail;
