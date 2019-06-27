import React from 'react';
import Menu from './Menu';
import Intro from './Intro';
import Houses from './Houses';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Houses App</h1>
      </header>
      <div>
        <Router>
          <Menu />    
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/houses" component={Houses} />
        </Router>
      </div>
    </div>
  );
}

export default App;
