import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
// import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='*'><Redirect to="/" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
