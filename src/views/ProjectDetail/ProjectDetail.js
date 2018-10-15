// Deps
import React, { Component } from "react";
import { shape, string, array } from "prop-types";
import ReactMarkdown from "react-markdown";

// Style
import "./ProjectDetail.scss";

class ProjectDetail extends Component {
  render() {
    let fields = this.props.project.fields;
    let {
      title,
      overview,
      //problem,
      //solution,
      contributions,
      projectUrl,
      //thumbnails,
      clientLogo,
      roles,
      brandColor
    } = fields;
    let clientLogoUrl = clientLogo && `https:${clientLogo.fields.file.url}`;
    let heroImgSmallUrl = `https:${fields.heroImgSmall.fields.file.url}`;
    let heroImgDesc = fields.heroImgSmall.fields.description;
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

            {overview && <ReactMarkdown source={overview} />}

            <figure className="hero-container">
              {/* TODO: srcSet for swapping responsive images */}
              <img src={heroImgSmallUrl} alt={heroImgDesc} />

              {/* TODO: fig caption with description field in contentful */}
            </figure>

            {/*{thumbnails &&
              thumbnails.map((thumbnail, index) => {
                return <img src={thumbnail} alt="" key={index} />;
              })}*/}
          </header>
          {/*<section>
            {problem && (
              <React.Fragment>
                <h2>
                  {title}
                  &#39;s Problem
                </h2>
                <ReactMarkdown source={problem} />
              </React.Fragment>
            )}
          </section>*/}
          {/*<section>
            {solution && (
              <React.Fragment>
                <h2>Solution</h2>
                <ReactMarkdown source={solution} />
              </React.Fragment>
            )}
          </section>*/}
          <section className="contributions">
            {contributions && (
              <React.Fragment>
                <h2>Key Contributions</h2>
                <ReactMarkdown source={contributions} />
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
                {filteredAndSortedRoles.map((role, index) => {
                  return <li key={index}>{role}</li>;
                })}
              </ul>
            </section>
          )}

          {projectUrl && (
            <footer>
              <a className="view-link" href={projectUrl}>
                View {title} live &#8663;
              </a>
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
