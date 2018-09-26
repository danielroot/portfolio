// Deps
import React, { Component } from "react";
import { shape, string, array } from "prop-types";

// Style
import "./ProjectDetail.scss";

class ProjectDetail extends Component {
  render() {
    let fields = this.props.project.fields;
    let { title, overview, problem, solution, projectUrl, thumbnails } = fields;
    let clientLogoUrl = fields.clientLogo.fields.file.url;
    let heroImgSmallUrl = fields.heroImgSmall.fields.file.url;
    //let projectType = fields.projectType;

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

            <figure className="heroImg">
              {/* TODO: srcSet for swapping responsive images */}
              <img src={heroImgSmallUrl} alt="result alt text" />

              {/* TODO: fig caption with description field in contentful */}
            </figure>
            <p dangerouslySetInnerHTML={{ __html: overview }} />

            {thumbnails &&
              thumbnails.map((thumbnail, index) => {
                return <img src={thumbnail} alt="" key={index} />;
              })}
          </header>
          <section>
            {problem && (
              <React.Fragment>
                <h3>Problem</h3>
                <p>{problem}</p>
              </React.Fragment>
            )}

            {solution && (
              <React.Fragment>
                <h3>Solution</h3>
                <p>{solution}</p>
              </React.Fragment>
            )}

            {/*{role && <h3>Role</h3>}*/}
          </section>

          {projectUrl && (
            <aside>
              <a href={projectUrl}>View {title}</a>
            </aside>
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
