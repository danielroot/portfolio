// Deps
import React, { Component } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { shape, string, array, number } from "prop-types";
import ReactMarkdown from "react-markdown";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";

// Components
import ProjectCard from "../../views/ProjectCard/ProjectCard";

// Style
import "./ProjectDetail.scss";

const DEFAULT_IMAGE_QUALITY = 75;
const HERO_IMAGE_WIDTHS = [480, 768, 1200, 1600, 2000];
const HERO_IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1440px";
const EMBEDDED_IMAGE_WIDTHS = [480, 768, 1024, 1440];
const EMBEDDED_IMAGE_SIZES = "(max-width: 768px) 100vw, 960px";

const buildImageUrl = (
  fileUrl,
  { width, quality = DEFAULT_IMAGE_QUALITY, format } = {}
) => {
  if (!fileUrl) {
    return "";
  }

  const normalizedUrl = fileUrl.startsWith("http") ? fileUrl : `https:${fileUrl}`;
  const [baseUrl, existingQuery] = normalizedUrl.split("?");
  const params = new URLSearchParams(existingQuery || "");

  if (width) {
    params.set("w", width);
  }

  if (quality) {
    params.set("q", quality);
  }

  if (format) {
    params.set("fm", format);
  }

  const finalQuery = params.toString();
  return finalQuery ? `${baseUrl}?${finalQuery}` : baseUrl;
};

const createResponsiveImageProps = ({
  fileUrl,
  widths,
  quality = DEFAULT_IMAGE_QUALITY,
  fallbackWidth,
  sizes,
}) => {
  if (!fileUrl || !widths?.length) {
    return {};
  }

  const uniqueSortedWidths = [...new Set(widths)].sort((a, b) => a - b);
  const srcSet = uniqueSortedWidths
    .map((width) => `${buildImageUrl(fileUrl, { width, quality })} ${width}w`)
    .join(", ");

  const resolvedFallbackWidth =
    fallbackWidth && uniqueSortedWidths.includes(fallbackWidth)
      ? fallbackWidth
      : uniqueSortedWidths[Math.floor(uniqueSortedWidths.length / 2)];

  return {
    src: buildImageUrl(fileUrl, { width: resolvedFallbackWidth, quality }),
    srcSet,
    sizes,
  };
};

