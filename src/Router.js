import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Cards from './components/Cards.js'
import Card from './components/Card.js'
import Main from './components/Main.js'
import NotFound from './components/NotFound.js'


const AppRouter = () => {
  return(
    <Router>
    <Switch>
    <Route path ='/' exact component={Main}/>
    <Route path ='/cards/' exact component={Cards}/>
    <Route path ='/cards/:id' exact component={Card}/>
    <Route path = '*' component={NotFound}/>
    </Switch>
    </Router>
  )
}


export default AppRouter;
