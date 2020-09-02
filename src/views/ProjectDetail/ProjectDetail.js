// Deps
import React, { Component } from "react";
import { shape, string, array, number } from "prop-types";
import ReactMarkdown from "react-markdown";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {
//   Redirect
// } from "react-router-dom";

// Components
import ProjectCard from "../../views/ProjectCard/ProjectCard";

// Style
import "./ProjectDetail.scss";

//import ProjectsIcon from "../../assets/icons/projects.svg";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      projects: this.props.projects,
      activeProjectId: this.props.projectId,
      nextTitle: "",
    };
  }

  componentDidMount() {
    //this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 2000);
    //this.setState({ projects: this.props.projects });
  }

  componentWillUnmount() {
    // if (this.timerHandle) {
    //   clearTimeout(this.timerHandle);
    //   this.timerHandle = 0;
    // }
  }

  nextProject() {
    let nextId = this.state.projectId + 1;
    //console.log(nextId);
    let nextProjectId = this.state.projects[nextId];
    return nextProjectId;
  }

  handleNextProject() {
    let arr = this.state.projects.length;
    let idx = this.state.activeProjectId + 1;
    idx = idx % arr;

    this.setState({
      activeProject: idx,
      nextTitle: this.state.projects[idx].fields.slug,
    });

    console.log(this.state.nextTitle);
  }

  render() {
    console.log(this.props.projects[0]);
    let fields = this.props.project.fields;
    let {
      //previewImage,
      clientName,
      title,
      projectRole,
      projectYear,
      timeline,
      overview,
      summary,
      //problem,
      //solution,
      contributions,
      projectUrl,
      //thumbnails,
      //clientLogo,
      roles,
      //brandColor,
      heroImg,
    } = fields;
    //let clientLogoUrl = clientLogo && `https:${clientLogo.fields.file.url}`;
    let heroImgUrl = `https:${heroImg.fields.file.url}`;
    let heroImgDesc = heroImg.fields.description;
    let projects = this.props.projects;
    //let projectType = fields.projectType;
    //let previewImageUrl =
    //previewImage && `https:${previewImage.fields.file.url}`;

    const filteredAndSortedRoles =
      roles &&
      roles
        .filter((role, index) => roles.lastIndexOf(role) === index)
        .sort((a, b) => (a < b ? -1 : 1));

    const remainingProjects = projects
      .slice(0, this.props.projectId)
      .concat(projects.slice(this.props.projectId + 1, projects.length));

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
          <figure className="img-wrap">
            <img src={node.data.target.fields.file.url} />
            <figcaption>{node.data.target.fields.description}</figcaption>
          </figure>
        ),
        [BLOCKS.EMBEDDED_ENTRY]: (node) => (
          <div
            className="code-snippet"
            dangerouslySetInnerHTML={{
              __html: node.data.target.fields.snippet,
            }}
          />
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.QUOTE]: (node, children) => (
          <div className="quotation">{children}</div>
        ),
        [MARKS.BOLD]: (node, children) => (
          <span className="bold-title">{children}</span>
        ),
      },
    };

    const summaryContent = documentToReactComponents(summary, options);

    // let nextTitle = (idx, arr) => {
    //   let i = idx + 1;
    //   i = i % arr.length;
    //   console.log(arr[i].title);

    //   return arr[i];
    // };

    return this.state.isLoading ? (
      <h1>loading</h1>
    ) : (
      <project-detail>
        {/*<img src={previewImageUrl} />*/}

        {/* <Redirect to="/404" /> */}
        <article>
          <header>
            <h1>
              <span className="client-name">
                {clientName}
              </span>{" "}
              {title}
            </h1>
            {/* <p>Industry: Retail</p>
            <p>Services: UX, UI</p>
            <p>Team: DD</p> */}
            {/*<em>{projectType}</em>*/}
            {overview && <ReactMarkdown source={overview} />}
            <dl>
              {projectRole && (
                <React.Fragment>
                  <dt>Role</dt>
                  <dd>{projectRole}</dd>
                </React.Fragment>
              )}
              {projectYear && (
                <React.Fragment>
                  <dt>Year</dt>
                  <dd>{projectYear}</dd>
                </React.Fragment>
              )}
              {timeline && (
                <React.Fragment>
                  <dt>Duration</dt>
                  <dd>{timeline}</dd>
                </React.Fragment>
              )}
              {/* <dt>Team</dt>
              <dd>PM, Engineers, QA</dd> */}
            </dl>
          </header>
          <motion.div
            key={title}
            className="hero-container"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <img
              className="hero-img"
              src={`${heroImgUrl}?w=320`}
              sizes="50vw"
              srcSet={`${heroImgUrl}?w=320 320w,
              ${heroImgUrl}?w=480 480w,
              ${heroImgUrl}?w=800 800w,
              ${heroImgUrl}?w=1000 1000w
              `}
              alt={heroImgDesc}
            />
          </motion.div>

          {summary && <section className="summary">{summaryContent}</section>}

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

          {/* {thumbnails && (
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
          )} */}

          {roles && (
            <section className="roles">
              <h2>Activities Performed</h2>
              <ul>
                {filteredAndSortedRoles.map((role, index) => {
                  return <li key={index}>{role}</li>;
                })}
              </ul>
            </section>
          )}

          {/* <section>
            <h2>Tools & Methods</h2>
            <ul>
              <li>Figma</li>
              <li>React JS</li>
            </ul>

          </section> */}

          {projectUrl && (
            <section>
              <h4>View live project</h4>
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                {projectUrl}
              </a>
            </section>
          )}
        </article>
        <footer>
          <h2>Browse more work</h2>
          <div className="projects-link--wrapper">
            {/* {remainingProjects.map(project => {
                return <Link className="btn-outline" to={`/project/${project.fields.slug}`} key={project.sys.id}>
                  <img src={`https:${project.fields.cardImg.fields.file.url}`} />
                  {project.fields.clientName}—{project.fields.title}</Link>;
              })} */}

            {remainingProjects.map((project) => {
              return <ProjectCard key={project.sys.id} {...project} />;
            })}
          </div>
          {/* <Link to="/project/#" className="btn-link">Next Project &#10230; </Link>
            {this.state.activeProjectId} need redux because state is lost on page refresh */}
        </footer>
      </project-detail>
    );
  }
}

// TODO: remove defaultProps once Redux is handling state?

ProjectDetail.defaultProps = {
  projects: [],
  project: {
    fields: {
      clientLogo: {
        fields: {
          file: {
            url: "",
          },
        },
      },
      heroImg: {
        fields: {
          file: {
            url: "",
          },
        },
      },
      role: [],
    },
  },
};

ProjectDetail.propTypes = {
  projects: array,
  projectId: number,
  project: shape({
    fields: shape({
      clientName: string,
      title: string,
      overview: string,
      problem: string,
      solution: string,
      roles: array,
      clientLogo: shape({
        fields: shape({
          file: shape({
            url: string,
          }),
        }),
      }),
      heroImgSmall: shape({
        fields: shape({
          file: shape({
            url: string,
          }),
        }),
      }),
      thumbnails: array,
    }),
  }),
};

export default ProjectDetail;
