import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Cards from './components/Cards.js'
import Card from './components/Card.js'
import Main from './components/Main.js'
// import Card from './components/Card.js'


const AppRouter = () => {
  return(
    <Router>
    <Route path ='/' exact component={Main}/>
    <Route path ='/cards/' exact component={Cards}/>
    <Route path ='/cards/:id' exact component={Card}/>
    </Router>
  )
}


export default AppRouter;
