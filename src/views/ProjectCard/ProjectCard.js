// Deps
//import React, { useState, useEffect, useCallback } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { shape, string } from "prop-types";
//import throttle from "lodash.throttle";
import { motion } from "framer-motion";

// Style
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  //const [isTablet, setIsTablet] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(null);

  // const handleWindowResize = useCallback(
  //   throttle(() => {
  //     setIsTablet(window.innerWidth >= 600);
  //   }, 200),
  //   []
  // );

  // useEffect(() => {
  //   try {
  //     window.addEventListener("resize", handleWindowResize);
  //     handleWindowResize();

  //     const timerHandle = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);

  //     return () => {
  //       window.removeEventListener("resize", handleWindowResize);
  //       if (timerHandle) {
  //         clearTimeout(timerHandle);
  //       }
  //     };
  //   } catch (err) {
  //     setError(err);
  //     console.error("Error in ProjectCard:", err);
  //   }
  // }, [handleWindowResize]);

  // if (error) {
  //   return <div className="error-message">Error loading project card</div>;
  // }

  if (!props.fields) {
    console.warn("ProjectCard: fields prop is undefined");
    return <div className="loading-message">Loading project...</div>;
  }

  const fields = props.fields;
  const {
    slug = "unknown",
    clientName = "Unknown Client",
    title = "Untitled Project",
    cardText,
    cardImg,
  } = fields;

  if (!slug) {
    console.warn("ProjectCard: slug is undefined for project", fields);
    return <div className="error-message">Invalid project data</div>;
  }

  const cardImgUrl = cardImg?.fields?.file?.url
    ? `https:${cardImg.fields.file.url}`
    : null;
  const category = "case-study";

  // const loadingItemVariants = {
  //   start: {
  //     y: -10,
  //     opacity: 0,
  //     transition: {
  //       y: { stiffness: 1000, velocity: -100 },
  //     },
  //   },
  //   end: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       y: { stiffness: 1000 },
  //     },
  //   },
  // };

  return (
    <motion.div
      whileHover={{ scale: 0.97 }}
      //whileTap={{ scale: 0.98 }}
      className={`project-${slug}`}
    >
      <Link
        to={`/${category}/${slug}`}
        aria-labelledby={`card-${slug}`}
        className="project-card--wrapper"
      >
        <project-card>
          {cardImgUrl && (
            <img
              src={cardImgUrl}
              className={`cover-img ${slug}`}
              loading="lazy"
              alt={`${title} cover image`}
            />
          )}
          <figure>
            <h3 id={`card-${slug}`}>
              <strong>{clientName}</strong> | {title}
            </h3>
            {cardText && <p>{cardText}</p>}
          </figure>
        </project-card>
      </Link>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  fields: shape({
    clientName: string,
    title: string,
    slug: string,
    cardText: string,
    cardImg: shape({
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
