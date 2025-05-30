// Deps
import React, { Component } from "react";
import { shape, string, array, number } from "prop-types";
import ReactMarkdown from "react-markdown";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";

// Components
import ProjectCard from "../../views/ProjectCard/ProjectCard";

// Style
import "./ProjectDetail.scss";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    // Preload hero image if available
    if (props.project.fields.heroImg.fields.file.url) {
      const heroImgUrl = `https:${props.project.fields.heroImg.fields.file.url}`;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImgUrl;
      document.head.appendChild(link);
    }
  }

  render() {
    if (!this.props.project) {
      return <div>Loading...</div>;
    }

    console.log(this.props.projects[0]);
    let fields = this.props.project.fields;
    let {
      clientName,
      title,
      projectRole,
      projectYear,
      timeline,
      overview,
      summary,
      contributions,
      projectUrl,
      roles,
      heroImg,
    } = fields;
    let heroImgUrl = `https:${heroImg.fields.file.url}`;
    let heroImgDesc = heroImg.fields.description;
    let projects = this.props.projects;

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

    return this.state.isLoading ? (
      <h1>loading</h1>
    ) : (
      <project-detail>
        <article>
          <header>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                key: {title},
                type: "spring",
                stiffness: 300,
                damping: 100,
                delay: 0.1
              }}
            >
            <h1>
              <span className="client-name">
                {clientName}
              </span>{" "}
              {title}
            </h1>
            </motion.div>
            <motion.div
            key={heroImgUrl}
            className="hero-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 50
            }}
          >
            {/* <img
              className="hero-img"
              src={`${heroImgUrl}`}
              sizes="50vw"
              srcSet={`${heroImgUrl} 1000w,
              ${heroImgUrl}?w=480 480w,
              ${heroImgUrl}?w=800 800w,
              ${heroImgUrl}?w=1000 1000w
              `}
              alt={heroImgDesc}
            /> */}
             <img
              className="hero-img"
              src={`${heroImgUrl}`}
              sizes="50vw"
              alt={heroImgDesc}
            />
          </motion.div>
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


          {summary && <section className="summary">{summaryContent}</section>}

          {contributions && (
            <section className="contributions">
              <h2>Key Contributions</h2>
              <ReactMarkdown source={contributions} />
            </section>
          )}

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
        <motion.div
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1
              }}
            >
          <footer>
            <h2>Browse more work</h2>
            <div className="projects-link--wrapper">
              {remainingProjects.map((project) => {
                return <ProjectCard key={project.sys.id} {...project} />;
              })}
            </div>
          </footer>
        </motion.div>
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
