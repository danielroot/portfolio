// Deps
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to='/style-guide'>Style Guide</Link>
        <a href='http://www.dribbble.com/danrootdesign'>Dribbble</a>
        <a href='http://www.github.com/danielroot'>Github</a>
        <a href='http://www.codepen.io/danroot'>Codepen</a>
        <a href='http://www.linkedin.com/danrootdesign'>LinkedIn</a>
        <a href='http://www.instagram.com/danroot.co'>Instagram</a>
      </nav>

      <p>
        Site hand-coded with VS Code and using React JS, Sass, Webpack, and
        Contenful CMS API. Made in Seattle, WA
      </p>
      <small>© 2000 - 2017</small>
    </footer>
  )
};

export default Footer
