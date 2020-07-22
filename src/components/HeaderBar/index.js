import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.jpg';
import './index.css'


export default function Pricing(props) {
  return (
    <AppBar position="static" color="default" elevation={0} className={props.classes.appBar}>
      <div className='bigScreen'>
        <Toolbar className={props.classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={props.classes.toolbarTitle}>
            <img className={props.classes.logoSmall} src={logo} />
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#kontakt" className={props.classes.link}>
              Jak dojechać?
            </Link>
          </nav>
          <Button href="tel:227508678" color="primary" variant="contained" className={props.classes.link}>
            Zadzwoń: (22)750-86-78
          </Button>

        </Toolbar>
      </div>

      <div className='smallScreen'>

          <Link variant="button" color="textPrimary" href="#kontakt" className={props.classes.link}>
            Jak dojechać?
            </Link>
          <Button href="tel:227508678" color="primary" variant="contained" className={props.classes.link}>
            Zadzwoń: (22)750-86-78
          </Button>
      </div>
    </AppBar>
  )
}