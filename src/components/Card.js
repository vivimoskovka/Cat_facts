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


const useStyles = makeStyles(theme => ({
card: {
maxWidth: 345,
}
}));


const CatCard = ({match}) => {
const classes = useStyles();
const [factCard, setCatCard] = React.useState(null);

React.useEffect(() => {
  axios
  .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
  .then(response => {
    setCatCard(response.data);
    console.log(response);
  });
}, [match.params.id]);
}
/*return(
  <div className={classes.cat_fact}>
          <Card className={classes.cat_fact_card}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {factCard.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
    })
  </div>
)*/


export default CatCard;
