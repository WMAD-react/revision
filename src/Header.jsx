import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function ButtonAppBar() {
//   const classes = useStyles();

  return (
    <div className='Header'>
      <AppBar position="static">
        <Toolbar className='Header-app-bar' >
          {/* <IconButton edge="start" className='button' color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className="title">
            Revision.io &nbsp;&nbsp;&nbsp;
          </Typography>
          <Button className='button' color="inherit">Explore&nbsp;</Button>
          <Button className='button' color="inherit">My Thread&nbsp;</Button>
          <Button className='button' color="inherit">Feed back&nbsp;</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}