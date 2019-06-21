import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SurprisedCat from '../images/corner-cat.png'

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    paddingBottom: 100
  },
  card: {
    maxWidth: 345,
    margin: '0 auto'
  },
  media: {
    height: 250,
  },
  create_date: {
    fontWeight: 800,
    marginTop: 15
  },
  info: {
    paddingBottom: 0,
    paddingTop: 0
  },
  surprised_cat: {
    position: "absolute",
    bottom: -70,
    left: 0,
    zIndex: -1
  }
});

const AddPhoto = () => {
  const url = "https://source.unsplash.com/collection/139386/200x200/?sig=";
  const randomNum = () => {
  return Math.floor(Math.random() * 100000);
};
  let photo = `${url}${randomNum()}`;
  return photo;
}

const CutDate = (created) => {
  created =typeof created==="string" ?created.slice(' ', 10):""
  return created;
}

const CatCard = ({match}) => {
  const classes = useStyles();
  const [factCard, setCatCard] = React.useState({});


React.useEffect(() => {
  axios
  .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
  .then(response => {
    setCatCard(response.data);
  });
}, [match.params.id]);

  return(

      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            src={AddPhoto()}
            />
            <CardContent ClassName={classes.info}>
              <Typography gutterBottom variant="h5" component="h2">
                Interesting Fact:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {factCard.text}
              </Typography>
              <Typography className={classes.create_date}variant="body2" color="textSecondary" component="p">
                Created: {CutDate(factCard.createdAt)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      <img className={classes.surprised_cat} src={SurprisedCat} alt="Logo" />
    </div>
  ) 
}


export default CatCard;
