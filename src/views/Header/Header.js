// Deps
import React from "react";
import { NavLink } from "react-router-dom";

// Style
import "./Header.scss";

const Header = () => {
  return (
    <header className="global">
      <div className="container">
        <nav>
          <NavLink exact activeClassName="active" to="/" className="logo">
            Dan Root | <small>Product Designer</small>
          </NavLink>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
          {/*<NavLink activeClassName="active" to="/prototypes">
            Prototypes
  </NavLink>*/}

          {/* <NavLink activeClassName="active" to="/about">
            Process
</NavLink> */}
          {/* <Link to="/resume_dan-root.pdf">
            Resumé
          </Link> */}
        <NavLink activeClassName="active" to="/playground">
            Playground
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
