import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Selfiecat from '../images/selfie_cat.png';
import Balloon from '../images/balloon1.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
selfiecat: {
  width:'100%',
},
balloon: {
  position: 'absolute',
  width: '30%',
  top: '18%',
  left: '60%',
  transform: 'scaleX(-1)'
},
ballon_content: {
  position: 'absolute',
  width: '20%',
  top: '18%',
  left: '65%',
  margin: '0 auto',
  textAlign: 'center'
},
ballon_text: {
  width:250,
  fontSize: 32,
  textAlign: 'center',
  marginBottom: 10
},
ballon_btn: {
  margin: '0 auto'
}
});


const Main = () => {
  const classes = useStyles();
  return(
    <main className={classes.main}>
      <div className={classes.selfiecat}>
        <img className={classes.selfiecat}src={Selfiecat} alt="Logo" />
        <img className={classes.balloon}src={Balloon} alt="speechcloud" />
        <div className={classes.ballon_content}>
          <p className={classes.ballon_text}>Wanna know some interesting facts about cats?</p>
          <Button className={classes.ballon_btn} color="secondary" size="medium" component={Link} to={'/cards/'}>
            Click here
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Main;
