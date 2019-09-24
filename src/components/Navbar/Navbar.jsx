import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <Link className="brand-logo" to="/">Revision.io</Link>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to='/explore'>Explore</NavLink></li>
        <li><NavLink to='/feedback'>Feedback</NavLink></li>
      </ul>
    </nav> 
  )
}

export default withRouter(Navbar)