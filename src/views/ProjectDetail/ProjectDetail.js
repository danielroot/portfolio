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
      //previewImage,
      title,
      overview,
      //problem,
      //solution,
      contributions,
      projectUrl,
      thumbnails,
      clientLogo,
      roles,
      brandColor
      //heroImg
    } = fields;
    let clientLogoUrl = clientLogo && `https:${clientLogo.fields.file.url}`;
    //let heroImgUrl = `https:${heroImg.fields.file.url}`;
    //let heroImgDesc = heroImg.fields.description;
    //let projectType = fields.projectType;
    //let previewImageUrl =
    //previewImage && `https:${previewImage.fields.file.url}`;

    const filteredAndSortedRoles =
      roles &&
      roles
        .filter((role, index) => roles.lastIndexOf(role) === index)
        .sort((a, b) => (a < b ? -1 : 1));

    return (
      <project-detail>
        {/*<img src={previewImageUrl} />*/}

        <article>
          <header>
            <h1>
              {clientLogoUrl && (
                <img
                  src={clientLogoUrl}
                  className="client-logo"
                  //alt={`${title} 'logo'`}
                  aria-hidden="true"
                />
              )}
              <span>{title}</span>
            </h1>
            {/*<em>{projectType}</em>*/}

            {overview && <ReactMarkdown source={overview} />}
            {/*<figure className="hero-container">
              <img
                src={`${heroImgUrl}?w=320`}
                sizes="50vw"
                srcSet={`${heroImgUrl}?w=320 320w,
                ${heroImgUrl}?w=480 480w,
                ${heroImgUrl}?w=800 800w,
                ${heroImgUrl}?w=1000 1000w
                `}
                alt={heroImgDesc}
              />
              </figure>*/}
          </header>
          {contributions && (
            <section className="contributions">
              <h2>Key Contributions</h2>
              <ReactMarkdown source={contributions} />
            </section>
          )}
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

          {thumbnails && (
            <React.Fragment>
              <h2>Deliverables</h2>
              {thumbnails.map((thumbnail, index) => {
                thumbnail = thumbnail.fields;

                return (
                  <section className="thumbnail" key={index}>
                    <figure>
                      <img
                        src={`${thumbnail.file.url}?w=320`}
                        sizes="50vw"
                        srcSet={`${thumbnail.file.url}?w=320 320w,
                    ${thumbnail.file.url}?w=480 480w,
                    ${thumbnail.file.url}?w=800 800w,
                    ${thumbnail.file.url}?w=1000 1000w
                    `}
                        alt={thumbnail.description}
                      />

                      <figcaption>{thumbnail.description}</figcaption>
                    </figure>
                  </section>
                );
              })}
            </React.Fragment>
          )}

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
              <a
                className="view-link"
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
      heroImg: {
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
