//
//

import React from 'react';
import Header from './components/Header';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/chat'>
            <h1>I am Chat Page</h1>
          </Route>
          <Route path='/'>
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
