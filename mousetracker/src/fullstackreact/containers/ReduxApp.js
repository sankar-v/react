import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// We'll load our views from the `src/views`
// directory
import Home from '../views/Home/Home';
import About from '../views/About/About';

const ReduxApp = props => {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
          component={About} />
        <Route
          path="*"
          component={Home} />
      </Switch>
    </Router>
  )
}

export default ReduxApp;