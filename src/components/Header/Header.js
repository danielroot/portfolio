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
            Root
          </NavLink>
          <NavLink activeClassName="active" to="/case-studies">
            Case Studies
          </NavLink>
          <NavLink activeClassName="active" to="/design">
            Design
          </NavLink>
          <NavLink activeClassName="active" to="/code">
            Code
          </NavLink>
          <NavLink activeClassName="active" to="/illustration">
            Illustration
          </NavLink>
          <NavLink activeClassName="active" to="/process">
            Resumé
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
