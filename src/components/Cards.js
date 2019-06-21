import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Journalist from '../images/journalist.png'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    width: 340,
    height:200,
    marginTop:'30px'
    },
  cards: {
    margin: '25px',
    minHeight: 'calc(96vh - 341px)',
    boxSizing: 'border-box',
    padding: '8px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  journalist_div: {
    width: '100%',
    height: 100,
    display: 'flex'
  },
  journalist_img: {
    height: '50%',
    position: 'absolute',
    left: 0,
    top: 40
  },
  journalist_text: {
    height: 30,
    color: 'white',
    margin: '0 auto',
    fontWeight: 100
  }
});



const Facts = () => {
  const [catFacts, setCatFacts] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts`)
      .then(response => {
        console.log(response);
        setCatFacts(response.data.all);
      });
  }, []);

  return (
    <div className={classes.cards}>
      <div className={classes.journalist_div}>
        <img className={classes.journalist_img}src={Journalist} alt="Logo" />
        <h2 className={classes.journalist_text}>Let me tell you some facts about the cutest animals in the World</h2>
      </div>
      {catFacts.map(fact => {

        return (
            <Card className={classes.card} key={fact._id}>
              <CardActionArea>

                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {fact.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" component={Link} to={`/cards/${fact._id}/`}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
        );
      })}
    </div>
  );
}


export default Facts;
