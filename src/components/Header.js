import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="global">
      <nav>
        <Link to="/">/Root</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/process">Resumé</Link>
      </nav>
    </header>
  )
}

export default Header;