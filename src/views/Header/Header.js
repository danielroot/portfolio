// Deps
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import resumePDF from '../../assets/dan-root_resume_2020.pdf';
import throttle from "lodash.throttle";
import { motion } from "framer-motion";
//import { Tween } from 'react-gsap';

// Style
import "./Header.scss";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTablet: false
    };

    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleWindowResize = throttle(this.handleWindowResize, 200);
  }

  handleWindowResize() {
    this.setState({ isTablet: window.innerWidth >= 600 });
  }

  componentWillMount() {
    this.handleWindowResize();
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
        <div className="container">
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

          <motion.nav initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
            <NavLink exact activeClassName="active" to="/" className="logo">
              Dan Root<span className="job-title">UX/UI Product Designer</span>
            </NavLink>
            {/* <NavLink activeClassName="active" to="/about">
              About
            </NavLink> */}

            <NavLink activeClassName="active" to="/projects">
              Projects
            </NavLink>

            <NavLink activeClassName="active" to="/playground">
              Playground
            </NavLink>

            <a href={`/${resumePDF}`} target="_blank" rel="noopener noreferrer">
              Resumé (PDF)
            </a>
          </motion.nav>

        </div>
      </header>
    );
  }
}


export default Header;
