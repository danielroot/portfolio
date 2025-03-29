// Deps
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";
import throttle from "lodash.throttle";
import { motion } from "framer-motion";

// Style
import "./ProjectCard.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTablet: false,
      isLoading: true,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowResize = throttle(this.handleWindowResize, 200);
  }

  handleWindowResize() {
    this.setState({
      isTablet: window.innerWidth >= 600,
    });
  }

  UNSAFE_componentWillMount() {
    this.handleWindowResize();
    this.timerHandle = setTimeout(
      () =>
        this.setState({
          isLoading: false,
        }),
      2000
    );
    this.setState({
      isOpen: false
    });
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
      clientName,
      title,
      //clientLogo,
      cardText,
      //previewImage,
      cardImg,
    } = fields;

    //let clientLogoUrl = clientLogo && `https:${clientLogo.fields.file.url}`;
    let cardImgUrl = cardImg && `https:${cardImg.fields.file.url}`;
    let category = this.props.sys.contentType.sys.id;
    //const { isTablet } = this.state;
    const loadingItemVariants = {
      start: {
        y: -10,
        opacity: 0,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      end: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    };

    return (
      <motion.div variants={loadingItemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={`project-${slug}`}>

      <Link to={`/${category}/${slug}`} aria-labelledby={`card-${slug}`} className='project-card--wrapper'>
        <project-card>

          <img
            src={`${cardImgUrl}`}
            className={`cover-img ${slug}`}
            loading="lazy"
          />

          <figure>
            {/* {
            clientLogoUrl && (
              <img src = {clientLogoUrl}
              className = {`client-logo ${slug}`}
              alt = {`${title} logo`}aria-hidden="true" />
            )} */}
            <h3 id={`card-${slug}`}><strong>{clientName}</strong> {title}</h3>
            { cardText && (
              <p>{cardText}</p>
            )}
          </figure>
        </project-card>
      </Link>
      </motion.div>


      // <motion.div
      //   variants={loadingItemVariants}
      //   whileHover={{ scale: 1.03 }}
      //   whileTap={{ scale: .98 }}
      // >
      //   <Link to={`/${category}/${slug}`} aria-labelledby={`card-${slug}`} className='project-card--wrapper'>
      //     <project-card>
      //       {/* {isTablet && (
      //         <img
      //           src={`${cardImgUrl}?w=500`}
      //           className={`cover-img ${slug}`}
      //           loading="lazy"
      //         />
      //       )} */}
      //       <figure>
      //         {
      //         clientLogoUrl && (
      //           <img src = {clientLogoUrl}
      //           className = {`client-logo ${slug}`}
      //           alt = {`${title} logo`}aria-hidden="true" />
      //         )}
      //         <h3 id={`card-${slug}`}>{title}</h3>
      //         { cardText && (
      //           <p>{cardText}</p>
      //         )}
      //       </figure>
      //     </project-card>
      //   </Link>
      // </motion.div>
    );
  }
}

ProjectCard.propTypes = {
  fields: shape({
    clientName: string,
    title: string,
    slug: string,
    previewImage: shape({
      fields: shape({
        file: shape({
          url: string,
        }),
      }),
    }),
  }),
  sys: shape({
    contentType: shape({
      sys: shape({
        id: string,
      }),
    }),
  }),
};

export default ProjectCard;
