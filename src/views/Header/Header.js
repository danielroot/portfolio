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
            Dan Root | <small>Design Technologist</small>
          </NavLink>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
          {/*<NavLink activeClassName="active" to="/prototypes">
            Prototypes
  </NavLink>*/}
          <NavLink activeClassName="active" to="/playground">
            Playground
          </NavLink>
          {/* <NavLink activeClassName="active" to="/about">
            About
</NavLink>*/}
          {/*<NavLink activeClassName="active" to="/resume">
            Resumé
  </NavLink>*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;
