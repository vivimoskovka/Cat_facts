import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Instalogo from '../images/insta_logo.png';
require('typeface-neucha')

const useStyles = makeStyles({
  header: {
    width: '90%',
    height: 200,
    paddingTop: 10,
    margin: '0 auto'
  },
  header_flex:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'top'
  },
  header_title: {
    color: '#f56265',
    fontFamily: '"Neucha", sans-serif',
    fontSize: 48,
    fontWeight: 800,
    margin:0
  },
  header_text: {
    fontWeight: 100,
    fontSize: 14,
    color: 'white',
    margin: 0
  },
  following: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    height: 25,
    alignItems: 'center',
    textAlign: 'left'
  },
  follow_link: {
    color:'white'
  },
  right: {
    display: 'flex',
    width: 250,
    height: 100,
  },
  instalogo:{
    width: 40,
    height:40,
    marginTop: 5,
    marginLeft: 10
  }

})

const Header = () => {
   const classes = useStyles();
  return(
    <header className={classes.header}>
      <div className={classes.header_flex}>
        <div className={classes.left}>
          <div className={classes.wellcome}>
            <h1 className={classes.header_title}>Love MEow!</h1>
            <h2 className={classes.header_text}>Website about cats</h2>
          </div>
        </div>
        <div className={classes.right}>
          <p className={classes.following}>Follow us on <a className={classes.follow_link}href="instagram.com">Insta</a></p>
          <img className={classes.instalogo}src={Instalogo} alt="Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;
