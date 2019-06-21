import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  nav_list: {
    width: 300
  }
})

const NotFound = () => {
  const classes = useStyles();

  return(
<h1>hi</h1>
  )
}

export default NotFound;
