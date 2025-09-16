// Deps
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import resumePDF from "../../assets/dan-root_resume.pdf";
import throttle from "lodash.throttle";
//import { motion } from "framer-motion";
//import { Tween } from 'react-gsap';

// Style
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTablet: false,
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowResize = throttle(this.handleWindowResize, 200);
  }

  handleWindowResize() {
    this.setState({ isTablet: window.innerWidth >= 600 });
  }

  UNSAFE_componentWillMount() {
    this.handleWindowResize();
    this.setState({
      isOpen: false,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    //const { isTablet } = this.state;

    // const TweenComponent = () => (
    //   <Tween from={{ x: '100px', rotation: -360 }}>
    //     <div>This element gets tweened</div>
    //   </Tween>
    // );

    return (
      <header className="global">
        <div className="">
          {/* {isTablet ? (
            <nav>
              <NavLink exact activeClassName="active" to="/" className="logo">
                Dan Root<span className="job-title">Product Designer</span>
              </NavLink>
              <NavLink activeClassName="active" to="/projects">
                Projects
              </NavLink>
              <a href={`/${resumePDF}`}>
                Resumé
              </a>
              <NavLink activeClassName="active" to="/playground">
                Playground
              </NavLink>
            </nav>
          ) : (
            <nav>
              <TweenComponent />
              <NavLink exact activeClassName="active" to="/" className="logo">
                Dan Root<span className="job-title">Product Designer</span>
              </NavLink>
              <button>Menu</button>
              <div className="menu">
                <NavLink activeClassName="active" to="/projects">
                  Projects
                </NavLink>
                <a href={`/${resumePDF}`}>
                  Resumé
                </a>
                <NavLink activeClassName="active" to="/playground">
                  Playground
                </NavLink>
              </div>
            </nav>
          )} */}

          <nav>
            <NavLink exact activeClassName="active" to="/" className="logo">
              Dan Root{" "}
              <span className="job-title">Sr. UX/UI Product Designer</span>
            </NavLink>

            <NavLink activeClassName="active" to="/case-studies">
              {/* <span className="material-symbols-rounded">
                work
              </span> */}
              Case Studies
            </NavLink>

            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>

            {/* <NavLink activeClassName="active" to="/playground">
              Playground
            </NavLink> */}

            <a href={`${resumePDF}`} target="_blank" rel="noopener noreferrer">
              Resumé
              {/* <span className="material-symbols-rounded">
                picture_as_pdf
              </span> */}
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
