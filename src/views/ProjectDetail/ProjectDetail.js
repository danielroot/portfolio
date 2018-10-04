// Deps
import React, { Component } from "react";
import { shape, string, array } from "prop-types";

// Style
import "./ProjectDetail.scss";

class ProjectDetail extends Component {
  render() {
    let fields = this.props.project.fields;
    let {
      title,
      overview,
      problem,
      solution,
      projectUrl,
      thumbnails,
      clientLogo,
      roles,
      brandColor
    } = fields;
    let clientLogoUrl = clientLogo && clientLogo.fields.file.url;
    let heroImgSmallUrl = fields.heroImgSmall.fields.file.url;
    //let projectType = fields.projectType;

    const filteredAndSortedRoles =
      roles &&
      roles
        .filter((role, index) => roles.lastIndexOf(role) === index)
        .sort((a, b) => (a < b ? -1 : 1));

    return (
      <project-detail>
        <article>
          <header>
            <h1>
              {clientLogoUrl && (
                <img
                  src={clientLogoUrl}
                  className="client-logo"
                  alt={`${title} 'logo'`}
                  aria-hidden="true"
                />
              )}
              <span>{title}</span>
            </h1>
            {/*<em>{projectType}</em>*/}

            {overview && <p>{overview}</p>}

            <figure className="heroImg">
              {/* TODO: srcSet for swapping responsive images */}
              <img src={heroImgSmallUrl} alt="result alt text" />

              {/* TODO: fig caption with description field in contentful */}
            </figure>

            {thumbnails &&
              thumbnails.map((thumbnail, index) => {
                return <img src={thumbnail} alt="" key={index} />;
              })}
          </header>
          <section>
            {problem && (
              <React.Fragment>
                <h2>
                  {title}
                  's Problem
                </h2>
                <p>{problem}</p>
              </React.Fragment>
            )}
          </section>
          <section>
            {solution && (
              <React.Fragment>
                <h2>Key Contributions</h2>
                <p>{solution}</p>
              </React.Fragment>
            )}
          </section>

          {roles && (
            <section
              className="roles"
              style={{ backgroundColor: `${brandColor}`, color: "white" }}
            >
              <h2>Responsibilities</h2>
              <ul>
                {filteredAndSortedRoles.map(role => {
                  return <li>{role}</li>;
                })}
              </ul>
            </section>
          )}

          {projectUrl && (
            <footer>
              <a href={projectUrl}>View {title} live</a>
            </footer>
          )}
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
      thumbnails: [],
      role: []
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
      roles: array,
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
