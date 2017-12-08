// Deps
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='global'>
      <nav>
        <NavLink exact activeClassName='active' to='/'>/Root</NavLink>
        <NavLink activeClassName='active' to='/case-studies'>Case Studies</NavLink>
        <NavLink activeClassName='active' to='/labs'>Labs</NavLink>
        <NavLink activeClassName='active' to='/process'>Resumé</NavLink>
      </nav>
    </header>
  )
}

export default Header
