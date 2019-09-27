import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css';


export default function ButtonAppBar() {

  return (
    <div className='Header'>
      <AppBar position="static">
        <Toolbar className='Header-app-bar' >
          <Typography variant="h6" className="header-title">
            Revision.io &nbsp;&nbsp;&nbsp;
          </Typography>
          <Button className='header-button' color="inherit">Explore&nbsp;</Button>
          <Button className='header-button' color="inherit">My Thread&nbsp;</Button>
          <Button className='header-button' color="inherit">Feed back&nbsp;</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}