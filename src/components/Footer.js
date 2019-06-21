import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
footer: {
  boxSizing: 'border-box',
  height: 120,
  backgroundColor: '#001b3a',
  margin:0,
  width: '100%',
  paddingTop: 50
},
nav: {
  width: '30%',
  margin: '0 auto'
},
nav_list: {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 0,
  paddingLeft: 0
},
nav_item: {
  fontSize: 12,
  color: 'white',
  listStyle: 'none',
  textTransform: 'uppercase'
},
nav_item_link: {
  color: 'white'
}

})

const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}><a className={classes.nav_item_link} href ='#'>About Us</a></li>
          <li className={classes.nav_item}><a className={classes.nav_item_link} href ='#'>Contacts</a></li>
          <li className={classes.nav_item}><a className={classes.nav_item_link} href ='#'>Work here</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
