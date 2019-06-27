import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import App from './App'
import Intro from './Intro'
import Houses from './Houses'
import House from './House'
import HouseInfo from './HouseInfo'


export default props => (
  <Router>
    <Route exact path='/' render={() => <App />} >
      <Route exact path='/intro' render={() => <Intro />} />
      <Route exact path='/houses' render={() => <Houses />} />
      <Route exact path='/houses/:houseId' render={(props) => <HouseInfo {...props} />} />
    </Route>
  </Router>
)