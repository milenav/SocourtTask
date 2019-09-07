import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../src/views/home'
import Navigation from '../src/components/navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navigation />
              <Switch>
                <Route path='/api/books' exact component={Home} />      
              </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
