import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';


export default function ButtonAppBar() {

  return (
    <div className='Header'>
      <AppBar position="static">
        <Toolbar className='Header-app-bar' >
          <Typography variant="h6" className="Header-title">
            <Link to="/">Revision.io &nbsp;&nbsp;&nbsp;</Link>
          </Typography>
          <NavLink exact to="/" className="Header-button">Home</NavLink>
          <NavLink to='/explore' className="Header-button">Explore</NavLink>
          <NavLink to='/feedback' className="Header-button">Feedback</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}