const getAssetAltText = (fields) =>
  fields?.description || fields?.title || "Project detail image";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  // Preload hero image if available

  componentDidMount() {
    this.preloadHeroImage(this.props.project);
  }

  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      this.preloadHeroImage(this.props.project);
    }
  }

  preloadHeroImage(project) {
    if (project?.fields?.heroImg?.fields?.file?.url) {
      const { file } = project.fields.heroImg.fields;
      const heroImageProps = createResponsiveImageProps({
        fileUrl: file.url,
        widths: HERO_IMAGE_WIDTHS,
        quality: DEFAULT_IMAGE_QUALITY,
        fallbackWidth: 1200,
        sizes: HERO_IMAGE_SIZES,
      });

      if (!heroImageProps.src) {
        return;
      }

      const existingLink = document.head.querySelector(
        'link[rel="preload"][data-hero-preload="true"]'
      );

      if (existingLink) {
        existingLink.parentNode.removeChild(existingLink);
      }

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroImageProps.src;
      if (heroImageProps.srcSet) {
        link.setAttribute("imagesrcset", heroImageProps.srcSet);
      }
      if (heroImageProps.sizes) {
        link.setAttribute("imagesizes", heroImageProps.sizes);
      }
      link.dataset.heroPreload = "true";
      document.head.appendChild(link);
    }
  }

  render() {
    if (!this.props.project) {
      return <div>Loading...</div>;
    }

    let fields = this.props.project.fields;
    let {
      clientName,
      title,
      projectRole,
      //projectYear,
      timeline,
      team,
      //collaborators,
      //responsibilities,
      overview,
      summary,
      contributions,
      projectUrl,
      roles,
      heroImg,
    } = fields;
    const heroImageFileUrl = heroImg?.fields?.file?.url;
    const heroImageProps = heroImageFileUrl
      ? createResponsiveImageProps({
          fileUrl: heroImageFileUrl,
          widths: HERO_IMAGE_WIDTHS,
          quality: DEFAULT_IMAGE_QUALITY,
          fallbackWidth: 1200,
          sizes: HERO_IMAGE_SIZES,
        })
      : {};
    let heroImgDesc = heroImg?.fields?.description;
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
          (() => {
            const assetFields = node.data.target.fields || {};
            const assetFileUrl = assetFields.file?.url;

            if (!assetFileUrl) {
              return null;
            }

            const assetImageProps = createResponsiveImageProps({
              fileUrl: assetFileUrl,
              widths: EMBEDDED_IMAGE_WIDTHS,
              quality: DEFAULT_IMAGE_QUALITY,
              fallbackWidth: 1024,
              sizes: EMBEDDED_IMAGE_SIZES,
            });

            const figureClassName = [assetFields.title, "img-wrap"]
              .filter(Boolean)
              .join(" ");

            return (
              <figure className={figureClassName}>
                <Zoom>
                  <img
                    src={assetImageProps.src}
                    srcSet={assetImageProps.srcSet}
                    sizes={assetImageProps.sizes}
                    alt={getAssetAltText(assetFields)}
                    loading="lazy"
                  />
                </Zoom>
                {assetFields.description && (
                  <figcaption>{assetFields.description}</figcaption>
                )}
              </figure>
            );
          })()
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
    // const iFrameTest =
    //   '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="550" src="https://embed.figma.com/design/xlvkTqxVzorNVR5FxiAUlL/Wireless-Retail-App--ESP-?node-id=2547-117192&embed-host=share&footer=false&page-selector=false&theme=dark" allowfullscreen></iframe>';

    // const iFrameProto =
    //   '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="550" src="https://www.figma.com/proto/xlvkTqxVzorNVR5FxiAUlL/Wireless-Retail-App--ESP-?page-id=1827%3A111667&node-id=2252-150439&viewport=571%2C1233%2C0.02&t=HuhMC51peX18xCrb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2252%3A150439&show-proto-sidebar=false&embed-host=share&footer=false&theme=dark" allowfullscreen></iframe>';

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
                key: { title },
                type: "spring",
                stiffness: 300,
                damping: 100,
                delay: 0.1,
              }}
            >
              <h1>
                <span className="client-name">{clientName}</span> {title}
              </h1>
            </motion.div>
            <motion.div
              key={heroImageFileUrl}
              className="hero-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 50,
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
              {heroImageProps.src && (
                <img
                  className="hero-img"
                  src={heroImageProps.src}
                  srcSet={heroImageProps.srcSet}
                  sizes={heroImageProps.sizes}
                  alt={heroImgDesc || title || "Project hero image"}
                />
              )}
            </motion.div>
            {overview && <ReactMarkdown source={overview} />}
            <dl>
              {projectRole && (
                <React.Fragment>
                  <dt>Role</dt>
                  <dd>{projectRole}</dd>
                </React.Fragment>
              )}
              {/* {projectYear && (
                <React.Fragment>
                  <dt>Year</dt>
                  <dd>{projectYear}</dd>
                </React.Fragment>
              )} */}
              {/* {responsibilities && (
                <React.Fragment>
                  <dt>Responsibilities</dt>
                  <dd>
                    {responsibilities.map((responsibility, index) => (
                      <span key={index}>
                        {responsibility}
                        {index < responsibilities.length - 1 && ", "}
                      </span>
                    ))}
                  </dd>
                </React.Fragment>
              )} */}
              {team && (
                <React.Fragment>
                  <dt>Team</dt>
                  <dd>{team}</dd>
                </React.Fragment>
              )}
              {/* {collaborators && (
                <React.Fragment>
                  <dt>Collaborators</dt>
                  <dd>
                    {collaborators.map((collaborator, index) => (
                      <span key={index}>
                        {collaborator}
                        {index < collaborators.length - 1 && ", "}
                      </span>
                    ))}
                  </dd>
                </React.Fragment>
              )} */}
              {timeline && (
                <React.Fragment>
                  <dt>Timeline</dt>
                  <dd>{timeline}</dd>
                </React.Fragment>
              )}
              {/* <dt>Team</dt>
              <dd>PM, Engineers, QA</dd> */}
            </dl>
          </header>

          {/* <div dangerouslySetInnerHTML={{ __html: iFrameTest }}></div>

          <div dangerouslySetInnerHTML={{ __html: iFrameProto }}></div> */}

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
            delay: 0.1,
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
