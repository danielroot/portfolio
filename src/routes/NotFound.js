// Deps
import React, { Component } from "react";
import Art from "../assets/404-art.svg";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <Art className="hero" />
        <div>
          <h2>Sorry, page Not Found!</h2>
          <p><Link to="/projects" className="btn-link">Back to All Projects</Link></p>
        </div>
      </div>
    );
  }
}

export default NotFound;
