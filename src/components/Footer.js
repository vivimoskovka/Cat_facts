import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
footer: {
  height: 40,
  backgroundColor: '#001b3a',
  padding: 15
},
nav: {
  width: '25%',
},
nav_list: {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 0
},
nav_item: {
  fontSize: 12,
  color: 'white',
  listStyle: 'none',
  textTransform: 'uppercase'
}

})

const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
    <nav className={classes.nav}>
      <ul className={classes.nav_list}>
        <li className={classes.nav_item}>About Us</li>
        <li className={classes.nav_item}>Contacts</li>
        <li className={classes.nav_item}>Work here</li>
      </ul>
    </nav>
    </footer>
  )
}

export default Footer;
